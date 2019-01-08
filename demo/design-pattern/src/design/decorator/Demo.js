// @testDec
// class Demo {}

// function testDec(target) {
//     target.isDec = true
// }
// alert(Demo.isDec)



// -------加参数-------
function testDec(isDec) {
    return function(target) {
        target.isDec = isDec
    }
}

@testDec(true)
class Demo {}
alert(Demo.isDec)