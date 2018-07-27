---
id: ExtendsBackButton
title: ExtendsBackButton
sidebar_label: ExtendsBackButton
---

基于react-navigation的`HeaderBackButton`的封装


## 规则
- 继承导航器统一的返回按钮的同时，可以添加一个自定义文本的按钮


## Example

<table>
  <tr>
    <th style="width: 50%;">iOS</th>
    <th style="width: 50%;">Android</th>
  </tr>
  <tr>
    <td style="width: 50%;">
      <center><img src="/docs/assets/zhuolangyun-ExtendsBackButton.ios.png"></img></center>
    </td>
    <td style="width: 50%;">
      <center><img src="/docs/assets/zhuolangyun-ExtendsBackButton.android.png"></img></center>
    </td>
  </tr>
</table>




## Code

```jsx
import React, { Component } from 'react';
import {
    ExtendsBackButton,
} from '../../components/theme';



const Navigator = createStackNavigator(
    {
        ListCreate:{
            screen:ListCreate,
            navigationOptions:({ navigation }) => ({
                title:'创建目录',
                headerLeft: (e)=>(
                    <ExtendsBackButton
                        onPress={() => {
                            
                        }}
                        title={'关闭'}
                        navigationProps={e}
                    />
                ),
            })
        },
    }
)

```



## Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| onPress | 点击事件 | Function   |  `()=>{}` |
| navigationProps | navigationOptions的navigation props | Object   |  `null` |
| title | 标题 | String   |  `''` |



> 请注意：
> 
> 1.不允许把此组件直接赋值给`headerLeft`，必须要用函数接受参数并且赋值给属性后再返回
> 
> 2.此组件必须要配置在`react-navigation`的`navigationOptions`中，不能单独使用
