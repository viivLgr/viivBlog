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


import { Creator } from './design/factory/index'

let creator = new Creator()
let p = creator.create('p1')
p.init()
p.fn1()