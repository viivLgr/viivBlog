function throttle(fn, wait){
    let prev = 0
    return (args) => {
        let now = +new Date()
        if(now - prev >= wait){
            fn(args);
            prev = now
        }
    }
}

function test(e){
    console.log(new Date())
}

window.onscroll = throttle(test, 1000)