// 1. 比特币时代 拷贝源码 改参数  莱特币
// 2. 以太坊 写代码 智能合约

JS模拟

let total = 10000;
let name = 'viiv币';
let demical = 2; // 精度
let obj = {
    "viiv": total
}  // 地址：钱

// 转账
function transfer(from, to, amount) {
    if(obj[from] && obj[from] > amount) {
        obj[from] -= amount;
        obj[to] += amount;
    }
}

transfer('viiv', 'imooc', 10);