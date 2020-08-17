# tree shaking

> tree shaking 是指移除 js 上下文中的未引用代码（dead-code）的术语。依赖es6的静态结构特性（import、export）

在 webpack 4 正式版本， 扩展了这个检测能力，通过 package.json 的 "sideEffects" 属性作为标记，向compiler 提供提示，表明那些文件是"pure（纯的ES6模块）"，由此可以安全的删除文件中未使用的部分。 - webpack官网