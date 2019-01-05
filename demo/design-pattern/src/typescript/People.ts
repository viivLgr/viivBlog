export default class People {
    name
    age
    protected weight
    constructor(name, age) {
        this.name = name
        this.age = age
        this.weight = 120
    }
    eat() {
        alert(`${this.name} eat something`)
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}