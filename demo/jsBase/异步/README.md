# 异步

[阮一峰-Javascript异步编程的4种方法](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)

## 问题

- 什么是单线程，和异步有什么关系
- 什么是 event-loop
- 是否用过 jQuery 的`Deferred`
- Promise 的基本使用和原理
- 介绍下 async/await（和 promise 的区别与联系）
- 总结一下当前 js 解决异步的方案

### 单线程

- javascript 语言的执行环境是单线程； 避免 DOM 渲染的冲突。
- 单线程就是指一次只能完成一件任务。
- 如果有多个任务，就必须排队，前面一个任务完成再执行后面的一个任务，以此类推。
- 同步：后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的。
- 异步：每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致、异步的。

### jQuery 的 Deffered

```javascript
function fn1(){
    var dfd = $.Deferred();
    setTimeout(function() {
        dfd.resolve();
    }, 500)
    return dfd.promise;
}

fn1().then(fn2)
```
