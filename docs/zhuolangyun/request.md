---
id: request
title: request
sidebar_label: request (请求类)
---

请求类
基于react-native的`fetch`的封装
> `log`参数 基于`troila-mobie-tools@1.1.2`版本，如果低于此版本请升级
>基于`troila-mobie-tools@1.1.0`版本，如果低于此版本请升级

## 规则
- 全部基于`Promise`
- 需要和外部类配合使用
- 必须要先调用`initLibraryConfigFunc`完成初始化
- 请求结果以`Promise`结果返回



## 先在APP_ROOT_NETWORK_CONFIG中配置接口信息

```jsx
// utils/APP_ROOT_NETWORK_CONFIG.js
const ROOT_URL = `${domain}/tdv2/`;
export const API_URL = {
  // ...other api
	MOBILEDOLOGIN: {
		domain: ROOT_URL,
		apiUrl: 'mobile/doLogin',
		author: '会飞的鱼',
		fetchUrl: `${ROOT_URL}mobile/doLogin`,
		remark: '用户名和密码验证',
		method: 'POST',
		showLoading: true,
		needLogin: false,
		developer: boy1,
		mock: false,
        mockFetchUrl: `${MOCK_ROOT_URL}Adv/lists`,
        log: true
	},
}
```



## API_URL key

属性 | 说明 | 示例 
----|-----|------
| apiName | 接口名全大写，去除`/`的拼合单例字符 | `MOBILEDOLOGIN` 
| domain | 接口域名 |  `ROOT_URL`
| apiUrl | 接口地址 | `mobile/doLogin`   
| author | 接口作者 | `会飞的鱼`   
| fetchUrl | 请求时调用的真实地址 | `${ROOT_URL}mobile/doLogin`   
| remark | 接口备注 | `用户名和密码验证`   
| method | 请求方式 | `GET`,`POST`   
| showLoading | 是否在请求的时候显示loading | `true`   
| needLogin | 在请求前是否验证需要登陆 | `false`   
| developer | 联调接口的开发者 | `boy1`   
| mock | 是否开启mock模式 | `false`   
| mockFetchUrl | mock模式请求的地址 | `${MOCK_ROOT_URL}Adv/lists`   
| log | 是否开启请求日志输出 | `false`   

## 再使用request发起请求

```jsx
import React, { Component } from 'react';
import {
    Button,
} from 'react-native';
import { request } from "../../utils";

class Example extends Component {
    render() {
        return (
            <Button
                title={'登陆'}
                onPress={
                  async()=>{
                    const e = await request.fetch({
                        apiName: 'MOBILEDOLOGIN',
                        params: {
                            device: 'mobile'
                        },
                        headers: {
                            Tusername: 'zhangsan',
                            Tpassword: 'a123456'
                        }
                    })
                    console.log(e);
                    // {"isLogin": 1}
                }}
            />
        );
    }
}
```


## request.fetch api

属性 | 说明 | 示例 | 是否必填 
----|-----|------ |------
| apiName | 在API_URL中定义的接口名(key键名) | `MOBILEDOLOGIN`  |  必填
| params | body参数 |  `{device: 'mobile'}`  |  非必填
| headers | 额外的headers | `{Tusername: 'zhangsan',Tpassword: 'a123456'}`   |  非必填