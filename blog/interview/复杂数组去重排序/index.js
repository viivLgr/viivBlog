var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

function getArray(arr) {
    return arr.flat(Infinity)
}

function removeDup(arr) {
    return [...new Set(arr)]
}

function sort(arr, flag) {
    if(flag === undefined) flag = true
    return arr.sort((a, b) => flag ? (a - b) : (b - a));
}