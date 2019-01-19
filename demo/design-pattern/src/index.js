// import Person from './extends/Person'
// import Student from './extends/Student';

// let viv = new Person('viiv', 21)
// viv.eat()
// viv.speak()

// let seek = new Student('seek', 22, 'A1')
// seek.eat()
// seek.speak()
// seek.study()
// alert(`seek's number is ${seek.number}`)

// import Student from './typescript/Student'

// let xiaoming = new Student('xiaoming', 20, 'A1')
// xiaoming.getWeight()

// import jQuery from './extends/Jquery'

// window.$ = function(selector) {
//     return new jQuery(selector)
// }

// var $p = $('p')
// console.log('p', $p)

// import {House, A, B} from './uml/index'

// // 测试
// let aHouse = new House('北京')
// let a = new A('aaa', aHouse)
// console.log(a)
// let b = new B('bbb')
// console.log(b)


// import { loadImg } from './design/promise'

// let src = 'https://github.com/viivLgr/viivBlog/blob/master/images/uml-2.png?raw=true'

// loadImg(src).then(img => {
//     console.log(`width: ${img.width}`)
//     return img
// }).then(img => {
//     console.log(`height: ${img.height}`)
// }).catch(err => {
//     console.log('err', err)
// })

// import { FastCar, SpecialCar, Trip } from './design/car/1'

// const fastCar = new FastCar('seek', '浙A123456')
// const specialCar = new SpecialCar('viiv', '浙A111222')

// const trip = new Trip(specialCar)
// trip.start()
// trip.end(5)

// import { Park, Floor, Lot, Car } from './design/car/2.test'

// // ----------------------测试----------------------
// // 初始化停车场
// const floors = []
// for(let i = 0; i < 3; i++) {
//     const lots = []
//     for(let j = 0; j < 100; j++) {
//         lots[j] = new Lot()
//     }
//     floors[i] = new Floor(i+1, lots)
// }

// const park = new Park(floors)
// console.log(park)

// // 初始化车辆
// const car1 = new Car(100)
// const car2 = new Car(89)
// const car3 = new Car(12)

// console.log('第一辆车进入')
// console.log(park.emptyNum())
// park.in(car1, 2)

// console.log('第二辆车进入')
// console.log(park.emptyNum())
// park.in(car2, 1)


// console.log('第一辆车离开')
// park.out(car1)

// console.log('第二辆车离开')
// park.out(car2)


// console.log('第三辆车进入')
// console.log(park.emptyNum())
// park.in(car3, 1)

// console.log('第三辆车离开')
// park.out(car3)

// -------工厂模式-----------
// import { Creator } from './design/factory/index'

// let creator = new Creator()
// let p = creator.create('p1')
// p.init()
// p.fn1()

// ------------单例模式----------------
// import {SingleObject} from './design/singleObject/SingleObject'

// let obj1 = SingleObject.getInstance()
// obj1.login()

// let obj2 = SingleObject.getInstance()
// obj2.login()
// console.log('obj1 === obj2', obj1 === obj2) // 两者必须完全相等

// console.log('--分隔--')
// let obj3 = new SingleObject()  // 无法完全控制
// obj3.login()
// console.log('obj1 === obj3', obj1 === obj3)


// -------------单例模式：登录框-----------

// import {LoginForm} from './design/singleObject/loginForm'

// const login1 = LoginForm.getInstance()
// login1.show()

// const login2 = LoginForm.getInstance()
// login2.hide()

// console.log('login1 === login2', login1 === login2)

// ----------测试适配器模式------------
// import { Target } from './design/adaptee/index'
// let target = new Target()
// let result = target.request()
// console.log('result', result)



// // ---------------装饰器模式----------------
// import './design/decorator/index'

// // ---------------装饰器模式-ES7语法----------------
// import './design/decorator/Demo'

// // -----装饰器模式-ES7语法-mixins----------------
// import './design/decorator/mixin'

// // ------装饰器模式-ES7语法-readonly----------------
// import './design/decorator/readonly'

// // ------装饰器模式-ES7语法-log----------------
// import './design/decorator/log'

// // ------装饰器模式-core-decorators----------------
// import './design/decorator/core-decorators'


// // ------代理模式-readImg----------------
// import './design/proxy/readImg'

// // ------代理模式-明星经纪人----------------
// import './design/proxy/proxyStar'


// // ------观察者模式----------------
// import './design/observer/index'

// // ------观察者模式--nodejs--------------
// import './design/observer/nodejs'

// // ------迭代器模式--iterator--------------
// import './design/iterator/index'

// // ------迭代器模式--es6 iterator--------------
// import './design/iterator/es6-iterator'

// // ------迭代器模式--es6 for...of--------------
// import './design/iterator/es6-for-of'

// // ------迭代器模式--es6 generator--------------
// import './design/iterator/es6-generator'

// // ------状态模式 红绿灯--------------
// import './design/state/color'

// // ------状态模式 javascript-state-machine --------------
// import './design/state/stateMachine'

// // ------状态模式 promise --------------
// import './design/state/promise'

// // ------原型模式 prototype --------------
// import './design/prototype/index'

// // ------桥接模式 color --------------
import './design/bridge/index'

