// function loadImg(src, callback, fail) {
//     var img = document.createElement('img')
//     img.onload = function() {
//         callback(img)
//         document.body.append(img)
//     }
//     img.onerror = function(){
//         fail()
//     }
//     img.src = src
// }

// var src = 'https://avatars2.githubusercontent.com/u/18542315?s=40&v=4';
// loadImg(src, function(img) {
//     console.log('success' + img.width)
// }, function() {
//     console.log('error')
// })


// promise 写法

function loadImg(src){
    return new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.onload = function(){
            resolve(img)
            document.body.append(img)
        }
        img.onerror = function(){
            reject()
        }
        img.src = src
    })
}
var src = 'https://avatars2.githubusercontent.com/u/18542315?s=40&v=4';
loadImg(src)
    .then(img => {
        console.log('success! width:' + img.width)
    }, () => {
        console.log('error')
    })