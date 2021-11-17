
## 项目架构图

```
|---components        符合vue组件规范的uni-app组件目录
|---http              网络请求
    |---api.js        接口请求（多模块api可在当前文件引入）
    |---config.js     request的请求配置
    |---http-method   网络请求method封装，一般不用动
    |---url-const.js  接口常量
|---node_modules      存放[uni_module](/uni_modules)规范的插件
|---pages             业务页面文件存放的目录
|---router            页面路由跳转
    |---router.js 
|---static            存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
|---styles            css样式
    |---common.css    公共样式
    |---iconfont.css  阿里图标库
|---utils             工具
    |---i18n          国际化
    |---save-key.js   本地存储key     
|---.gitigonre       忽略文件
|---App.vue          应用配置，用来配置App全局样式以及监听 应用生命周期
|---main.js          Vue初始化入口文件
|---manifest.json    配置应用名称、appid、logo、版本等打包信息
|---packacge.json     项目描述文件，记录了当前项目信息,例如项目名称、版本、github地址、 当前项目依赖了哪些第三方模块等
|---pages.json       配置页面路由、导航条、选项卡等页面类信息
|---uni.scss         预置了一批scss变量预置
|---uview.theme.scss 自定义uView主题色

```
# 下载依赖
将代码clone到本地后,在项目根目录下，运行 npm install 安装项目中配置的第三方模块

# 微信小程序运行
【 运行】-【运行到小程序模拟器】-【微信开发者工具】

# 配置微信小程序
1.【工具】-【设置】-【运行配置】-【小程序运行配置】- 配置微信开发者工具路径安装路径到 "/微信web开发者工具" 目录
2.在微信开发者工具中的【设置】-【安全设置】- 打开服务端口

#三方框架
1. UI框架：uView （[uView官方地址](https://www.uviewui.com/components/intro.html)）

