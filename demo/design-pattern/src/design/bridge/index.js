class Color {
    constructor(name){
        this.name = name
    }
}

class Sharp {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    draw() {
        console.log(`${this.color.name} ${this.name}`)
    }
}

// 测试代码
let red = new Color('red')
let yellow = new Color('yellow')
let circle = new Sharp('circle', red)
circle.draw()
let triangle = new Sharp('triangle', yellow)
triangle.draw()