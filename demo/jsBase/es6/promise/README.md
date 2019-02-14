# 手写 promise

## 第一步，实现 promise 雏形

- 是一个构造函数
- 接收一个带有resolve，和reject的执行函数作为参数
- 有三个状态，分别是 pending/fulfilled/rejected，初始状态为 pending
- 状态只能单向改变，从 pending -> fulfilled 或 pending -> rejected
- then方法，有两个参数，第一个参数是成功的回调，第二个参数是失败的回调

```javascript

function Promise(executor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined

    function resolve(value) {
        if(this.state === 'pending') {
            this.state = 'fulfilled'
            this.value = value

        }
    }

    function reject(reason) {
        if(this.state === 'pending') {
            this.state = 'rejected'
            this.reason = reason
        }
    }

    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function(onResolved, onReject) {
    if(this.state === 'fulfilled') {
        onResolved(this.value)
    }
    if(this.state === 'rejected') {
        onRejected(this.reason)
    }
}
```

## 第二步，解决执行then时，状态还是 pending 的异步情况

- 需要一个成功的回调函数数组、一个失败的回调函数数组，在resolve/reject的时候依次调用他们

```javascript
function Promise(executor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    // 新增回调函数数组
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    // 在 resolve 函数中执行成功回调函数
    function resolve(value) {
        if(this.state === 'pending') {
            this.state = 'fulfilled'
            this.value = value
            this.onResolvedCallbacks.forEach(function(fn) {
                fn()
            })
        }
    }

    // 在 reject 函数中 执行失败回调函数
    function reject(reason) {
        if(this.state === 'pending') {
            this.state = 'rejected'
            this.reason = reason
            this.onRejectedCallbacks.forEach(function(fn) {
                fn()
            })
        }
    }
    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function(onResolved, onRejected) {
    if(this.state === 'fulfilled') {
        onResolved(this.value)
    }
    if(this.state === 'rejected') {
        onRejected(this.reason)
    }
    if(this.state === 'pending') {
        this.onResolvedCallbacks.push(function() {
            onResolved(this.value)
        })
        this.onRejectedCallbacks.push(function() {
            onRejected(this.reason)
        })
    }
}
```

## 第三部，链式调用

- then 返回一个新的 promise2，将这个 promise2 传递到下一个 then 中
- 如果返回一个普通值，则将普通的值传递给下一个 then 中
- then 中 return 的值 就是 onResolve() 或 onReject() 的值 x
- 判断 x 的函数叫做 resolvePromise
    1. 判断 x 是否为 promise
    2. 如果是promise，则取它的结果，作为 新的promise2 成功的结果
    3. 如果是普通值，直接作为 promise2 成功的结果
    4. resolvePromise 的参数有 promise2(默认返回的promise)、x(我们自己 return 的对象)、resolve、reject。（resolve、reject 是 promise2 的）

```javascript
function Promise(executor) {
    // ... 不变
}
Promise.prototype.then = function(onResolved, onReject) {
    var _this = this
    var promise2 = new Promise(function(resolve, reject) {
        if(_this.state === 'fulfilled') {
            var x = onResolved(_this.value)
            resolvePromise(promise2, x, resolve, reject)
        }
        if(_this.state === 'rejected') {
            var x = onRejected(_this.reason)
            resolvePromise(promise2, x, resolve, reject)
        }
        if(_this.state === 'pending') {
            _this.onResolvedCallbacks.push(function() {
                var x = onResolved(_this.value)
                resolvePromise(promise2, x, resolve, reject)
            })
            _this.onRejectedCallbacks.push(function() {
                var x = onRejected(_this.reason)
                resolvePromise(promise2, x, resolve, reject)
            })
        }
    })
}
```

resolvePromise函数中的逻辑

- x 不能是 null
- x 是普通值的话，直接resolve(x)
- x 是对象或者函数（包括 promise），判断x.then
- 取 then 报错，表示并不是 promise，则直接 reject(err)
- then 是普通对象的话，直接resolve()
- then 是函数，则用 call 执行 then，第一个参数是 this， 后面是成功的回调和失败的回调
- 如果成功的回调还是promise，就递归继续解析
- 成功和失败只能调用一个，所以需要设定一个 called 来防止多次调用

```javascript
function resolvePromise(promise2, x, resolve, reject) {
    if(x === promise2) {
        return reject(new TypeError('循环引用'));
    }

    var called;
    if(x != null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            var then = x.then;
            if(typeof then === 'function') {
                then.call(this, function(y) {
                    if(called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, reject);
            } else {
                if(called) return;
                called = true;
                resolve(x);
            }
        } catch(e) {
            if(called) return;
            called = true;
            reject(e)
        }
    } else {
        if(called) return;
        called = true;
        resolve(x);
    }
}
```

### then 中的 onResolved, 和 onRejected

- 可选参数
- 如果他们不是函数，必须被忽略
- onResolved() 返回一个普通的值，成功是直接等于 value => value
- onRejectd() 返回一个普通的值，失败是直接扔出一个错误 reason => throw err
- onResolved()/onRejectd() 不能被同步调用，必须**异步**调用

```javascript
Promise.prototype.then = function(onResolved, onRejected) {
    onResolved = typeof onResolved === 'function' ? onResolved : function(value) { return value };
    onRejected = typeof onRejected === 'function' ? onRejeted : function(reason) { throw reason };

    var promise2 = new Promise(function(resolve, reject) {
        var _this = this
        if(_this.state === 'fulfilled') {
            setTimeout(function() {
                var x = onResolved(_this.value)
                resolvePromise(promise2, x, resolve, reject)
            }, 0)
        }
        if(_this.state === 'rejected') {
            setTimeout(function() {
                var x = onRejected(_this.reason)
                resolvePromise(promise2, x, resolve, reject)
            }, 0)
        }
        if(_this.state === 'fulfilled') {
            _this.onResolvedCallbacks.push(function() {
                setTimeout(function() {
                    var x = onResolved(_this.value)
                    resolvePromise(promise2, x, resolve, reject)
                }, 0)
            })
            _this.onRejectedCallbacks.push(function() {
                setTimeout(function() {
                    var x = onRejected(_this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                }, 0)
            })
        }
    })
}
```

promise 的基本功能已经完成啦~

### 添加其他方法

#### catch 方法

catch方法 用来捕获错误

```javascript
Promise.prototype.catch = function(fn) {
    return this.then(null, fn)
}
```

#### resolve 方法

```javascript
Promise.prototype.resolve = function(value) {
    return new Promise(function(resolve, reject) {
        resolve(value)
    })
}
```

#### reject 方法

```javascript
Promise.prototype.reject = function(reason) {
    return new Promise(function(resolve, reject) {
        reject(reason)
    })
}
```

#### race 方法

race方法接收一个包含了 n 个 promise 函数的数组作为参数，返回最先拿到的结果

```javascript
Promise.prototype.race = function(promises) {
    return new Promise(function(resolve, reject) {
        for(var i = 0; i < promise.length; i++) {
            promises[i].then(resolve, reject)
        }
    })
}
```

#### all 方法

all 方法接收一个包含了 n 个 promise 函数的数组作为参数，返回一个包含所有promise结果的数组

```javascript
Promise.ptototype.all = function(promises) {
    return new Promise(function(resolve, reject) {
        var arr = []
        var i = 0
        function processData(index, data) {
            arr[index] = data
            if(++i === promises.length) {
                resolve(arr)
            }
        }
        for(var j = 0; j < promises.length; j++) {
            promises[j].then(function(data) {
                processData(j, data)
            }, reject)
        }
    })
}
```