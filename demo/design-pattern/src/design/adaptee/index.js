class Adaptee {
    specificRequest() {
        return '德国标准插头'
    }
}

export class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    request() {
        let info = this.adaptee.specificRequest()
        return `${info} - 转换器 - 中国标准插头`
    }
}


// ----------测试------------

// let target = new Target()
// let result = target.request()
// console.log('result', result)