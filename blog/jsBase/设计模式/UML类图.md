# UML 类图

- Unified Modeling Language 统一建模语言
- 类图：关系，主要讲解泛化（类之间的继承）和关联（类之间的组合）
- 制图工具： processon

![类图](https://github.com/viivLgr/viivBlog/blob/master/images/uml-1.png)

## 关系

- 泛化：表示继承
- 关联，表示引用

```javascript
class People {
    constructor(name, house) {
        this.name = name
        this.house = house
    }
    saySomething() {}
}

class A extends People{
    constructor(name, house) {
        super(name, house)
    }
    saySomething() {
        alert('I am A')
    }
}

class B extends People{
    constructor(name, house) {
        super(name, house)
    }
    saySomething() {
        alert('I am B')
    }
}

class House {
    constructor(city) {
        this.city = city
    }
    showCity() {
        alert(`house in ${this.city}`)
    }
}

// 测试
let aHouse = new House('北京')
let a = new A('aaa', aHouse)
console.log(a) // 有房子
let b = new B('bbb')
console.log(b) // 无房子
```

![关系类图](https://github.com/viivLgr/viivBlog/blob/master/images/uml-2.png)