// function MathHandle(x, y) {
//     this.x = x
//     this.y = y
// }

// MathHandle.prototype.add = function() {
//     return this.x + this.y
// }

// var m = new MathHandle(1, 2)
// console.log('add:', m.add())
// console.log('typeof:', typeof MathHandle) // function
// console.log('constructor', MathHandle.prototype.constructor === MathHandle) // true
// console.log('prototype:', m.__proto__ === MathHandle.prototype) // true


class MathHandle{
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    add () {
        return this.x + this.y
    }
}

const m = new MathHandle(1, 2)
console.log('class add:', m.add())
console.log('typeof:', typeof MathHandle) // function
console.log('constructor', MathHandle.prototype.constructor === MathHandle) // true
console.log('prototype:', m.__proto__ === MathHandle.prototype) // true