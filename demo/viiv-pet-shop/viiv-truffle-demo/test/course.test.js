const path = require('path');
const assert = require('assert');
const Web3 = require('web3');
const ganache = require('ganache-cli');

const web3 = new Web3(ganache.provider());

// 引入合约的json
const CourseList = require(path.resolve(__dirname, '../src/compiled/CourseList.json'));
const Course = require(path.resolve(__dirname, '../src/compiled/Course.json'));

// 定义几个全局变量
let accounts;
let courseList;
let course;
describe('测试课程的智能合约', () => {
    before(async () => {
        // 测试前的数据初始化
        accounts = await web3.eth.getAccounts();
        // 1. 虚拟部署一个合约
        courseList = await new web3.eth.Contract(JSON.parse(CourseList.interface))
            .deploy({
                data: CourseList.bytecode
            })
            .send({
                // 最后一个是创建者
                from: accounts[9],
                gas: '5000000'
            })
        console.log('合约部署成功', courseList);
    })
    it('合约部署成功', () => {
        console.log('合约部署成功', courseList)
        // assert.ok(courseList.options.address);
    })
    it('测试添加课程', async () => {
        const oldAddress = await courseList.methods.getCourse().call();
        assert.equal(oldAddress.length, 0)
        await courseList.methods.createCourse(
            'viiv的React课程',
            'React + Redux + React Router 4开发招聘APP',
            web3.utils.toWei('8'),
            // 众筹价格
            web3.utils.toWei('2'),
            web3.utils.toWei('4'),
            '图片的hash'
            )
            .send({
                from: accounts[0],
                gas: '5000000'
            })
        const address = await courseList.methods.getCourse().call();
        assert.equal(address.length, 1)
    })
    it('添加课程的属性', async () => {
        const address = await courseList.methods.getCourse().call();
        course = await new web3.eth.Contract(JSON.parse(Course.interface), address);
        const name = await course.methods.name().call();
        const content = await course.methods.content().call();
        const target = await course.methods.target().call();
        const fundingPrice = await course.methods.fundingPrice().call();
        const price = await course.methods.price().call();
        const img = await course.methods.img().call();
        const count = await course.methods.count().call();
        const isOnline = await course.methods.isOnline().call();
        assert.equal(name, 'viiv的React课程123')
        assert.equal(content, 'React + Redux + React Router 4开发招聘APP')
        assert.equal(target, web3.utils.toWei('8'))
        assert.equal(fundingPrice, web3.utils.toWei('2'))
        assert.equal(price, web3.utils.toWei('4'))
        assert.equal(img, '图片的hash')
        assert.equal(count, 0)
        assert.ok(!isOnline)
    })
    it('删除课程', async () => {
        await courseList.methods.createCourse(
            'viiv的Vue课程',
            'Vue是个简单好上手的框架',
            web3.utils.toWei('8'),
            // 众筹价格
            web3.utils.toWei('2'),
            web3.utils.toWei('4'),
            '图片的hash2'
            )
            .send({
                from: accounts[0],
                gas: '5000000'
            })
        const address = await courseList.methods.getCourse().call();
        assert.equal(address.length, 2);
        // 1. ceo才能删
        // 2. 索引正确
        await courseList.methods.removeCourse(0).send({
            from: accounts[1]
        });
    })
    it('判断是不是CEO', async () => {
        const isCeo1 = await courseList.methods.isCeo().call({
            from: accounts[9]
        })
        const isCeo2 = await courseList.methods.isCeo().call({
            from: accounts[0]
        })
        assert.ok(isCeo1);
        assert.ok(!isCeo2);
    })
    it('金钱转换', () => {
        assert.equal(web3.utils.toWei('2'), '2000000000000000000')
    })
    it('课程购买', async () => {
        await course.methods.buy().send({
            from: accounts[2],
            value: web3.utils.toWei('2')
        });
        const value = await course.methods.users(accounts[2]).call();
        const count = await course.methods.count().call();
        assert.equal(value, web3.utils.toWei('2'));
        assert.equal(count, 1);


        // 用户role的判断
        const detail = await course.methods.getDetail().call({from: accounts[0]});
        assert.equal(detail[9], 0); // 创建者
        console.log('detail', detail);

        const detail2 = await course.methods.getDetail().call({from: accounts[2]});
        assert.equal(detail2[9], 1); // 已购买

        const detail3 = await course.methods.getDetail().call({from: accounts[3]});
        assert.equal(detail3[9], 2); // 未购买
    })
})