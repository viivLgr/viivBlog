export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat () {
        alert(`${this.name} is eating something `)
    }
    speak() {
        alert(`My name is ${this.name}, I am ${this.age} years old.`)
    }
}