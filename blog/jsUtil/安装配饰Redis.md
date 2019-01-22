# 安装配置Redis

mac 环境

## 安装

```shell
$ wget http://download.redis.io/releases/redis-2.8.17.tar.gz
$ tar xzf redis-2.8.17.tar.gz
$ cd redis-2.8.17
$ make
```

make完后 redis-2.8.17目录下会出现编译后的redis服务程序redis-server,还有用于测试的客户端程序redis-cli,两个程序位于安装目录 src 目录下：

![src目录](https://github.com/viivLgr/viivBlog/blob/master/images/redis_01.png)

下面启动redis服务.

```shell
$ cd src
$ ./redis-server
```

注意这种方式启动redis 使用的是默认配置。也可以通过启动参数告诉redis使用指定配置文件使用下面命令启动。

```shell
$ cd src
$ ./redis-server ../redis.conf
```

**redis.conf**是一个默认的配置文件。我们可以根据需要使用自己的配置文件。

启动redis服务进程后，就可以使用测试客户端程序redis-cli和redis服务交互了。 比如：

```shell
$ cd src
$ ./redis-cli
redis> set foo bar
OK
redis> get foo
"bar"
```

![启动redis-server](https://github.com/viivLgr/viivBlog/blob/master/images/redis_02.png)

![运行redis-cli](https://github.com/viivLgr/viivBlog/blob/master/images/redis_02.png)