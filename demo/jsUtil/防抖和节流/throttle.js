function throttle(fn) {
    let canRun = true;
    return function() {
        if(!canRun) return;
        canRun = false;
        setTimeout(() => {
            fn.apply(this, arguments)
            canRun = true
        }, 500)
    }
}

function sayHi(e) {
    console.log(e.target.innerWidth, e.target.innerHeight)
}

window.addEventListener('resize', throttle(sayHi));
