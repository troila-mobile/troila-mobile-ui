---
id: main
title: Troila Mobile Ui of React-Native
sidebar_label: Getting Started
---

`troila-mobile-ui` 是 [Troila Mobile Ui](https://docusaurus.io) 的移动规范的 React Native 实现，服务于天津卓朗科技移动端业务。

## 特性和优势

- UI 样式高度可配置，拓展性更强，轻松适应各类产品风格
- 基于 React Native 的 iOS / Android / `Web todo` 多平台支持，组件丰富、能全面覆盖各类场景 
- 提供 "组件按需加载" 等优化方案，一体式开发
- 使用 TypeScript 开发，提供类型定义文件，支持类型及属性智能提示，方便业务开发
- 全面兼容 react

## 适用场景

- 适合于中大型产品应用
- 适合于基于 react / react-native 的多终端应用
- 适合不同 UI 风格的高度定制需求的应用


## 快速上手

> 在开始之前，推荐先学习 [React](http://facebook.github.io/react/) 和 [ES2015](http://babeljs.io/docs/learn-es2015/)。我们使用了 `babel`，试试用 [ES2015](http://babeljs.io/blog/2015/06/07/react-on-es6-plus) 的写法来提升编码的愉悦感。
>
> 确认 [Node.js](https://nodejs.org/en/) 已经升级到 v4.x 或以上。

### 1. 创建一个项目

可以是已有项目，或者是使用 create-react-native-app 新创建的空项目，你也可以从[这里](https://facebook.github.io/react-native/docs/getting-started)拷贝并修改

> 参考更多[官方示例集](https://facebook.github.io/react-native/docs/getting-started)
> 或者你可以利用 React 生态圈中的 [各种脚手架](https://github.com/enaqx/awesome-react#boilerplates)

完整步骤请查看此处文档： [antd-mobile-sample/create-react-native-app](https://github.com/troila-mobile/troila-mobile-ui/blob/master/docs/create-react-native-app.md)

### 2. 安装

```bash
$ npm install troila-mobile-ui --save
```

### 3. 使用

组件使用实例：

```jsx
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Text from 'troila-mobile-ui/text';

class HelloWorldApp extends Component {
  render() {
    return <Text>Start</Text>;
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
```

##### 按需加载

下面两种方式都可以**只加载**用到的组件，选择其中一种方式即可。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

   ```js
   // .babelrc or babel-loader option
   {
     "plugins": [
       ["import", { libraryName: "troila-mobile-ui" }]
     ]
   }
   ```

   然后改变从 antd-mobile-rn 引入模块方式即可。

   ```jsx
   import { Text } from 'troila-mobile-ui';
   ```


- 手动引入

   ```jsx
   import Text from 'troila-mobile-ui/text';
   ```

##### 更多增强 (非必须):

> [自定义 RN 主题和单个组件样式](https://github.com/ant-design/antd-mobile-samples/tree/master/rn-custom-ui#antd-mobile-with-rn-custom-ui)
> 比如 [#1853](https://github.com/ant-design/ant-design-mobile/issues/1853)

## 版本

- 稳定版：[![npm package](http://img.shields.io/npm/v/troila-mobile-ui.svg?style=flat-square)](http://npmjs.com/package/troila-mobile-ui)

## 链接

- [React Native文档](https://facebook.github.io/react-native/)
- [React 模块](http://github.com/react-component)

## 如何贡献

有任何建议或意见您可以 [Pull Request](https://github.com/troila-mobile/troila-mobile-ui/pulls)，给我们 [报告 Bug](https://github.com/troila-mobile/troila-mobile-ui/issues/new)。

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)，更好的问题更容易获得帮助。

## 社区互助

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。

通过 Stack Overflow 或者 Segment Fault 提问时，建议加上 `troila-mobile-ui` 标签。

1. [Stack Overflow](http://stackoverflow.com/)（推荐）
2. [Segment Fault](https://segmentfault.com/)
