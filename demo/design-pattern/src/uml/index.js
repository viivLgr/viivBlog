class People {
    constructor(name, house) {
        this.name = name
        this.house = house
    }
    saySomething() {}
}

export class A extends People{
    constructor(name, house) {
        super(name, house)
    }
    saySomething() {
        alert('I am A')
    }
}

export class B extends People{
    constructor(name, house) {
        super(name, house)
    }
    saySomething() {
        alert('I am B')
    }
}

export class House {
    constructor(city) {
        this.city = city
    }
    showCity() {
        alert(`house in ${this.city}`)
    }
}