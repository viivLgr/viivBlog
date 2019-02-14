# js 模拟call，apply，bind函数

## 模拟call

原理：

- 在要挂在的对象 context 上临时添加一个方法 f
- 用 eval 执行这个临时添加的方法 f，并拿到执行后的结果 result
- 删除这个额外的方法 f，并返回执行结果 result

```javascript
Function.prototype.myCall = function(context) {
    // 1. 判断 content 是否为 object，如果是 object 就代表可能是 Object 或者 null
    // 如果不是就赋值一个空对象
    if(typeof context === 'object'){
        context = context || window // context 如果是 null 就赋值为 window
    } else {
        context = Object.create(null)
    }

    // 2. 在 context 下挂在一个函数，函数所在的 key 随机生成，防止context上已有同名 key
    var fn = +new Date() + '' + Math.random() // 用时间戳 + 随机数 拼接成一个随机字符串作为一个新的 key
    context[fn] = this

    // 3. myCall 如果还有其他参数传入也要考虑到
    var args = []
    for(var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']')
    }

    // 4. 重点！！！
    // 执行 context[fn] 这个函数，只能用 eval，因为 myCall 的入参参数不确定
    var result = eval('context[fn](' + args + ')') // args 是一个数组，但是当它和字符串相加时自动调用内部的 toString 方法转成字符串
    delete context[fn] // 用完后从 context 上删除这个函数

    // 返回结果
    return result
}
```

## 模拟 apply

由于 apply 和 call 仅仅是传参不同，区别是apply(context, array)， call(context, arg1, arg2...)

```javascript
Function.prototype.newApply = function(context, array) {
    if(typeof context === 'object') {
        context = context || window
    } else {
        context = Object.create(null)
    }

    var fn = +new Date() + '' + Math.random()
    context[fn] = this

    // 重点！！！
    var args = null
    if(array){
        args = []
        for(var i = 0; i < array.length; i++){
            args.push('array[' + i + ']')
        }
    }

    var result = eval('context[fn](' + args + ')')

    delete context[fn]

    return result;
}
```

## 模拟bind

bind 在外面包层function 壳

```javascript
Function.prototype.myBind = function(context) {
    if(typeof context === 'object') {
        context = context || window
    } else {
        context = Object.create(null)
    }

    var fn = +new Date() + '' + Math.random()
    context[fn] = this

    var args = []
    for(var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']')
    }

    // 重点！！！

    return function() {
        var result = eval('context[fn](' + args + ')')
        delete context[fn]
        return result
    }
}

// 或者使用前面写好的
Function.prototype.newBindAndApply = function(context) {
    var args = []
    for(var i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    return function() {
        Function.prototype.newApply(context, args)
    }
}

Function.prototype.newBindAndCall = function(context){
    var args = []
    for(var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']')
    }
    return function() {
        eval('Function.prototype.newCall(context,' + args + ')')
    }
}
```