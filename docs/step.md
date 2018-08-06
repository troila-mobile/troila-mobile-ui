---
id: step
title: Step
sidebar_label: Step
---

用于步骤显示


## 规则
- 必须指定`label`和`activeIndex`


## Example

<table>
  <tr>
    <th style="width: 50%;">iOS</th>
    <th style="width: 50%;">Android</th>
  </tr>
  <tr>
    <td style="width: 50%;">
      <center><img src="/docs/assets/step.ios.png"></img></center>
    </td>
    <td style="width: 50%;">
      <center><img src="/docs/assets/step.android.png"></img></center>
    </td>
  </tr>
</table>




## Code

```jsx
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {Step} from 'troila-mobile-ui';


export default class Example extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Step
                    label={['目录基本信息', '分配交付组', '规格配置', '外网IP段', '通信权限']}
                    activeIndex={1}
                    activeColor={'#0099FF'}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f9',
        paddingTop: 50,
    }
})
```



## Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| label | 步骤内容 | Array   |  `[]` |
| activeIndex | 当前状态 | Number   |  `0` |
| activeColor | 活动状态下的颜色 | Color   |  `blue` |

