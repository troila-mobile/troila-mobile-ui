---
id: input-item
title: InputItem
sidebar_label: InputItem
---

基于react-native的`TextInput`的封装


## 规则
- 包裹在`List`内使用效果更好


## Example

<table>
  <tr>
    <th style="width: 50%;">iOS</th>
    <th style="width: 50%;">Android</th>
  </tr>
  <tr>
    <td style="width: 50%;">
      <center><img src="/docs/assets/inputitem.ios.png"></img></center>
    </td>
    <td style="width: 50%;">
      <center><img src="/docs/assets/inputitem.android.png"></img></center>
    </td>
  </tr>
</table>




## Code

```jsx
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Button,
} from 'react-native';
import { InputItem, TextInput, Text } from 'troila-mobile-ui';


export default class Example extends Component {
    render() {
        return (
            <View style={styles.container}>
                <InputItem
                    placeholder={'请输入内容'}
                    style={{ marginTop: 15, }}
                >
                    请输入内容
                </InputItem>
                <InputItem
                    placeholder={'请输入内容'}
                    style={{marginTop: 15,}}
                >
                    <Image
                        source={require('../assets/list_1.png')}
                        style={{ width: 20 }}
                    />
                </InputItem>
                <InputItem
                    placeholder={'请输入内容'}
                    style={{ marginTop: 15, }}
                >
                    <View>
                        <Image
                            source={require('../assets/list_1.png')}
                            style={{ width: 20 }}
                        />
                        <Text style={{marginVertical: 10,}}>测试内容</Text>
                        <Image
                            source={require('../assets/list_1.png')}
                            style={{ width: 20 }}
                        />
                    </View>
                </InputItem>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f9',
    }
})
```

## Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| style | 外部容器样式 | Style   |  `null` |
| inputStyle | Input样式 | Style   |  `null` |
| placeholder | 没有内容时的文字 | String   |  ` ` |
| other props | `TextInput props` |    |   |


> 更多 react-native `TextInput` 属性请参考 react-native TextInput (http://facebook.github.io/react-native/docs/textinput.html)
