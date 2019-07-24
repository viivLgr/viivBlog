# 格式化对象

[木易阳前端进阶-第 112 题：编程题，写个程序把 entry 转换成如下对象（跟昨日题目相反）](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/212)

```javascript
var entry = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae'
}
// 要求转换成如下对象
var output = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
}
```

