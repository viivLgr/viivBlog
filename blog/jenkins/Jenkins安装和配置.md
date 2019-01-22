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

![主面板，点击创建任务](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_09.jpg)

- 根据FTP或SFTP选择不同的传输方式，FTP为FTP方式,SFTP为SSH传输
- 因为我需要使用SSH传输的方式进行线上部署，所以需要安装`Publish Over SSH`插件

![主面板，点击创建任务](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_10.jpg)

安装FTP工具连接服务器，这里我用的是yummyFTP[下载](https://pan.baidu.com/s/1xU0WcX5TUUQ6GY3kk_Sp1w) 密码`ml3j`包含注册码。
连接上自己的服务器

## 实例配置

- 新建一个任务，命名
![新建任务](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_08.jpg)

- 选择自由风格的

![新建任务,选择ziyou风格](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_12.jpg)

- 选择源码方式，我这里使用的svn，将svn地址准确填写，并且设置svn账户

[源码选择SVN，配置](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_13.jpg)

- 在系统设置中添加此任务的服务器FTP传输地址信息，注意这里有两种方式：一种FTP、一种SSH。写清楚对应的server名，host地址，用户名，密码,选择端口号，然后点击test测试是否连接成功。

[ftp传输配置](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_10.jpg)
[sftp选择SSH传输配置](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_13.jpg)

- 在任务设置中选择系统设置中对应的FTP Server,填写要上传的文件类型,应用保存即可。

[构建后上传](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_15.jpg)

- 在主面板找到此任务,点击立即构建,即可上传成功

[立即构建](https://github.com/viivLgr/viivBlog/blob/master/images/jenkins_16.jpg)