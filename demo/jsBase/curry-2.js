/**
 * 函数包裹原函数，然后给原函数传入之前的参数
 * @param {*} fn 
 */
function sub_curry(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        return fn.apply(this, args.concat([].slice.call(arguments)));
    }
}

function curry(fn, length) {
    // fn.length :显示方法参数的期望参数个数
    length = length || fn.length;
    var slice = Array.prototype.slice;
    return function() {
        if(arguments.length < length) {
            var combined = [fn].concat(slice.call(arguments));
            return curry(sub_curry.apply(this, combined), length - arguments.length);
        }else{
            return fn.apply(this, arguments);
        }
    }
}


var fn = curry(function(a, b, c) {
    return [a, b, c];
})

// fn('a', 'b', 'c'); // ["a", "b", "c"]
// fn('a', 'b')('c');
// fn('a')('b')('c')
fn('a')('b', 'c')



/**
 * 简易版
 * @param {*} fn 
 * @param {*} args 
 */
function currySimple(fn, args) {
    var length = fn.length;
    args = args || [];
    return function() {
        var _args = args.slice(0),
            arg, i;
        for(i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            _args.push(arg);
        }
        if(_args.length < length) {
            return curry.call(this, fn, _args);
        }else{
            return fn.apply(this, _args);
        }
    }
}