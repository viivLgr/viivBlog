import Item from './Item.js'

function createDiscount(itemData) {
    return new Proxy(itemData, {
        get: function(target, key) {
            if(key === 'name') {
                return `${target[key]} 【打折】`
            }
            if(key === 'price') {
                return target[key] * 0.9
            }
            return target[key]
        }
    })
}

export default function createItem(list, itemData) {
    if(itemData.discount) {
        itemData = createDiscount(itemData)
    }
    return new Item(list, itemData)
}