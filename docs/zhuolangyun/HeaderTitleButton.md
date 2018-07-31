---
id: HeaderTitleButton
title: HeaderTitleButton
sidebar_label: HeaderTitleButton
---

基于`HeaderButton`和react-native的`View Image Text`的封装


## 规则
- 统一样式风格的导航器按钮，支持文字和icon


## Example

<table>
  <tr>
    <th style="width: 50%;">iOS</th>
    <th style="width: 50%;">Android</th>
  </tr>
  <tr>
    <td style="width: 50%;">
      <center><img src="/docs/assets/zhuolangyun-HeaderTitleButton.ios.png"></img></center>
    </td>
    <td style="width: 50%;">
      <center><img src="/docs/assets/zhuolangyun-HeaderTitleButton.android.png"></img></center>
    </td>
  </tr>
</table>




## Code

```jsx
import React, { Component } from 'react';
import {
    HeaderTitleButton,
} from '../../components/theme';



const Navigator = createStackNavigator(
    {
        ListCreate:{
            screen:ListCreate,
            navigationOptions:({ navigation }) => ({
                title:'创建目录',
                headerRight: (
                    <HeaderTitleButton
                        onPress={() => {

                        }}
                        title={'下一步'}
                        icon={require('../assets/list_index_icon_8.png')}
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
| title | 标题 | String   |  `''` |
| buttonStyle | 外层容器样式 | Style   |  `省略` |
| style | 按钮样式 | Style   |  `省略` |
| titleStyle | 标题样式 | Style   |  `省略` |
| iconStyle | 图标样式 | Style   |  `省略` |
| iconPosition | 图标位置 | `left`,`right`   |  `right` |
