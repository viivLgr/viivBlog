import $ from 'jquery'
import getCart from './GetCart'

export default class ShoppingCart{
    constructor(app) {
        this.app = app
        this.cart = getCart()
        this.$el = $('<div>').css({
            'padding-bottom': '10px',
            'border-bottom': '1px solid #ccc'
        })
    }
    initBtn() {
        const $btn = $('<button>')
        $btn.text('购物车')
        $btn.click(() => {
            this.showCart()
        })
        this.$el.append($btn)
    }
    showCart() {
        alert(this.cart.getList())
    }
    render() {
        this.app.$el.append(this.$el)
    }
    init() {
        this.initBtn()
        this.render()
    }
}