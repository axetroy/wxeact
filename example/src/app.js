import { setStore } from 'wxeact-redux';
import http from 'wxeact-http';

import store from './redux';

if (__DEV__) {
  console.info('当前为开发环境');
}

// 向wxeact-redux注册store
setStore(store);

export default class {
  async onLaunch() {
    function successHandler(res) {
      console.log(res);
    }
    function errorHandler(err) {
      console.error(err);
    }

    // 测试http模块，发送50个请求
    for (let i = 0; i < 50; i++) {
      http
        .get('http://www.baidu.com/?v=' + (i + 1))
        .then(successHandler)
        .catch(errorHandler);
    }

    console.info('App 启动...');
  }
}
