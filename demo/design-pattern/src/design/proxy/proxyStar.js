// 明星
let star = {
    name: 'seek',
    age: 25,
    phone: 'star: 13212341234'
}

// 经纪人
let agent = new Proxy(star, {
    get: (target, key) => {
        if(key === 'phone') {
            return 'agent: 13211111111' // 经纪人自己的电话
        }
        if(key === 'price') {
            // 明星不报价，经纪人报价
            return 120000
        }
        return target[key]
    },
    set: (target, key, val) => {
        if(key === 'customPrice') {
            if(val < 10000) {
                throw new Error('价格太低')
            }else{
                target[key] = val
            }
        }
        return true
    }
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)
agent.customPrice = 19000
console.log('agent', agent)