## wxeact

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/wxeact.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/axetroy/weact.svg?branch=master)](https://travis-ci.org/axetroy/wxeact)
[![Dependency](https://david-dm.org/axetroy/wxeact.svg)](https://david-dm.org/axetroy/wxeact)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/wxeact.svg)](https://badge.fury.io/js/wxeact)

基于微信小程序框架[labrador](https://github.com/maichong/labrador)的二次开发

**Developing... Not for production yet**

> 因为labrador目前已处于无人维护状态，但是路还在继续

> fork原项目来维护，成本有点高，而且里面有很多代码看不懂

> 所以干脆开一个新项目，精简掉一些没必要的，整理框架逻辑

> 新的框架，新的开始，没有历史包袱

## 特性

> 继承自自labrador

- [x] 使用Labrador框架可以使微信开发者工具支持加载海量NPM包
- [x] 支持ES6/7标准代码，使用async/await能够有效避免回调地狱
- [x] 组件重用，对微信小程序框架进行了二次封装，实现了组件重用和嵌套
- [x] 可集成Redux，使用Redux数据流控制，让项目逻辑清晰可维护
- [x] 自动持久化数据，支持redux-persist自动将运行数据保存
- [x] 自动化测试，非常容易编写单元测试脚本，不经任何额外配置即可自动化测试
- [x] Flow.js强类型检查，编写更加安全稳定的代码
- [x] 使用Editor Config及ESLint标准化代码风格，方便团队协作
- [x] 强力压缩代码，尽可能减小程序体积，让你在2M的限制内做更多的事

### 与labrador的区别

- [x] promisify微信所有API，使用Async后缀的API则返回promise
- [ ] 可集成dva
- [x] 队列化http请求, 去掉微信限制的最大并发数量
- [x] 精简掉polyfill(自从2017.03.28更新后，支持绝大部分ES6 API，[查看详情](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/details.html#ES6-APi-支持情况))
- [x] JPG/PNG/SVG/GIF图片压缩
- [ ] 压缩XML，JSON文件
- [x] 精简初始化的TODO项目, 轻装

## 如何使用

```bash
npm install wxeact-cli -g

wxeact create wxeact-app

cd ./wxeact-app

npm start
```

## 贡献代码

```bash
git clone https://github.com/axetroy/wxeact.git
cd wxeact
```

## 致谢

感谢[labrador](https://github.com/maichong/labrador)框架作者[liangxingchen](https://github.com/liangxingchen)的源代码

## 开源协议

遵循[labrador](https://github.com/maichong/labrador)框架的开源协议

> 本项目依据MIT开源协议发布，允许任何组织和个人免费使用。
