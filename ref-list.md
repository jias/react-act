# Going big with React

## React观点

* simple !== familiar


## 官方文档

* [JSX进阶](http://facebook.github.io/react/docs/jsx-in-depth.html)
* [配套工具和教程(Complementary Tools)](https://github.com/facebook/react/wiki/Complementary-Tools)
* [JSX和HTML的区别](http://facebook.github.io/react/docs/jsx-gotchas.html) 里面讲到输出html的几种方法
   - [unicode工具](http://www.fileformat.info/info/unicode/char/search.htm) 很好的工具
   - [DOM Differences](http://facebook.github.io/react/docs/dom-differences.html)
* [TODO: 关于children的key，没明白。](http://facebook.github.io/react/docs/multiple-components.html)
* [关于复用component](http://facebook.github.io/react/docs/reusable-components.html)
  - propTypes的验证规则
  - Mixin
* [Component Lifecycle](http://facebook.github.io/react/docs/working-with-the-browser.html#component-lifecycle) 
  - Mounting: A component is being inserted into the DOM.
  - Updating: A component is being re-rendered to determine if the DOM should be updated.
  - Unmounting: A component is being removed from the DOM.
* Forms
  - Controlled Components
  - Uncontrolled Components: An `<input>` that does not supply a value (or sets it to `null`) is an uncontrolled component. In an uncontrolled `<input>`, the value of the rendered element will reflect the user's input. 
  - `checkbox/radio`使用`defaultChecked`实现`Uncontrolled`
  - `textarea`的值必须使用value属性来设置

```
// WRONG
<textarea name="description">This is the description.</textarea>
// RIGHT
<textarea name="description" value="This is a description." />
```
  
## 相关CommonJS工具

* [html to jsx](http://facebook.github.io/react/html-jsx.html)
* [browserify](http://browserify.org/)
* [webpack](http://webpack.github.io/)
* [flux](http://fluxxor.com/what-is-flux.html)

## 基于React实现的UI

* [React.js powered UI framework for developing beautiful hybrid mobile apps.](http://touchstonejs.io/)
* [React Hackathon toolkit](https://github.com/petehunt/ReactHack)
* [react-touch](https://github.com/petehunt/react-touch)

## 比较好的React教程

* [Removing User Interface Complexity, or Why React is Awesome](http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome)

## 其他

* [MDN Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) React中`{...props}`写法的来源
* [HTML5shim](https://github.com/aFarkas/html5shiv)
* [console-polyfill](https://github.com/paulmillr/console-polyfill/blob/master/index.js)

## Offline Transform

安装

```
npm install -g react-tools
```

监听

```
jsx --watch jsx/ src/
```