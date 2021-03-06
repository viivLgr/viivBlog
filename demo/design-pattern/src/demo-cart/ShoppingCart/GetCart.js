// Cart 是单例模式
class Cart {
    constructor() {
        this.list = []
    }
    add(data) {
        this.list.push(data)
    }
    del(id) {
        this.list = this.list.filter(itemData => itemData.id !== id)
    }
    getList() {
        return this.list.map(itemData => itemData.name).join('\n')
    }
}

// 返回单例
const getCart = (function(){
    let cart;
    return function(){
        if(!cart) {
            cart = new Cart()
        }
        return cart
    }
})()

export default getCart;