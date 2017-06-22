# labrador-immutable

Labrador框架不可变组件库。

集成于此包中提供的 `Component` 基类的自定义组件的 `props` 和 `state` 将默认强制为不可变，如此将有效增强代码规范，避免数据流混乱照成的低级错误和调试困难，并能提高Labrador框架性能。

本库的导出和Labrador主库一致，所以在你的代码中直接将

```js
import wx, { PropTypes } from 'labrador';
```

替换为：

```js
import wx, { PropTypes } from 'labrador-immutable';
```

详情请参照：https://github.com/maichong/labrador

本库基于 *seamless-immutable* 对象操作方法请参阅 https://github.com/rtfeldman/seamless-immutable
