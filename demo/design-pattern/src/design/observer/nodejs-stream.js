var fs = require('fs')
// 读取文件的 Stream 
var readStream = fs.createReadStream('./data/file1.txt')

var length = 0
readStream.on('data', function(chunk) {
    length += chunk.toString().length
})
readStream.on('end', function() {
    console.log(length)
})