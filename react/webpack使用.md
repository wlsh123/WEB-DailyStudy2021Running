# webpack使用

## 起步

webpack 用于编译 JavaScript 模块。一旦完成 [安装](https://webpack.docschina.org/guides/installation)，你就可以通过 webpack [CLI](https://webpack.docschina.org/api/cli) 或 [API](https://webpack.docschina.org/api/node) 与其配合交互。如果你还不熟悉 webpack，请阅读 [核心概念](https://webpack.docschina.org/concepts) 和 [对比](https://webpack.docschina.org/comparison)，了解为什么要使用 webpack，而不是社区中的其他工具

### 基本安装

首先我们创建一个目录，初始化 npm，然后 [在本地安装 webpack](https://webpack.docschina.org/guides/installation#local-installation)，接着安装 [`webpack-cli`](https://github.com/webpack/webpack-cli)（此工具用于在命令行中运行 webpack）：

```shell
mkdir webpack-demo
cd webpack-demo
npm init -y //生成一个package.json文件
npm install webpack webpack-cli --save-dev //生成node_modules、package-lock.json文件
```

现在，我们将创建以下目录结构、文件和内容：

```
  webpack-demo
  |- package.json
 +|- index.html
 +|- /src
 +  |- index.js
```

**src/index.js**

```javascript
function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

**index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>起步</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
```

我们还需要调整 `package.json` 文件，以便确保我们安装包是 `private(私有的)`，并且移除 `main` 入口。这可以防止意外发布你的代码。

**package.json**

```diff
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
 - "main": "index.js",
 + "private": true,
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
       "webpack": "^5.4.0",
       "webpack-cli": "^4.2.0"
   }
 }
```

在此示例中，`<script>` 标签之间存在隐式依赖关系。在 `index.js` 文件执行之前，还需要在页面中先引入 `lodash`。这是因为 `index.js` 并未显式声明它需要 `lodash`，只是假定推测已经存在一个全局变量 `_`。

使用这种方式去管理 JavaScript 项目会有一些问题：

- 无法直接体现，脚本的执行依赖于外部库。
- 如果依赖不存在，或者引入顺序错误，应用程序将无法正常运行。
- 如果依赖被引入但是并没有使用，浏览器将被迫下载无用代码。

让我们使用 webpack 来管理这些脚本。

### 创建一个bundle

首先，我们稍微调整下目录结构，创建分发代码(`./dist`)文件夹用于存放分发代码，源代码(`./src`)文件夹仍存放源代码。源代码是指用于书写和编辑的代码。分发代码是指在构建过程中，经过最小化和优化后产生的输出结果，最终将在浏览器中加载。调整后目录结构如下：

```diff
 webpack-demo
  |- package.json
 +|- /dist
   |- index.html
 -|- index.html
  |- /src
    |- index.js
 
```

Tip

你可能会发现，尽管 `index.html` 目前放在 `dist` 目录下，但它是手动创建的。在本指南接下来的章节中，我们会教你如何生成 `index.html` 而非手动编辑它。如此做，便可安全地清空 `dist` 目录并重新生成目录中的所有文件。

要在 `index.js` 中打包 `lodash` 依赖，我们需要在本地安装 library：

```shell
npm install --save lodash
```

Tip

在安装一个 package，而此 package 要打包到生产环境 bundle 中时，你应该使用 `npm install --save`。如果你在安装一个用于开发环境的 package 时（例如，linter, 测试库等），你应该使用 `npm install --save-dev`。更多信息请查看 [npm 文档](https://docs.npmjs.com/cli/install)。

现在，在我们的 script 中 import `lodash`：

```diff
import _ from 'lodash';
+
 function component() {
   const element = document.createElement('div');

-  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
+  // lodash，现在通过一个 script 引入
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());
```

现在，我们将会打包所有脚本，我们必须更新 `index.html` 文件。由于现在是通过 `import` 引入 lodash，所以要将 lodash `<script>` 删除，然后修改另一个 `<script>` 标签来加载 bundle，而不是原始的 `./src` 文件：

```diff
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8" />
     <title>起步</title>
-    <script src="https://unpkg.com/lodash@4.17.20"></script>
   </head>
   <body>
-    <script src="./src/index.js"></script>
+    <script src="main.js"></script>
   </body>
 </html>
```

在这个设置中，`index.js` 显式要求引入的 `lodash` 必须存在，然后将它绑定为 `_`（没有全局作用域污染）。通过声明模块所需的依赖，webpack 能够利用这些信息去构建依赖图，然后使用图生成一个优化过的 bundle，并且会以正确顺序执行。

可以这样说，执行 `npx webpack`，会将我们的脚本 `src/index.js` 作为 [入口起点](https://webpack.docschina.org/concepts/entry-points)，也会生成 `dist/main.js` 作为 [输出](https://webpack.docschina.org/concepts/output)。Node 8.2/npm 5.2.0 以上版本提供的 `npx` 命令，可以运行在初次安装的 webpack package 中的 webpack 二进制文件（即 `./node_modules/.bin/webpack`）：

