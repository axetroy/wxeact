import { setStore } from 'wxeact-redux';
import store from './redux';

if (__DEV__) {
  console.info('当前为开发环境');
}

// 向wxeact-redux注册store
setStore(store);

export default class {
  async onLaunch() {
    console.info('App 启动...');
  }
}
