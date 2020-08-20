# webpack

## source-map

source map 的作用是为了追踪错误和警告在源码的原始位置。比如有三个文件 a.js、b.js、c.js 打包后得到 bundle.js，如果没有 source map 那么错误会指向到bundle.js，但是 source map 功能会将编译后的代码映射到原始代码的文件和位置。 

webpack 通过 devtool 控制是否有source map 以及如何配置 source map，也可以使用 [SourceMapDevToolPlugin](https://www.webpackjs.com/plugins/source-map-dev-tool-plugin/) 更灵活的配置source map。

不同的 source map 配置会影响项目构建和重新构建的速度。

### devtool

inline-source-map

```s
Hash: 8eb6f8b291e6671d99a4
Version: webpack 4.44.1
Time: 2760ms
Built at: 2020-08-20 12:54:44
    Asset      Size  Chunks             Chunk Names
bundle.js  1.38 MiB    main  [emitted]  main
Entrypoint main = bundle.js
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {main} [built]
[./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {main} [built]
[./src/index.js] 96 bytes {main} [built]
[./src/math.js] 119 bytes {main} [built]
    + 1 hidden module
```


## tree shaking

> tree shaking 是指移除 js 上下文中的未引用代码（dead-code）的术语。依赖es6的静态结构特性（import、export）

在 webpack 4 正式版本， 扩展了这个检测能力，通过 package.json 的 "sideEffects" 属性作为标记，向compiler 提供提示，表明那些文件是"pure（纯的ES6模块）"，由此可以安全的删除文件中未使用的部分。 - webpack官网

