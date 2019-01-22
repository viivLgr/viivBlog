// 判定o是否是一个类数组对象


// 1. 字符串和函数有length属性,可以用typeof检测将其排除
// 2. 客户端JavaScript中，DOM文本节点也有length属性,需要用额外判断o.nodeType!=3将其排除

function isArrayLike(o) {
    if( o // 判断不是null/undefined
        && typeof o === 'object' // o是一个对象
        && o.length >= 0 // length 非负
        && o.length === Math.floor(o.length) // length 是整数
        && o.nodeType != 3 // 判断不是DOM文本节点

    ) {
        return true
    }else {
        return false
    }
}