# 原生JavaScript封装jsonp请求

学习[Wiolem-原生 JavaScript 封装 jsonp 请求](https://wiolem.github.io/2018/01/10/%E5%8E%9F%E7%94%9F%20JavaScript%20%E5%B0%81%E8%A3%85%20jsonp%20%E8%AF%B7%E6%B1%82/)

## 跨域请求

浏览器的同源策略，出于防范跨站脚本的攻击，禁止客户端脚本（如JavaScript）对不同于的服务进行跨站调用。
> 同源：协议名protocol、主机host、端口号port

## jsonp

jsonp是json的一种使用模式，可以解决主流浏览器的跨域数据访问问题。
原理是根据XmlHttpRequest对象受到同源策略的影响，而script标签元素却不受同源策略影响，可以加载跨域服务器上的脚本，网页可以从其他源动态产生json资源。用jsonp获取的不是json数据，而是可以直接运行的JavaScript语句。

## 实现

首先先有两个服务器形成跨域。

client.js

```javascript
const http = require('http')
const client = http.createServer((req, res) => {
    res.end('client')
})
client.listen({port: 8000})
module.exports = client
```

server.js

```javascript
const http = require('http')
const server = http.createServer((req, res) => {
    res.end('server')
})
server.listen({port: 9000})
module.exports = server
```

启动服务

```linux
node client.js
node server.js
```

jsonp 实现

```javascript
var jsonp = function(src, cb, callback, data) {
    var script = document.createElement('script')
    var randomCallback = 'callback' + parseInt(Math.random() * 10000)
    window[randomCallback] = function(res) {
        callback(res)
    }
    var cbSrc = src + '?' + cb + '=' + randomCallback
    src = data ? cbSrc + '&' + data : cbSrc
    script.src = src
    document.body.appendChild(script)
    script.onload = function() {
        setTimeout(function() {
            script.remove()
            delete window[randamCallback]
        }, 100)
    }
}
```

index.html使用jsonp请求

```html
<html>
    <div id="data"></div>
    <script>
        jsonp('http:localhost:9000', 'callback', function(res) {
            document.getElementById('data').innerHTML = JSON.stringify(res)
        })
    </script>
</html>
```

### 注意点

- jsonp只能使用GET方法发起请求，这是由于script标签自身的限制决定的
- 虽然jQuery是通过$.ajax来调用，但是jsonp实现的跨域调用不是通过XmlHttpRequest对象，而是通过script标签，所以在实现上，jsonp和ajax已经没有关系了。