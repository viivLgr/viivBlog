// 自己封装的ajax，使用方式如下
ajax({
    url: '/getData',
    type: 'POST',
    dataType: 'json',
    data: {
        id: '123'
    }
}).done(function(){})

// 但因为历史原因，代码中全都是
// $.ajax({...})

// 做一层适配器，之前的代码还可以继续使用
var $ = {
    ajax: function(options) {
        return ajax(options)
    }
}