import StateMachine from 'javascript-state-machine'
import $ from 'jquery'

// 初始化状态机模型
let fsm = new StateMachine({
    init: '收藏',
    transitions: [
        { name: 'doStore', from: '收藏', to: '取消收藏'},
        { name: 'deleteStore', from: '取消收藏', to: '收藏'}
    ],
    methods: {
        // 监听执行收藏
        onDoStore: (state) => {
            // alert('收藏成功') // 可以 post 请求
            console.log('收藏成功', state)
            updateText()
        },
        // 监听取消收藏
        onDeleteStore: (state) => {
            // alert('取消收藏成功') // 可以 post 请求
            console.log('取消收藏成功', state)
            updateText()
        }
    }
})

let $btn = $('#btn')

// 点击事件
$btn.click(() => {
    if(fsm.is('收藏')) {
        fsm.doStore()
    }else{
        fsm.deleteStore()
    }
})

// 更新按钮的文案
function updateText() {
    $btn.text(fsm.state)
}

// 初始化文案
updateText()