---
id: BackgroundButton
title: BackgroundButton
sidebar_label: BackgroundButton
---

基于react-native的`TouchableOpacity`和`ImageBackground`的封装


## 规则
- 统一使用背景过渡的按钮


## Example

<table>
  <tr>
    <th style="width: 50%;">iOS</th>
    <th style="width: 50%;">Android</th>
  </tr>
  <tr>
    <td style="width: 50%;">
      <center><img src="/docs/assets/zhuolangyun-backgroundbutton.ios.png"></img></center>
    </td>
    <td style="width: 50%;">
      <center><img src="/docs/assets/zhuolangyun-backgroundbutton.android.png"></img></center>
    </td>
  </tr>
</table>




## Code

```jsx
import React, { Component } from 'react';
import {
    BackgroundButton,
} from '../../components/theme';


class Example extends Component {
    render() {
        return (
            <BackgroundButton
                title={'登陆'}
                buttonStyle={{marginTop:37}}
            />
        );
    }
}


```



## Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| onPress | 点击事件 | Function   |  `()=>{}` |
| titleColor | 标题颜色 | String   |  `#fff` |
| title | 标题 | String   |  `''` |
| buttonStyle | 按钮样式 | Style   |  `省略` |
| titleStyle | 标题样式 | Style   |  `省略` |
