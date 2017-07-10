/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-18
 * @author Li <li@maichong.it>
 */

import { Component } from 'wxeact';
import immutable from 'seamless-immutable';

wx.immutable = immutable;

const emptyObject = immutable({});

export default class ImmutableComponent extends Component {
  get state() {
    return this._immutable_state || emptyObject;
  }

  set state(nextState) {
    this._immutable_state = immutable(nextState);
  }

  get props() {
    return this._immutable_props || emptyObject;
  }

  set props(nextProps) {
    this._immutable_props = immutable(nextProps);
  }
}
