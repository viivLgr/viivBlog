function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending'
}

var hw = helloWorldGenerator();
// console.log(hw[Symbol.iterator])
// nodejs: [Function: [Symbol.iterator]]

console.log(hw.next())
// nodejs: { value: 'hello', done: false }


function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for(let v of foo()) {
    console.log(v)
}