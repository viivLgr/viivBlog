var curry = function(fn) {
    var args = [].slice.call(arguments, 1);
    console.log('args', args)
    return function() {
        var newArgs = args.concat([].slice.call(arguments));
        console.log('newArgs', newArgs)
        return fn.apply(this, newArgs);
    }
}

function add(a, b) {
    return a + b;
}

// 1
var addCurry = curry(add);
addCurry(1, 2);

// 1
var addCurry1 = curry(add, 1, 2);
addCurry1()

// 2
var addCurry2 = curry(add, 1);
addCurry2(2)
