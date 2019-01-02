/**
 * 优秀
 * @param {*} fn 
 * @param  {...any} args 
 */
var curry = (fn, ...args) => 
    fn.length <= args.length
        ? fn(...args)
        : curry.bind(null, fn, ...args);

var fn = curry((a, b, c) => console.log([a, b, c]));

fn(1, 2, 3)
fn(1)(2)(3)
fn(1, 2)(3)
fn(1)(2, 3)