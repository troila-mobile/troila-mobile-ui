---
id: text
title: Text
sidebar_label: Text2
---

基于react-native的`Text`的封装


## 规则
- 统一添加了`allowFontScaling`用来处理系统字体大小

## 示例

```jsx
import React, { Component } from 'react';
import { Text } from 'troila-mobile-ui';

class TextInANest extends Component {
  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}{'\n'}
        </Text>
        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

```

<div class="image-view">
    <img class="simulator" src="/docs/assets/text.ios.png" />
    <img class="simulator" src="/docs/assets/text.android.png" />
</div>

## Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| allowFontScaling | 控制字体是否要根据系统的“字体大小”辅助选项来进行缩放 | Boolean   |  `true` |

> 更多 react-native `Text` 属性请参考 react-native Text (http://facebook.github.io/react-native/docs/text.html)
