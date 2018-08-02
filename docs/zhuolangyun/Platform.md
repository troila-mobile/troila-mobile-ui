---
id: Platform
title: 平台入口
sidebar_label: 不同平台和设备的入口
---

由于这个项目需要分发处理`phone`和`pad`，所以做了如下的入口文件区分


## 规则
- 只支持`phone`和`pad`
- 原则上尽量保持只有`view`需要区分，其他`actions`等尽量共用

已配置`phone`和`pad`自动入口分发

之前的`pages`目录用来存储`phone`的view，**新增了`pages.pad`目录用来存储`pad`的view**

`pages.pad`在创建时完全移植了`pages`的内容，所以目前`pad`内组件代码没有变化，可以减少`pad`的二次开发代码量

在`containers`内，**新增了`navigator.pad.js`**，这是`pad`的导航器，**文件内部的组件声明目录都是来自`pages.pad`**，同样是由`navigator.js`完全相同的移植过来的

由于导航器和pages在移植上的共性，所以尽可能保持routerName一致等特性

>请拉取最新更新