function throttle(fn, wait) {
    let timer = null;
    return (args) => {
        if(!timer) {
            timer = setTimeout(() => {
                timer = null
                fn(args)
            }, wait)
        }
    }
}

function test(e) {
    console.log(new Date())
}

window.onscroll = throttle(test, 1000);