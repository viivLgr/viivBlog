Function.prototype.newApply = function(context, array) {
    if(typeof context === 'object') {
        context = context || window
    } else {
        context = Object.create(null)
    }

    var fn = +new Date() + '' + Math.random()
    context[fn] = this

    // 重点！！！
    var args = null
    if(array){
        args = []
        for(var i = 0; i < array.length; i++){
            args.push('array[' + i + ']')
        }
    }

    // 这个函数，只能用 eval，因为 myCall 的入参参数不确定
    // var result = eval('context[fn](' + args + ')')
    var result = context[fn](args)

    delete context[fn]

    return result;
}