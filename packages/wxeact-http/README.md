# wxeact-http

wxeact框架的http模块

规避微信的最大http并发数量为5个的限制

基于[wxapp-http](https://github.com/axetroy/wxapp-http)

## 安装

```bash
npm install wxeact-http --save
# or if you are using yarn
yarn add wxeact-http
```

## 使用

```javascript
import http from 'wxeact-http';

http.get(`http://www.google.com`)
  .then(function(res){
    console.log(res);
  })
  .catch(function(err){
    console.error(err);
  })
```

详情请看[wxapp-http API](https://github.com/axetroy/wxapp-http)

## 开源协议

本项目依据MIT开源协议发布，允许任何组织和个人免费使用。