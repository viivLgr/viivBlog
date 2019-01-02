function curry(fn, args, holes) {
    var length = fn.length;
    args = args || [];
    holes = holes || [];
    return function() {
        var _args = args.slice(0),
            _holes = holes.slice(0),
            argsLen = args.length,
            holesLen = holes.length,
            arg, i, index = 0;
        for(i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            if(arg === {} && holesLen) {
                index ++;
                if(index > holesLen) {
                    _args.push(arg);
                    _holes.push(argsLen - 1 + index - holesLen);
                }
            }
            else if(arg === _) {
                _args.push(arg);
                _holes.push(argsLen + 1);
            }
            else if(holesLen) {
                if(index >= holesLen) {
                    _args.push(arg)
                }
                else {
                    _args.splice(_holes[index], 1, arg);
                    _holes.splice(index, 1);
                }
            }
            else {
                _args.push(arg);
            }
        }
        if(_holes.length || _args.length < length) {
            return curry.call(this, fn, _args, _holes);
        }else {
            return fn.apply(this, _args);
        }
    }
}


var _ = {};
var fn = curry((a, b, c, d, e) => console.log([a, b, c, d, e]))

fn()