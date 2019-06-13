## Flutter 开发环境的搭建

- 系统的基本要求
- JAVA环境的搭建
- Flutter SDK的安装
    [下载](https://flutter.dev/docs/development/tools/sdk/releases?tab=macos)并安装，然后配置环境变量
- 配置环境变量
    1.创建或打开`$HOME/.bash_profile`文件.
    2. 添加以下行，并替换`[PATH_TO_FLUTTER_GIT_DIRECTORY]`为Flutter目录
    ```
    export PATH=[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin:$PATH
    ```
    
- 检查flutter 安装情况，根据诊断结果及安装建议进行操作
    ```
    flutter doctor
    ```
- 新建flutter项目
    ```
    flutter create demo001
    ```