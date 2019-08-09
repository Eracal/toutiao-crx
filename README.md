## 头条小程序审核状态检测

由于当头条小程序审核时，不知道审核员何时审核完毕，所以需要频繁到后台查看，所以开发了本插件。

### 插件原理

通过 Chrome 插件，每 20 分钟刷新一次头条小程序的发布页面，如果页面状态显示已经变更，则通过 Chrome 进行通知。

### 插件权限

- Chrome Notifications 通知权限

- `https://developer.toutiao.com/app/publish` 页面 DOM 权限，**不会**涉及小程序任何隐私。

### 安装教程

此插件没有发布到 Chrome 商店。通过下载本页面中的`toutiao.crx` 离线插件包，拖到 Chrome 浏览器安装即可。

### 使用方法

安装插件后，打开头条小程序发布页面，如下图所示。

![](http://img.eriice.com/toutiaopng)

### 注意事项

 - 如果头条页面代码更新可能会造成此插件失效
 - 本插件是基于页面，所以需要打开头条小程序的发布页面，如果关闭了就不能检测审核状态变化了
 - 插件源码均给出，可自行修改检测频率等

### 参考资料

[chrome 插件开发](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html#popup%E5%92%8Cbackground) 

[chrome 通知](https://crxdoc-zh.appspot.com/extensions/notifications)

### 展望

希望头条可以在审核变更后，通过手机短信通知我们开发者。这样就不需要我们频繁关注是否已经过审。

### 其他

其实一开始我是用 `Python` 开发了一个通知脚本，可以进行短信通知，目前我自己就是使用这个脚本。

但是由于我只有 100 条免费短信额度，开放了估计很快耗尽。所以就写了这个 Chrome 插件替代，希望能给大家帮助。

有任何插件使用问题或者头条小程序开发问题都可以提 issue 交流。（PS：我也是前几天才开始开发头条小程序，现在小程序在审核中）

下面是我的头条号和个人微信公众号，欢迎关注。

![](http://img.eriice.com/toutiao_wechat_qrcode.png)