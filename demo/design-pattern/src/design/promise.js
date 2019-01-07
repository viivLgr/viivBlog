export function loadImg(src) {
    return new Promise((resolve, reject) => {
        let img = document.createElement('img')
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            reject('图片加载失败')
        }
        img.src = src
    })
}

// let src = 'https://github.com/viivLgr/viivBlog/blob/master/images/uml-2.png?raw=true'

// loadImg(src).then(img => {
//     console.log(`width: ${img.width}`)
//     return img
// }).then(img => {
//     console.log(`height: ${img.height}`)
// }).catch(err => {
//     console.log('err', err)
// })