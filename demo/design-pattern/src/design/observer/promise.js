function loadImg(src) {
    var promise = new Promise(function (resolve, reject) {
        var img = document.createElement('img')
        img.onload = function() {
            resolve(img)
        }
        img.onerror = function() {
            reject('图片加载失败')
        }
        img.src = src
    })
    return promise
}

var src = ''
var result = loadImg(src) 
result.then(function(img) {
    console.log('width', img.width)
    return img
}).then(function(img) {
    console.log('height', img.height)
})