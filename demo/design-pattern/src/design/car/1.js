class Car {
    constructor(name, number){
        this.name = name
        this.number = number
    }
    run() {
        alert(`车主姓名：${this.name}, 车牌号：${this.number}`)
    }
}
export class FastCar extends Car {
    constructor(name, number) {
        super(name, number)
        this.price = 1
    }
}
export class SpecialCar extends Car {
    constructor(name, number) {
        super(name, number)
        this.price = 2
    }
}
export class Trip{
    constructor(car) {
        this.car = car
    }
    start() {
        alert(`行程开始：车主姓名：${this.car.name}, 车牌号：${this.car.number}`)
    }
    end(distance) {
        alert(`本次行程有${distance}公里，共计：${this.car.price * distance}元`)
    }
}

