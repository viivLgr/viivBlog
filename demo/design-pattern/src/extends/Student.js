import Person from './Person'

export default class Student extends Person {
    constructor(name, age, number) {
        super(name, age)
        this.number = number
    }
    study() {
        alert(`${this.name} is studying.`)
    }
}