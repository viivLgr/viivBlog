function debounce(fn, wait) {
    let timer = null;
    return (args) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn(args), wait)
    }
}

function test(e) {
    console.log(new Date())
}

window.onscroll = debounce(test, 1000)