# React项目起步脚手架

## step 1：创建项目目录结构

下载`scaffold`目录，更名为自己的项目名称，如`foo`。进入`foo`，目录结构如下：

```
foo/
├── lib/ · · · · · · · · · · · · · · · · 依赖库
│   ├── react.js
│   └── ...
├── src/ · · · · · · · · · · · · · · · · 开发源代码
│   ├── mixins/ 
│   │   ├── xxx.js
│   │   └── ...
│   ├── Header/ · · · · · · · · · · · · Compontent目录
│   │   ├── Header.js
│   │   ├── Header.styl
│   │   ├── Header.css
│   │   └── Header/ 样式图片目录
│   └── ...
├── dist/ · · · · · · · · · · · · · · · 打包后的文件目录
├── node_modules/ · · · · · · · · · · · 开发依赖的npm包
├── gulpfile.js · · · · · · · · · · · · 开发配置文件
├── webpack.config.js · · · · · · · · · 开发配置文件
├── package.json  · · · · · · · · · · · 项目信息配置文件

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

### 启动`server`

```
gulp watch
```

上面的命令执行后，会在浏览器自动打开项目根目录下的`index.html`（其他页面可以手动打开）用来实时预览开发效果，
页面中如果看到`Hello React`，说明你的开发环境已搭建成功。

#### 验证`watch`和`livereload`功能

打开`src/app/app.js`，将`React`改成`UI`，然后保存。

```
- <HelloWorld world="React"/>
+ <HelloWorld world="UI"/>
```

保存后如果浏览器页面能够自动刷新且一切功能正常，则`watch`和`livereload`功能正常。

#### 验证`css sourcemap`功能

目的：在开发过程的调试阶段，让控制台中的样式直接定位到`.styl`文件(而不是`.css`)，方便快速定位。

打开浏览器控制台，将inspect(放大镜)定位到`Hello React`对应的`H1`标签上，如果在`Styles`面板中对应的文件是`HelloWorld.styl`，则`css sourcemap`功能正常。

#### 验证`js sourcemap`功能

目的：在开发过程的调试阶段，让控制台中的`js`断点直接定位到编译前的`jsx`文件，方便快速定位。

保持浏览器控制台为打开状态，在`src/HelloWorld/HelloWorld.js`中添加一个断点，如下：

```
render: function () {
    debugger; // 添加这一行验证js sourcemap功能
    return (
        <h1>Hello {this.state.world}</h1>
    )
}
```

浏览器刷新后，控制台会自动切换到`sources`面板，如果发现断点停在`HelloWorld.js`文件(而不是停在`index.html`加载的打包后的`app.js`文件)中，则`js sourcemap`功能正常。

> 还可以有第二个方法验证`js sourcemap`功能，即直接在控制台中打断点，但要注意，不是在`dist/app.js`文件中添加断点，而是在`source`面板的`webpack://`目录下，在对应的`jsx`文件中添加断点。

## step 4：自定义开发配置

以下文件已经对开发环境准备好了基础的配置，可以根据自己的需要进行进一步配置。

> 全局配置文件建议由一个人负责维护，来保证所有人的配置一致，避免在合并代码时给项目整体构建留下隐患。

* gulpfile.js
* webpack.config.js
* package.json
