function each(data) {
    for(let item of data) {
        console.log(item)
    }
}

// 测试代码
let arr = [1, 2, 3, 4, 5]
let nodeList = document.getElementsByTagName('p')
let m = new Map()
m.set('a', 100)
m.set('b', 200)

each(arr)
// 1
// 2
// 3
// 4
// 5
each(nodeList)
// <p>设计模式1</p>
// <p>设计模式2</p>
// <p>设计模式3</p>
each(m)
// (2) ["a", 100]
// (2) ["b", 200]