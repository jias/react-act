# React项目起步脚手架

## step 1：创建项目目录结构

下载`scaffold`目录，更名为自己的项目名称，如`foo`。进入`foo`，目录结构如下：

```
foo/
├── lib/ 依赖库
│   ├── react.js
│   └── ...
├── src/ 开发源代码
│   ├── mixins/ 
│   │   ├── xxx.js
│   │   └── ...
│   ├── Header/
│   │   ├── Header.js
│   │   ├── Header.styl
│   │   ├── Header.css
│   │   └── Header/ 样式图片目录
│   └── ...
├── node_modules/ 开发依赖的npm包
├── site/ 站点源代码 待定
├── gulpfile.js 开发配置文件
├── webpack.config.js 开发配置文件
├── package.json 项目信息配置文件

```

## step 2：安装开发依赖的工具

开发所依赖的工具已在package.json中配置好，在项目根目录下直接运行下面的代码安装即可。

```
npm install
```

安装后，会在项目根目录下创建`node_modules`目录，包含了目前所开发依赖的工具，简单介绍如下：

* `gulp` 项目构建工具平台。
  - `gulp-watch` 监听文件的变化
  - `gulp-uglify` js压缩
  - `gulp-webpack` 模块依赖分析打包
* `browser-sync` 和 `gulp-watch`协同工作，当监听到文件变化时，触发浏览器的自动刷新(`livereload`)。
* `jsx-loader` React的`jsx`语法转换

## step 3：启动Server，开启React之旅

启动server

```
gulp watch
```

上面的命令执行后，会在浏览器自动打开项目根目录下的`index.html`（其他页面可以手动打开）用来实时预览开发效果，
页面中如果看到`Hello React`，说明你的开发环境已搭建成功。

页面中的`Hello React`是由`src`目录下的两个`demo`文件实现的，分别是`h.js`和`ui.js`，你可以修改他们来验证`watch`和`livereload`功能。

打开`src/ui.js`，将`Hello React`改成`Hello React UI`，然后保存。

```
var Header = require('./h').Header;
React.render(
<Header title="Hello React UI" />, // add " UI"
document.body
);
```

保存后会发现浏览器页面已自动刷新。

## step 4：自定义开发配置

以下文件已经对开发环境准备好了基础的配置，可以根据自己的需要进行进一步配置。

> 全局配置文件建议由一个人负责维护，来保证所有人的配置一致，避免在合并代码时给项目整体构建留下隐患。

* gulpfile.js
* webpack.config.js
* package.json
