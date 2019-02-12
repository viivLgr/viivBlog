import $ from 'jquery'
import StateMachine from 'javascript-state-machine'
import getCart from '../ShoppingCart/GetCart'

export default class Item {
    constructor(list, data) {
        this.list = list
        this.data = data
        this.cart = getCart()
        this.$el = $('<div>')
    }
    initContent() {
        this.$el.append($(`<p>名称：${this.data.name}</p>`))
        this.$el.append($(`<p>价钱：${this.data.price}</p>`))
    }
    initBtn() {
        const $btn = $('<button>')
        const fms = new StateMachine({
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
                    updateBtnText()
                },
                onDeleteFromCart: () => {
                    this.deleteFromCartHandle()
                    updateBtnText()
                }
            }
        })
        function updateBtnText() {
            $btn.text(fms.state)
        }
        updateBtnText();
        $btn.click(() => {
            // 添加 删除
            if(fms.is('加入购物车')) {
                fms.addToCart()
            }else{
                fms.deleteFromCart()
            }
        })
        this.$el.append($btn)
    }
    addToCartHandle() {
        this.cart.add(this.data)
    }
    deleteFromCartHandle() {
        this.cart.del(this.data.id)
    }
    render() {
        this.list.$el.append(this.$el)
    }
    init() {
        this.initContent()
        this.initBtn()
        this.render()
    }
}