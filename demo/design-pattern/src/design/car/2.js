// 车
export class Car {
    constructor(number) {
        this.number = number
    }
}

class Camera{
    shot(car) {
        return {
            num: car.number,
            inTime: Date.now()
        }
    }
}

class Screen {
    show(car, inTime) {
        console.log(`车牌号：${car.number}`)
        console.log(`停留时间：${Date.now() - inTime}`)
    }
}


// 停车场
export class Park {
    constructor(floors) {
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {} // 存储摄像头拍摄返回的车辆信息
    } 
    in (car, floorIndex) {
        floorIndex = floorIndex - 1 || 0
        // 通过摄像头获取信息
        const info = this.camera.shot(car)
        // 停到某个车位
        const i = parseInt(Math.random() * 100 % 100)
        const lot = this.floors[floorIndex].lots[i]
        lot.in();
        info.lot = lot;
        this.carList[car.number] = info
    }
    out(car) {
        // 获取信息
        const info = this.carList[car.number]
        // 将停车位清空
        const lot = info.lot
        lot.out()
        // 显示时间
        this.screen.show(car, info.inTime)

        // 清空记录
        delete this.carList[car.number]
    }
    emptyNum() {
        return this.floors.map(floor => `${floor.index}层还有${floor.emptyLotNum()}个空车位。`).join('\n');
    }
}

// 层
export class Floor {
    constructor(index, lots) {
        this.index = index
        this.lots = lots || []
    }

    emptyLotNum() {
        let num = 0;
        this.lots.forEach(lot => {
            if(lot.isEmpty) {
                num = num + 1
            }
        })
        return num
    }
}

// 车位
export class Lot {
    constructor() {
        this.isEmpty = true
    } 
    in () {
        this.isEmpty = false
    }
    out() {
        this.isEmpty = true
    }
}



// ----------------------测试----------------------
// 初始化停车场
// const floors = []
// for(let i = 0; i < 3; i++) {
//     const lots = []
//     for(let j = 0; j < 100; j++) {
//         lots[i] = new Lot()
//     }
//     floors[i] = new Floor(i+1, lots)
// }

// const park = new Park(floors)

// // 初始化车辆
// const car1 = new Car(100)
// const car2 = new Car(200)
// const car3 = new Car(300)

// console.log('第一辆车进入')
// console.log(park.emptyNum())
// park.in(car1)

// console.log('第二辆车进入')
// console.log(park.emptyNum())
// park.in(car2)

// console.log('第一辆车离开')
// park.out(car1)

// console.log('第二辆车离开')
// park.out(car2)
