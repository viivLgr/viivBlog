function each(data) {
    let iterator = data[Symbol.iterator]()
    let item = {done: false}
    while(!item.done) {
        item = iterator.next()
        // 最后一个 done: true
        if(!item.done) {
            console.log(item)
        }
    }
}


// 测试代码
let arr = [1, 2, 3, 4, 5]
let nodeList = document.getElementsByTagName('p')
let m = new Map()
m.set('a', 100)
m.set('b', 200)

each(arr)
each(nodeList)
each(m)

