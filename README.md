## wxeact

基于微信小程序框架[labrador](https://github.com/maichong/labrador)的二次开发

** 开发中 **

> 因为labrador目前已处于无人维护状态，但是路还在继续
> fork原项目来维护，成本有点高，而且里面有很多代码看不懂
> 所以干脆开一个新项目，精简掉一些没必要的，整理框架逻辑

## 特性

> 集成自labrador

- [x] 使用Labrador框架可以使微信开发者工具支持加载海量NPM包
- [x] 支持ES6/7标准代码，使用async/await能够有效避免回调地狱
- [x] 组件重用，对微信小程序框架进行了二次封装，实现了组件重用和嵌套
- [x] 可集成Redux，使用Redux数据流控制，让项目逻辑清晰可维护
- [ ] 可集成dva
- [ ] 队列化http请求, 去掉微信限制的最大并发数量
- [x] 自动持久化数据，支持redux-persist自动将运行数据保存
- [x] 自动化测试，非常容易编写单元测试脚本，不经任何额外配置即可自动化测试
- [x] Flow.js强类型检查，编写更加安全稳定的代码
- [x] 使用Editor Config及ESLint标准化代码风格，方便团队协作
- [x] 强力压缩代码，尽可能减小程序体积，让你在2M的限制内做更多的事
- [x] promisify微信所有API，使用Async后缀的API则返回promise

## 如何使用

```bash
npm install wxeact-cli -g

npm create wxeact-app

cd ./wxeact-app

npm start
```

## 致谢

感谢[labrador](https://github.com/maichong/labrador)框架作者[liangxingchen](https://github.com/liangxingchen)的源代码
