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

开发工具已在package.json中配置好，在项目根目录下直接运行下面的代码安装即可。

```
npm install
```





