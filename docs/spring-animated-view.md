---
id: spring-animated-view
title: SpringAnimatedView
sidebar_label: SpringAnimatedView
---

弹性动画


## 规则
- 受控组件
- `nativeEvent`必传，用于控制布局


## Example

<table>
  <tr>
    <th style="width: 50%;">iOS</th>
    <th style="width: 50%;">Android</th>
  </tr>
  <tr>
    <td style="width: 50%;">
      <center><img src="/docs/assets/SpringAnimatedView.ios.gif"></img></center>
    </td>
    <td style="width: 50%;">
      <center><img src="/docs/assets/SpringAnimatedView.android.gif"></img></center>
    </td>
  </tr>
</table>




## Code

```jsx
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { SpringAnimatedView } from 'troila-mobile-ui';


export default class Example extends Component {
    state = {
        show: false,
        nativeEvent: null,
    }
    render() {
        const {
            show,
            nativeEvent,
        } = this.state
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center', }}>
                    {
                        [1, 2, 3].map((item, i) => (
                            <Button
                                title={'切换动画'}
                                onPress={({ nativeEvent}) => {
                                    this.setState({
                                        show: !show,
                                        nativeEvent,
                                    })
                                }}
                                style={{ marginTop: 100, }}
                                key={i}
                            />
                        ))
                    }
                </View>
                <SpringAnimatedView
                    show={show}
                    nativeEvent={nativeEvent}
                >
                    <Button
                        title={'切换动画'}
                        onPress={() => {
                            this.setState({
                                show: !show
                            })
                        }}
                    />
                </SpringAnimatedView>
            </View>
        );
    }
}



class Button extends Component {
    render() {
        const {
            title,
            onPress,
            style,
        } = this.props
        return (
            <TouchableOpacity
                style={[styles.button1, style]}
                activeOpacity={1}
                onPress={onPress}
                ref={(e) => { this.button = e }}
            >
                <Text style={styles.text1}>{title}</Text>
            </TouchableOpacity>
        );
    }
    getRef = () => {
        return this.button
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button1: {
        height: 40,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#efefef',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    text1: {
        fontSize: 20,
        color: '#333',
    },
})
```



## Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| show | 是否显示 | Boolean  |  `true` |
| nativeEvent | onPress的参数 | Object |  `null` |

