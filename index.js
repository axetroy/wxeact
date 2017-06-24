/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-09-26
 * @author Liang <liang@maichong.it>
 */
import { promisify } from '@axetroy/wxapp-promisify';

import Component from './component';
import PropTypes from './prop-types';
import _createPage from './create-page';

const wxeact = {
  wx: { value: promisify(wx) },
  app: {
    get() {
      return getApp();
    }
  },
  currentPages: {
    get() {
      return currentPages();
    }
  }
};

function defineProp(object) {
  let newObj = {};
  for (let attr in object) {
    if (object.hasOwnProperty(attr)) {
      Object.defineProperty(
        newObj,
        Object.assign(object[attr], {
          configurable: false,
          enumerable: false,
          writable: false,
          value: wx
        })
      );
    }
  }
  return newObj;
}

export default defineProp(wxeact);
export { Component, PropTypes, _createPage };
