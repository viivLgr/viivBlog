# 如何实现一个new

new 的作用

- 创建一个新对象
- 实现继承：新对象的构造器指向传入的对象原型 
- this指向这个新创建的对象
- 返回这个新对象

```javascript
function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    // console.log('constructor', obj.__proto__ === fn.prototype) // true
    fn.call(obj, ...arg);
    return obj;
}
```