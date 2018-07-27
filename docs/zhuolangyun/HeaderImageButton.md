---
id: HeaderImageButton
title: HeaderImageButton
sidebar_label: HeaderImageButton
---

基于`HeaderButton`和react-native的`Image`的封装


## 规则
- 统一样式风格的导航器按钮，专属图片


## Example

<table>
  <tr>
    <th style="width: 50%;">iOS</th>
    <th style="width: 50%;">Android</th>
  </tr>
  <tr>
    <td style="width: 50%;">
      <center><img src="/docs/assets/zhuolangyun-HeaderImageButton.ios.png"></img></center>
    </td>
    <td style="width: 50%;">
      <center><img src="/docs/assets/zhuolangyun-HeaderImageButton.android.png"></img></center>
    </td>
  </tr>
</table>




## Code

```jsx
import React, { Component } from 'react';
import {
    HeaderImageButton,
} from '../../components/theme';



const Navigator = createStackNavigator(
    {
        ListCreate:{
            screen:ListCreate,
            navigationOptions:({ navigation }) => ({
                title: '虚拟机目录',
                headerLeft: (
                    <HeaderImageButton
                        icon={require('../assets/virtual_search.png')}
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
| icon | 图标资源 | Source |  `>` |
| buttonStyle | 按钮样式 | Style   |  `省略` |
| iconStyle | 图标样式 | Style   |  `省略` |
