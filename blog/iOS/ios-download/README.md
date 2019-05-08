# ios中企业级应用通过浏览器直接下载安装

1. 服务器（http或https都可以）上存储的ipa文件（iOS打的包）
2. https服务器（可以用GitHub）地址的.plist 文件（内容如[myapp.plist](https://github.com/viivLgr/viivBlog/blob/master/blog/iOS/ios-download/myapp.plist)，注意不能有注释)
3. 浏览器通过 `window.location = "itms-services://?action=download-manifest&url=" + encodeURIComponent(url)` 即可唤起手机自带iTunes Store 下载.plist文件中的应用

下面是.plist文件的内容，注意**不可以包含注释**，并且访问此文件必须通过**https**协议才可以。

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>items</key>
        <array>
            <dict>
                <key>assets</key>
                <array>
                    <dict>
                        <key>kind</key>
                        <string>software-package</string>
                        <key>url</key>
                        <!-- 注意！ 这里是应用的ipa文件地址 -->
                        <string><![CDATA[https://xxx.ipa]]></string>
                    </dict>
                    <dict>
                        <key>kind</key>
                        <string>full-size-image</string>
                        <key>needs-shine</key>
                        <true/>
                        <key>url</key>
                        <!-- 注意！这里是应用图标的图片路径 全尺寸 可有可无 -->
                        <string><![CDATA[http://bbdh5.papahuan.com:8084/resource/e-loan.56d068aa.png]]></string>
                    </dict>
                    <dict>
                        <key>kind</key>
                        <string>display-image</string>
                        <key>needs-shine</key>
                        <true/>
                        <key>url</key>
                        <!-- 注意！这里是应用图标的图片路径 非全尺寸 可有可无 -->
                        <string><![CDATA[http://bbdh5.papahuan.com:8084/resource/e-loan.56d068aa.png]]></string>
                    </dict>
                </array>
                <key>metadata</key>
                <dict>
                    <key>bundle-identifier</key>
                    <string>com.seed.youpin</string>
                    <key>bundle-version</key>
                    <!-- 注意！版本号 -->
                    <string><![CDATA[1.0.0]]></string>
                    <key>kind</key>
                    <string>software</string>
                    <key>title</key>
                    <!-- 注意！应用名称 -->
                    <string><![CDATA[旅行e贷]]></string>
                    <key>subtitle</key>
                    <!-- 注意！应用副标题 可有可无 -->
                    <string><![CDATA[APP]]></string>
                </dict>
            </dict>
        </array>
    </dict>
</plist>
```