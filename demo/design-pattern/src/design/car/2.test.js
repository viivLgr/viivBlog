export class Car {
    constructor(number) {
        this.number = number
    }
}
class Camera {
    shot(car) {
        return {
            number: car.number,
            inTime: Date.now()
        }
    }
}
class Screen {
    show(car, inTime) {
        console.log(`车牌号：${car.number}`)
        console.log(`停车时长：${Date.now() - inTime}`)
    }
}

export class Park {
    constructor(floors){
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()

        this.carList = {}
    }
    in(car, floorIndex) {
        floorIndex = floorIndex || 0
        const info = this.camera.shot(car)
        // 随机找个位置停进去
        const i = parseInt(Math.random() * 100 % 100)
        const lot = this.floors[floorIndex].lots[i]
        lot.in()
        info.lot = lot
        this.carList[car.number] = info
    }
    out(car) {
        const info = this.carList[car.number]
        const lot = info.lot
        lot.out()
        this.screen.show(car, info.inTime)
        delete this.carList[car.number]
    }
    emptyNum() {
        return this.floors.map(floor => `第${floor.index}层当前还有${floor.emptyLotNum()}个空车位`).join('\n');
    }
}

export class Floor {
    constructor(index, lots) {
        this.index = index
        this.lots = lots || []
    }
    emptyLotNum() {
        let num = 0;
        this.lots.forEach(lot => {
            if(lot.isEmpty){
                num ++
            }
        })
        return num
    }
}

export class Lot {
    constructor() {
        this.isEmpty = true
    }
    in() {
        this.isEmpty = false
    }
    out() {
        this.isEmpty = true
    }
}
