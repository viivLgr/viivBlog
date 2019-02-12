import $ from 'jquery' 
import List from './List/List'
import ShoppingCart from './ShoppingCart/ShoppingCart'

export default class App {
    constructor(id) {
        this.$el = $('#' + id)
    }
    initShoppingCart() {
        const shoppingCart = new ShoppingCart(this)
        shoppingCart.init()
    }
    initList() {
        const list = new List(this)
        list.init()
    }
    init() {
        this.initShoppingCart()
        this.initList()
    }
}