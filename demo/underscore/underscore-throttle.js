function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if(!options) oprions = {};

    var later = function() {
        previous = options.leading === false ? 0 : +new Date()
        timeout = null;
        result = func.apply(context, args);
        if(!timeout) context = args = null;
    }

    var throttled = function() {
        var now = +new Date()
        if(!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous)
        context = this;
        args = arguments;
        if(remaining <= 0 || remaining > wait) {
            if(timeout) {
                clearTimeout(timeout)
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args)
            if(!timeout) context = args = null;
        }else if(!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining)
        }
        return result;
    }

    throttled.cancel = function() {
        clearTimeout(timeout)
        previous = 0;
        timeout = context = args = null;
    }

    return throttled;
}

function test(e) {
    console.log(new Date())
}

window.onscroll = throttle(test, 1000)

// If you’d like to disable the leading-edge call, pass {leading: false}, and if you’d like to disable the execution on the trailing-edge, pass {trailing: false}.
// 表示不能同时设置 leading：false 和 trailing: false