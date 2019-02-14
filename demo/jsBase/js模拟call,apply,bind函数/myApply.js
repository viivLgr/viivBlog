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
    // if(arguments[1]){
    //     args = []
    //     for(var i = 0; i < arguments[1].length; i++) {
    //         args.push('argument[1][' + i + ']')
    //     }
    // }

    if(array){
        args = []
        for(var i = 0; i < array.length; i++){
            args.push('array[' + i + ']')
        }
    }

    var result = eval('context[fn](' + args + ')')

    delete context[fn]

    return result;
}