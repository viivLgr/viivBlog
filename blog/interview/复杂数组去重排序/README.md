# 复杂数组去重排序

> 已知如下数组：
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

```javascript
Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b)

Array.from(new Set(arr.toString().split(','))).sort((a, b) => a - b).map(Number)
```

## 知识点

### 扁平化嵌套函数-flat

[Array.prototype.flat()-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

或

[数组实例的 flat()-阮一峰 ES6](http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84-flat%EF%BC%8CflatMap)

> var newArray = arr.flat(depth)

- depth：指定嵌套数组中的结构深度，默认为1，取Infinity可以获取全部深度的子数组
- 返回一个将子数组连接的新数组
- flat()方法会移除数组中的空项

```javascript
arr.flat(Infinity)

Array.prototype.flat = function() {
    return [].concat(...this.map(item => (Array.isArray(item) ? item.flat() : [item])))
}

```

### 去重

es6 的 Set 数据结构 或 解构函数 [...arr]

```javascript
function removeDup(arr) {
    return [...new Set(arr)]
}
```

### 排序

sort函数的回调函数

```javascript
function sort(arr, flag) {
    if(flag === undefined) flag = true
    return arr.sort((a, b) => flag ? (a - b) : (b - a));
}
```

### console的时间打印

```javascript
console.time('用时')
Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b)
console.timeEnd('用时')
// 用时: 0.10302734375ms

console.time('用时')
Array.from(new Set(arr.toString().split(','))).sort((a, b) => a - b).map(Number)
console.timeEnd('用时')
// 用时: 0.255126953125ms
```