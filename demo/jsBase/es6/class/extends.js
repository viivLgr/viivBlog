// function Animal() {
//     this.eat = function(){
//         console.log('animal eat')
//     }
// }

// function Dog() {
//     this.bark = function() {
//         console.log('bog bark')
//     }
// }

// Dog.prototype = new Animal()

// var hashiqi = new Dog()
// hashiqi.eat()
// hashiqi.bark()
// console.log(hashiqi.__proto__ === Dog.prototype)

class Animal{
    constructor(name){
        this.name = name
    }
    eat() {
        console.log(this.name + ' is eat')
    }
}

class Dog extends Animal {
    constructor(name){
        super(name)
        this.name = name
    }
    bark(){
        console.log(this.name + ' is bark')
    }
}
const hashiqi = new Dog('hashiqi')
hashiqi.eat()
hashiqi.bark()
console.log(hashiqi.__proto__ === Dog.prototype)