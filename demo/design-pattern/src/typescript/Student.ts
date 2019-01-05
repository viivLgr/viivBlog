import People from './People'

export default class Student extends People {
    number
    private girlfriend
    constructor(name, age, number) {
        super(name, age)
        this.number = number
        this.girlfriend = 'xiaoli'
    }
    study() {
        alert(`${this.name} study`)
    }
    getWeight() {
        alert(`weight ${this.weight}`)
    }
}