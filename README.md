# browserslist-config

> Browserslist 浏览器兼容性配置包。

对你来说，这个包只能作为一个示例。你应该根据自己的业务需求来定制自己的 Browserslist 配置包。

## 安装

```sh
npm i -D @cmcm/browserslist-config
```

## 使用方法

### 有独立配置文件

项目根目录的 `.browserslistrc` 文件只需要包含以下内容：

```sh
extends @cmcm/browserslist-config
```

### 无独立配置文件

在 `package.json` 文件中，按如下格式编写配置：

```json
{
	"browserslist": [
		"extends @cmcm/browserslist-config"
	]
}
```

## 多入口

这个配置包里包含了多个平台的配置，提供了多个入口文件：

入口 | 适用平台 | 备注
---|:---:|---
`/preset/mobile` | 移动端 |
`/preset/desktop` | 桌面端 |
`/index` 或省略（默认入口） | 双平台 | 实际上就是以上两者之和

根据项目需要，在 `extends` 的时候指定入口文件即可。比如：

```sh
# for a mobile project
extends @cmcm/browserslist-config/preset/mobile
```
