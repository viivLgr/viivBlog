import StateMachine from 'javascript-state-machine'

// 状态机
var fsm = new StateMachine({
    init: 'pending',
    transitions: [
        { name: 'resolve', from: 'pending', to: 'fullfilled' },
        { name: 'reject',  from: 'pending', to: 'rejected' }
    ],
    methods: {
        onResolve: (state, data) => {
            // 参数：state - 当前状态机实例；data- fsm.resolve(xxx) 执行时传递过来的参数 
            console.log('resolve', data)
            data.successList.forEach(fn => fn())
        },
        onReject: (state, data) => {
            data.failList.forEach(fn => fn())
        }
    }
})

// promise
class MyPromise{
    constructor(fn) {
        this.successList = []
        this.failList = []

        fn(() => {
            fsm.resolve(this)
        }, () => {
            fsm.reject(this)
        })
    }
    then(successFn, failFn) {
        this.successList.push(successFn)
        this.failList.push(failFn)
    }
}

// 测试
function loadImg(src) {
    const promise = new MyPromise((resolve, reject) => {
        let img = document.createElement('img')
        img.onload = function() {
            resolve()
        }
        img.onerror = function() {
            reject()
        }
        img.src = src
    })
    return promise
}
var src = 'https://github.com/viivLgr/viivBlog/blob/master/images/uml-15.png?raw=true'

loadImg(src).then(() => {
    console.log('ok1')
}, () => {
    console.log('err1')
})