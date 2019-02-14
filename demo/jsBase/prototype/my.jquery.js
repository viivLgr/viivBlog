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











// (function(window){
//     var jQuery = function(selector) {
//         return jQuery.fn.init(selector)
//     }
//     jQuery.fn = {
//         constructor: jQuery,
//         css: function(key, value) {},
//         html: function(value) {}
//     }
//     var init = jQuery.fn.init = function(selector) {
//         var slice = Array.prototype.slice
//         var dom = slice.call(document.querySelectorAll(selector))

//         var i, len = dom ? dom.length : 0
//         for(i = 0; i < len; i++) {
//             this[i] = dom[i]
//         }
//         this.length = len
//         this.selector = selector
//     }

//     init.prototype = jQuery.fn

//     window.$ = jQuery
// })(window)