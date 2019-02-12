import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart'
import StateMachine from 'javascript-state-machine'
import { log } from '../util/log'
// 状态模式

export default class Item {
    constructor(list, data) {
        this.list = list
        this.data = data
        this.$el = $('<div>')
        this.cart = getCart()
        this.fsm = null
        this.$btn = null
    }
    initContent() {
        this.$el.append($(`<p>名称：${this.data.name}</p>`))
        this.$el.append($(`<p>价钱：${this.data.price}</p>`))
    }
    // 状态模式
    initFsm() {
        this.fsm = new StateMachine({
            init: '加入购物车',
            transitions: [
                {
                    name: 'addToCart',
                    from: '加入购物车',
                    to: '从购物车删除'
                },
                {
                    name: 'deleteFromCart',
                    from: '从购物车删除',
                    to: '加入购物车'
                }
            ],
            methods: {
                onAddToCart: () => {
                    this.addToCartHandle()
                    this.updateBtnText()
                },
                onDeleteFromCart: () => {
                    this.deleteFromCartHandle()
                    this.updateBtnText()
                }
            }
        })
    }
    updateBtnText() {
        this.$btn.text(this.fsm.state)
    }
    initBtn() {
        this.$btn = $('<button>')
        this.$btn.click(() => {
            if(this.fsm.is('加入购物车')){
                this.fsm.addToCart()
            }else{
                this.fsm.deleteFromCart()
            }
        })
        this.updateBtnText()
        this.$el.append(this.$btn)
    }
    @log('add')
    addToCartHandle() {
        this.cart.add(this.data)
    }
    @log('del')
    deleteFromCartHandle() {
        this.cart.del(this.data.id)
    }
    render() {
        this.list.$el.append(this.$el)
    }
    init() {
        this.initContent()
        this.initFsm()
        this.initBtn()
        this.render()
    }
}