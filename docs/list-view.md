---
id: ListView
title: ListView
sidebar_label: ListView
---

基于react-native的`FlatList`的封装
> 注：暂时不要声明自`troila-mobile-ui`，优先声明自本地的`components/theme`中


## 规则
- 支持`mock`来处理渲染
- 统一添加了`RefreshControl`用来刷新效果
- 支持`上拉加载`，`下拉刷新`
- api简洁高效
- 注：请求封装已完成，使用中有问题请随时沟通


## Example

<table>
  <tr>
    <th style="width: 50%;">iOS</th>
    <th style="width: 50%;">Android</th>
  </tr>
  <tr>
    <td style="width: 50%;">
      <center><img src="/docs/assets/listview.ios.png"></img></center>
    </td>
    <td style="width: 50%;">
      <center><img src="/docs/assets/listview.android.png"></img></center>
    </td>
  </tr>
</table>




## Code

```jsx
import React, { Component } from 'react';
import { Text } from 'react-native';
import { ListView } from 'troila-mobile-ui';



class ListViewInANest extends Component {
  render() {
    if(mock){
      return (
        <ListView
          mockData={[
              {
                  id:1,
                  text: 1,
              }, {
                  id: 2,
                  text: 2,
              }, {
                  id: 3,
                  text: 3,
              }
          ]}
          keyExtractor={(e)=>`${e.id}`}
          renderItem={({ item})=>{
              return <Text>{item.text} testData</Text>
          }}
        />
      )
    }else{
      return (
        <ListView
          apiName={'LISTGETALIVEMACHLISTWITHPAGEANDINTEGRATE'}
          fetchParams={{realName:'xxx'}}
          numColumns={2}
          keyExtractor={(e) => `${e.funcId}`}
          renderItem={this.renderItem}
        />
      )
    }
  }
}


```



## Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| apiName | 请求接口的标识，同`request`的apiName一致 | String |  `null` |
| fetchParams | 请求参数(注：默认配置分页参数，不需要手动添加) | Object |  `{}` |
| listEmptyComponent | 空数据的展示组件 | Element   |  `View` |
| getNativeData | 获取请求返回的数据 | Function   |  `()=>{}` |
| onRefresh | 刷新触发 | Function   |  `()=>{}` |
| contentContainerStyle | 容器样式 | Style   |  `{}` |
| style | 最外层样式 | Style   |  `{}` |
| changeDataStructurese | 改变数据源 | Functon   |  `()=>{}` |
| mockData | mock数据 | Array   |  null |
| renderItem | 渲染cell | Function   |  null |
| keyExtractor | 指定key | Function   |  null |
| closeRefreshing | 关闭下拉刷新 | Boolean   |  `false` |
| other props | `FlatList props` |    |   |

> 更多 react-native `FlatList` 属性请参考 react-native FlatList (http://facebook.github.io/react-native/docs/flatlist.html)
