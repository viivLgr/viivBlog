Function.prototype.myBind = function(context) {
    if(typeof context === 'object') {
        context = context || window
    } else {
        context = Object.create(null)
    }

    var fn = +new Date() + '' + Math.random()
    context[fn] = this

    var args = []
    for(var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']')
    }

    // 重点！！！

    return function() {
        var result = eval('context[fn](' + args + ')')
        delete context[fn]
        return result
    }
}

// 或者
Function.prototype.newBindAndApply = function(context) {
    var args = []
    for(var i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    return function() {
        Function.prototype.newApply(context, args)
    }
}

Function.prototype.newBindAndCall = function(context){
    var args = []
    for(var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']')
    }
    return function() {
        eval('Function.prototype.newCall(context,' + args + ')')
    }
}