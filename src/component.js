/**
 * Created by axetroy on 17-6-20.
 */
import deepEqual from 'deep-equal';

export default class Component {
  constructor(props = {}) {
    this.props = Object.assign({}, props);
    this._setStateQueue = []; // 设置state的异步队列
    this._setStateTimer = null; // setState的定时器
  }

  setState(nextState, callback) {
    this._setStateQueue.push(nextState);
    callback && this._setStateCallbacks.push(callback);

    if (this._setStateTimer) return;

    this._setStateTimer = setTimeout(() => {
      this._setStateTimer = 0;
      let state = this.state;
      let stateChanged = false; // 更改后做一次对比，状态如果更改，才刷新视图
      this._setStateQueue.forEach(item => {
        // 如果两个state相等, 则不需要刷新视图
        if (deepEqual(state, item)) return;
        stateChanged = true;
        state = Object.assign({}, state, item);
      });

      this.state = state;
      this._setStateQueue = []; // 清空队列
      this._setStateCallbacks.forEach(fn => fn()); // 执行所有回调函数
      this._setStateCallbacks = []; // 清空回调函数队列

      if (!stateChanged) return; // 如果state没有改变，则不刷新视图

      this._update(state); // 刷新视图
    }, 0);
  }
  // init component
  // call life circle
  _init() {}
  _update(state = {}) {
    this.setData(state);
  }
}

class Index extends Component {
  constructor(props) {
    super(props);
  }
  onLoad() {

  }
}
