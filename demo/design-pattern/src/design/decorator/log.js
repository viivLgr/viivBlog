function log(target, name, descriptor) {
    var oldValue = descriptor.value

    descriptor.value = function() {
        console.log(`Calling ${name} with`, arguments);
        return oldValue.apply(this, arguments)
    }
    return descriptor;
}

class Math {
    // 装饰方法
    @log
    add(a, b) {
        return a + b
    }
}

const math = new Math()
const result = math.add(2, 4) // 执行add时，会自动打印日志，因为有@log装饰器
console.log('result', result)


class Person {
    constructor() {
        this.first = 'A'
        this.last = 'B'
    }
    @log
    name() {
        return `${this.first} ${this.last}`
    }
}

const p = new Person()
console.log(p.name())