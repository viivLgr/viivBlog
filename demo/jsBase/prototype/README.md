# zepto和jquery中的原型

入口函数 -> 构造函数 -> 构造函数的原型

## zepto 关于原型部分源码

```javascript
(function(window){
    var zepto = {}

    function Z(dom, selector){
        var i, len = dom ? dom.length : 0
        for(i = 0; i < len; i++) this[i] = dom[i]
        this.length = len
        this.selector = selector || ''
    }

    zepto.Z = function(dom, selector) {
        return new Z(dom, selector)
    }

    zepto.init = function(selector) {
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelectorAll(selector))
        return zepto.Z(dom, selector)
    }

    var $ = function(selector) {
        return zepto.init(selector)
    }
    window.$ = $

    // 为了扩展插件
    $.fn = {
        constructor: zepto.Z,
        css: function(key, value){ console.log('css') },
        html: function(value){ console.log('html') }
    }
    zepto.Z.prototype = Z.prototype = $.fn
})(window)

// 扩展原型插件
$.fn.getNodeName = function(){console.log('getNodeName')}
```

## jquery 关于原型部分源码

```javascript
(function(window){
    var jQuery = function(selector) {
        return new jQuery.fn.init(selector)
    }

    // 扩了扩展插件
    jQuery.fn = {
        constructor: jQuery,
        css: function(key, value){console.log('css')},
        html: function(value){
            console.log('html')
            return 'html'
        }
    }

    var init = jQuery.fn.init = function(selector) {
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelectorAll(selector))
        var i, len = dom ? dom.length : 0
        for(i = 0; i < len; i++) this[i] = dom[i]
        this.length = len
        this.selector = selector || ''
    }

    init.prototype = jQuery.fn

    window.$ = jQuery
})(window)

// 扩展原型插件
$.fn.getNodeName = function(){console.log('getNodeName')}

```

## 为何原型属性要单独创建object？

为了提高扩展性！！！

1. 只有$会暴露在window全局变量
2. 将插件扩展统一到`$.fn.xxx`这一个接口，方便使用
