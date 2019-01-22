# Jenkins 安装和配置

我是mac环境，参考文章[使用jenkins实现持续集成](https://www.cnblogs.com/zishengY/p/7170656.html)

## 下载Jenkins

[官网](https://jenkins.io/)下载

或 点击[这里](https://github.com/viivLgr/viivBlog/blob/master/blog/jenkins/lib/jenkins-2.161.pkg)我下载过的

## 安装

下载之后按照提示进行安装

## 配置

- 安装好之后会自动打开浏览器，这时候等待就好了

![等待后台配置](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_01.jpg)

- 按照提示找到initPassword的目录，并填写密码

![填写密码](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_02.jpg)
如果遇到文件夹无权限的情况，右键打开**显示简介**，让在权限的地方打开锁，勾选权限即可。

- 选择要安装的插件，建议安装的插件有点多会慢一些，不清楚需要什么插件的可以选择这个

![安装插件](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_03.jpg)

- 创建一个管理员用户

![创建一个管理员用户](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_04.jpg)

- 实例配置

![实例配置](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_05.jpg)

- 配置完成，可以进行访问了

![配置完成，可以进行访问了](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_06.jpg)

- 登录之后，进行系统配置
- 因为我需要使用SSH传输的方式进行线上部署，所以需要安装`Publish Over SSH`插件

安装FTP工具连接服务器，这里我用的是yummyFTP[下载](https://pan.baidu.com/s/1xU0WcX5TUUQ6GY3kk_Sp1w) 密码`ml3j`包含注册码。
连接上自己的服务器
