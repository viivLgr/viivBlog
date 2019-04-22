const fs = require('fs');
const path = require('path');
const solc = require('solc');

// const constractPath = '../constracts/Viiv.sol';
// 文件路径
const constractPath = path.resolve(__dirname, '../contracts/Viiv.sol');
// 获取合约文件内容
const source = fs.readFileSync(constractPath, 'utf-8');
// 编译
const ret = solc.compile(source);
if(Array.isArray(ret.errors) && ret.errors.length > 0) {
    console.log('出错了', ret.errors[0])
} else {
    Object.keys(ret.contracts).forEach(name => {
        const contractName = name.slice(1);
        const filePath = path.resolve(__dirname, `../src/compiled/${contractName}.json`);
        fs.writeFileSync(filePath, JSON.stringify(ret.contracts[name]));
        console.log(`${filePath} bingo!`)
    })
}
// console.log(ret)