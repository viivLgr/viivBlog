var callbacks = $.Callbacks() // 注意大小写

callbacks.add(function(info) {
    console.log('add1', info)
})
callbacks.add(function(info) {
    console.log('add2', info)
})
callbacks.add(function(info) {
    console.log('add3', info)
})

callbacks.fire('gogogo')
callbacks.fire('fire')