import { readonly, deprecate } from 'core-decorators'

class Person {
    @readonly
    name() {
        return 'zhang'
    }
    // 废弃
    @deprecate
    facepalm() {}

    @deprecate('已经弃用了')
    facepalmHard() {}

    @deprecate('已经弃用了', {url: 'www.baidu.com'})
    facepalmHard2() {}
}

let p = new Person()
alert(p.name())

// p.name = function(){} // Cannot assign to read only property 'name' of object '#<Person>'


// p.facepalm() // This function will be removed in future versions.

// p.facepalmHard() // DEPRECATION Person#facepalmHard: 已经弃用了

p.facepalmHard2() // DEPRECATION Person#facepalmHard2: 已经弃用了 See www.baidu.com for more details.