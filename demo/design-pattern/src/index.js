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

import {House, A, B} from './uml/index'

// 测试
let aHouse = new House('北京')
let a = new A('aaa', aHouse)
console.log(a)
let b = new B('bbb')
console.log(b)