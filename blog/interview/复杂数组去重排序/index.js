var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

function getArray(arr) {
    return arr.flat(Infinity)
}

Array.prototype.flat = function() {
    return [].concat(...this.map(item => (Array.isArray(item) ? item.flat() : [item])))
}

function flatten(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

function removeDup(arr) {
    return [...new Set(arr)]
}

Array.prototype.unique = function() {
    return [...new Set(this)]
}

function sort(arr, flag) {
    if(flag === undefined) flag = true
    return arr.sort((a, b) => flag ? (a - b) : (b - a));
}