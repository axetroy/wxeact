# wxeact-redux

[wxeact](https://github.com/axetroy/wxeact) 版本的Redux连接库。

使用示例请查看 [wxeact Demo](https://github.com/axetroy/wxeact)

### 安装

```
npm install wxeact-redux --save
# of if you are using yarn
yarn add wxeact-redux
```

### API

##### setStore(store)

设置当前项目的Redux store，请在项目初始化时调用，例如

```js
// src/app.js

import { setStore } from 'wxeact-redux';
import store from './redux';

// 向wxeact-redux注册store
setStore(store);

export default class {
  onLaunch() {
  }
}
```

##### getStore()

获取当前项目的Redux store,必须在项目初始化时调用`setStore()`后此方法才能正常运行。

##### connect([mapStateToProps], [mapDispatchToProps], [mergeProps])

将Redux store 中的 state绑定到指定wxeact组件。

参数：
* `[mapStateToProps(state): stateProps] (Function)`: 如果定义该参数，组件将会监听 Redux store 的变化。任何时候，只要 Redux store 发生改变，`mapStateToProps`函数就会被调用。该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并。如果你省略了这个参数，你的组件将不会监听 Redux store。
* `[mapDispatchToProps(dispatch): dispatchProps] (Function)`: 该参数是一个函数，如果定义该参数，该函数将接收一个 `dispatch `函数，然后由你来决定如何返回一个对象，这个对象通过 `dispatch` 函数与 action creator 以某种方式绑定在一起（提示：你也许会用到 Redux 的辅助函数 `bindActionCreators()`）。如果你省略这个 `mapDispatchToProps` 参数，默认情况下，`dispatch` 会注入到你的组件 props 中。
* `[mergeProps(stateProps, dispatchProps, ownProps): props] (Function)`: 如果指定了这个参数，`mapStateToProps()` 与 `mapDispatchToProps()` 的执行结果和组件自身的 props 将传入到这个回调函数中。该回调函数返回的对象将作为 props 传递到被包装的组件中。你也许可以用这个回调函数，根据组件的 props 来筛选部分的 state 数据，或者把 props 中的某个特定变量与 action creator 绑定在一起。如果你省略这个参数，默认情况下返回 `Object.assign({}, ownProps, stateProps, dispatchProps)` 的结果。

使用举例：

```js
import wx, { Component, PropTypes } from 'wxeact-immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'wxeact-redux';
import * as todoActions from '../../redux/todos';

const { array, func } = PropTypes;

class Index extends Component {
  static propTypes = {
    todos: array,
    removeTodo: func,
    restoreTodo: func,
    createTodo: func,
    finishTodo: func
  };
}

export default connect(
  ({ todos }) => ({ todos }),
  (dispatch) => bindActionCreators({
    createTodo: todoActions.create,
    removeTodo: todoActions.remove,
    finishTodo: todoActions.finish,
    restoreTodo: todoActions.restore,
  }, dispatch)
)(Index);
```

#### 与react-redux的差异

* wxeact-redux不提供 `<Provider/>` 请使用 `setStore()` 代替。
* `connect` 函数的 `mapStateToProps` 和 `mapDispatchToProps` 参数回调函数暂时不支持第二个参数 `ownProps`。
* `connect` 函数没有第四个参数 `options`。


