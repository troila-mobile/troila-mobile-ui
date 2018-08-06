---
id: text-input
title: TextInput
sidebar_label: TextInput
---

基于react-native的`TextInput`的封装


## 规则
- 修复了ios `clear`的异常
- 统一处理了取消内容的按钮


## Example

<table>
  <tr>
    <th style="width: 50%;">iOS</th>
    <th style="width: 50%;">Android</th>
  </tr>
  <tr>
    <td style="width: 50%;">
      <center><img src="/docs/assets/textinput.ios.png"></img></center>
    </td>
    <td style="width: 50%;">
      <center><img src="/docs/assets/textinput.android.png"></img></center>
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
import { TextInput } from 'troila-mobile-ui';


export default class Example extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor:'#fff',marginTop: 15,padding:15}}>
                    <TextInput
                        inputStyle={{
                            fontSize: 16,
                            color: '#333',
                            height:20,
                            flex:1,
                        }}
                        placeholder={'请输入内容'}
                    />
                </View>
                <TextInput
                    style={{
                        marginTop: 30,
                        height: 30,
                        backgroundColor: '#fff',
                        marginLeft: 15,
                    }}
                    inputStyle={{
                        fontSize: 16,
                        color: '#333',
                        flex: 1,
                    }}
                    placeholder={'请输入内容'}
                    showClearButton={true}
                    onChangeText={(e)=>{
                        console.log(e)
                    }}
                />
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
| showClearButton | 是否显示取消内容按钮 | Boolean   |  `false` |
| style | 外部容器样式 | Style   |  `null` |
| inputStyle | textInput样式 | Style   |  `null` |
| onChangeText | 键盘输入内容时的时间 | Function   |  `()=>{}` |

## Methods

### `clear()`

```javascript
clear();
```

清除文本内容

---

### `isFocused()`

```javascript
isFocused():
```

是否获得焦点

> 更多 react-native `TextInput` 属性请参考 react-native TextInput (http://facebook.github.io/react-native/docs/textinput.html)
