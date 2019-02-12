import Item from './Item'
function createDiscount (itemData) {
    // 代理模式
    return new Proxy(itemData, {
        get: function(target, key, reveiver) {
            if(key === 'name') {
                return `${target[key]}【折扣】`
            }
            if(key === 'price') {
                return target[key] * 0.9
            }
            return target[key]
        }
    })
}

// 工厂模式
export default function(list, itemData) {
    if(itemData.discount) {
        itemData = createDiscount(itemData)
    }
    return new Item(list, itemData)
}