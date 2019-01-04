# underscore--函数节流和函数防抖

在我们前端web开发中，很多的时间是需要来优化代码的，比如我们经常会遇到一些频繁操作的事件处理，比如：

1. window对象的 `resize`、`scroll`
2. 拖拽DOM元素的`mousemove`事件
3. 输入框热词/推荐功能用到的键盘`keydown`、`keyup`事件
4. ...

这时我们常常需要做优化处理了，一般用到的方法是通过函数防抖（debounce）和函数节流（throttle）来实现，现在我们来看看两者的区别

## 原理

### 函数防抖 debounce

当事件触发过n毫秒后，才会执行，若在这n毫秒内又触发该事件则将重新计算执行事件，n毫秒之后再触发该事件。

### 函数节流 throttle

预先设定一个执行周期，当事件触发的时刻大于等于执行周期则执行，然后进入下一个新周期。

## 实现

- 函数防抖

根据定义我们需要一个周期等待时间参数 wait

```javascript
function debounce(fn, wait) {
    let timer = null;
    return (args) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn(args), wait)
    }
}

function test(e) {
    console.log(new Date())
}
window.onscroll = debounce(test, 1000);
```

控制台慢慢滑动滚动条的输出结果

```linux
Thu Jan 03 2019 11:06:02 GMT+0800 (中国标准时间)
Thu Jan 03 2019 11:06:08 GMT+0800 (中国标准时间)
Thu Jan 03 2019 11:06:15 GMT+0800 (中国标准时间)
Thu Jan 03 2019 11:06:20 GMT+0800 (中国标准时间)
Thu Jan 03 2019 11:06:29 GMT+0800 (中国标准时间)
Thu Jan 03 2019 11:25:05 GMT+0800 (中国标准时间)
Thu Jan 03 2019 11:25:17 GMT+0800 (中国标准时间)
```


如果再层架一个立即执行的需求immediate

```javascript
function debounce(func, wait, immediate) {
    var timeout, result;
    var debounced = function () {
        var context = this;
        var args = arguments;
        if(timeout) clearTimeout(timeout);
        if(immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function() {
                timeout = null;
            }, wait)
            if(callNow) result = func.apply(context, args)
            else {
                timeout = setTimeout(function() {
                    func.apply(context, args)
                }, wait)
            }
            return result
        }
    }
    debounced.cancel = function() {
        clearTimeout(timeout);
        timeout = null;
    }
    return debounced;
}
function test() {
    console.log(new Date())
}
window.onscroll = debounce(test, 1000, true)
```

- 函数节流

函数节流就是我们需要一个wait时间周期，当第一次执行之后，只有大于等于周期时间时，第二次才执行

```javascript
function throttle(fn, wait) {
    let prev = 0;
    return (args) => {
        let now = +new Date()
        if(now - prev >= wait) {
            fn(args)
            prev = now
        }
    }
}
function test(e) {
    console.log(new Date())
}
window.onscroll = throttle(test, 1000)
```

使用演示器实现这个时间周期

```javascript
function throttle(fn, wait) {
    let timer = null
    return (args) => {
        if(!timer) {
            timer = setTimeout(() => {
                timer = null
                fn(args)
            }, wait)
        }
    }
}
function test(e) {
    console.log(new Date())
}
window.onscroll = throttle(test, 1000)
```

- 使用延时器的方法时无法立即执行第一次，但是当停止触发它是会再执行最后一次
- 使用时间戳的方式会立即执行第一次，但是不会执行最后一次

underscore的throttle函数

```javascript


```