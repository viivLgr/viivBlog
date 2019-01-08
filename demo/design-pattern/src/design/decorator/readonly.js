function readonly(target, name, descriptor) {
    // descriptor 属性表述对象（Object.defineProperty中会用到），原来的值如下：
    // descriptor = {
    //     value: specifiedFunction,
    //     enumerable: false,
    //     configurable: true,
    //     writable: true
    // }
    descriptor.writable = false
    return descriptor;
}


class Person {
    constructor() {
        this.first = 'A'
        this.last = 'B'
    }

    @readonly
    name() { return `${this.first} ${this.last}`}
}

var p = new Person()
console.log(p.name())

// p.name = function() {} // 报错
// Cannot assign to read only property 'name' of object