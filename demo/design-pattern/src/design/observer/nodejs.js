const EventEmitter = require('events').EventEmitter

// 任何构造函数都可以继承 EventEmitter 的方法 on emit
class Dog extends EventEmitter {
    constructor(name){
        super()
        this.name = name
    }
}

var xiaohua = new Dog('xiaohua')

xiaohua.on('bark', function() {
    console.log(`${this.name} barked`)
})

setTimeout(() => {
    xiaohua.emit('bark')
}, 500)