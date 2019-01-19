var prototype = {
    getName: function() {
        return this.first + ' ' + this.last
    },
    say: function() {
        console.log('hello')
    }
}

var x = Object.create(prototype)
x.first = 'A'
x.last = 'B'
console.log(x.getName())
x.say()

var y = Object.create(prototype)
y.first = 'Aa'
y.last = 'Bb'
console.log(y.getName())
y.say()