class MyPromise{
    constructor(executor) {
        this.state = 'pending'
        this.value = undefined;
        this.reason = undefined;

        this.onResolvedCallbacks = []

        this.onRejectedCallbacks = []

        let resolve = value => {
            if(this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value

                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }
        let reject = reason => {
            if(this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason

                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        try{
            executor(resolve, reject)
        }catch(err) {
            reject(err)
        }
    }
    then(onFulfilled, onRejected) {
        // onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        // onRejected如果不是函数，就忽略onRejected，直接扔出错误
        onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err}

        let promise2 = new MyPromise((resolve, reject) => {
            if(this.state === 'fulfilled') {
                // 异步
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject)
                    } catch(e) {
                        reject(e)
                    }
                }, 0)
            }
            if(this.state === 'rejected') {
                // 异步
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch(e) {
                        reject(e)
                    }
                }, 0)
            }

            if(this.state === 'pending') {
                this.onResolvedCallbacks.push(() => {
                    // 异步
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch(e) {
                            reject(e)
                        }
                    }, 0)
                })
                this.onRejectedCallbacks.push(() => {
                    // 异步
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch(e) {
                            reject(e)
                        }
                    }, 0)
                })
            }
        })
    }
    catch(fn) {
        return this.then(null, fn)
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if(x === promise2){
        // 循环引用报错
        return reject(new TypeError('Chaining cycle detected for promise'))
    }

    // 防止多次调用
    let called;
    if(x != null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then
            // 如果 then 是函数，就默认是promise
            if(typeof then === 'function') {
                // 第一个参数是 this， 后面是成功的回调和失败的回调
                then.call(x, y => {
                    if(called) return;
                    called = true;
                    // resolve 的结果依旧是 promise 那就继续解析
                    resolvePromise(promise2, y, resolve, reject)
                }, err => {
                    if(called) return;
                    called = true;
                    reject(err) // 失败了就失败了
                })
            } else {
                resolve(x); // 
            }
        } catch(e) {
            if(called) return;
            called = true;
            reject(e)
        }
    } else {
        resolve(x)
    }
}

MyPromise.prototype.resolve = function(val) {
    return new MyPromise(resolve => {
        resolve(val)
    })
}

MyPromise.prototype.reject = function(val) {
    return new MyPromise((resolve, reject) => {
        reject(val)
    })
}

MyPromise.prototype.race = function(promises) {
    return new MyPromise((resolve, reject) => {
        for(let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject)
        }
    })
}

MyPromise.prototype.all = function(promises) {
    return new Promise((resolve, reject) => {
        let arr = []
        let i = 0;
        function processData(index, data) {
            arr[index] = data;
            if(++i == promises.length) {
                resolve(arr)
            }
        }
        for(let j = 0; j < promises.length; j++) {
            promises[j].then(data => {
                processData(j, data)
            }, reject)
        }
    })
}



function Promise (executor) {
    this.state = 'pending'
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    function resolve(value) {
        if(this.state === 'pending') {
            this.state = 'fulfilled'
            this.value = value
            this.onResolvedCallbacks.forEach(function(fn){
                fn()
            })
        }
    }
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
    } catch(e) {
        reject(e)
    }
}

Promise.prototype.then = function(onResolved, onRejected) {
    var _this = this
    onResolved = typeof onResolved === 'function' ? onResolved : function(value) { return value }
    onRejected = typeof onRejected === 'function' ? onRejected : function(err) { throw err }

    var promise2 = new Promise(function(resolve, reject) {
        if(_this.state === 'fulfilled') {
            setTimeout(function(){
                var x = onResolved(_this.value)
                resolvePromise(promise2, x, resolve, reject)
            }, 0)
        }
        if(_this.state === 'rejected') {
            setTimeout(function(){
                var x = onRejected(_this.reason)
                resolvePromise(promise2, x, resolve, reject)
            }, 0)
        }
        if(_this.state === 'pending') {
            _this.onResolvedCallbacks.push(function() {
                setTimeout(function(){
                    var x = onResolved(_this.value)
                    resolvePromise(promise2, x, resolve, reject)
                }, 0)
            })
            _this,onRejectedCallbacks.push(function() {
                setTimeout(function(){
                    var x = onRejected(_this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                }, 0)
            })
        }
    })
}

function resolvePromise(promise2, x, resolve, reject) {
    if(promise2 === x) {
        return new TypeError('循环引用报错')
    }
    var called;
    if(x != null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            var then = x.then
            if(typeof then === 'function') {
                then.call(x, function(y) {
                    if(called) return
                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, function(err) {
                    if(called) return
                    called = true
                    reject(err)
                })
            }else {
                resolve(x)
            }
        } catch(e) {
            if(called) return
            called = true
            reject(e)
        }
    } else {
        resolve(x)
    }
}

Promise.prototype.resolve = function(value) {
    return new Promise(function(resolve) {
        resolve(value)
    })
}

Promise.prototype.reject = function(err) {
    return new Promise(function(resolve, reject) {
        reject(err)
    })
}

Promise.prototype.catch = function(fn) {
    return this.then(null, fn)
}

Promise.prototype.race = function(promises) {
    return new Promise(function(resolve, reject) {
        for(var i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject)
        }
    })
}

Promise.prototype.all = function(promises) {
    return new Promise(function(resolve, reject) {
        var arr = []
        var i = 0;
        function processData(index, data) {
            arr[index] = data
            if(++i === promises.length){
                resolve(arr)
            }
        }
        for(var i = 0; i < promises.length; i++) {
            promises[i].then(function(y) {
                processData(i, y)
            }, reject)
        }
    })
}

Promise.prototype.all = function(promises) {
    return new Promise(function(resolve, reject) {
        var arr = []
        var i = 0;
        function processData(index, data) {
            arr[index] = data
            if( ++i === promises.length) {
                resolve(arr)
            }
        }
        for(var j = 0; i < promises.length; j++) {
            promises[j].then(function(data) {
                processData(j, data)
            }, reject)
        }
    })
}