/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-09-26
 * @author Liang <liang@maichong.it>
 */

import Component from './component';
import PropTypes from './prop-types';
import _createPage from './create-page';

function promisify(wxx) {
  wxx = {...wxx};
  for (let attr in wxx) {
    if (wxx.hasOwnProperty(attr) && typeof wxx[attr] === 'function') {
      if (/sync$/.test(attr)) {
        // skip over the sync method
      }
      if (wxx[attr + 'Async']) {
        console.warn(`${attr + 'Async'} have been defined in ${wxx}`)
      } else {
        wxx[attr + 'Async'] = function asyncFunction(argv = {}) {
          return new Promise(function (resolve, reject) {
            wxx[attr].call(wxx, {
              ...argv,
              ...{
                success(res){
                  resolve(res);
                },
                fail(err){
                  reject(err);
                }
              }
            })
          })
        };
      }
    }
  }
  return wxx;
}

const labrador = {
  // 原始wx对象
  wx,
  ...promisify(wx),
  // getApp() 优雅的封装
  get app() {
    return getApp();
  },

  // getCurrentPages() 优雅的封装
  get currentPages() {
    return getCurrentPages();
  }
};

export default labrador;
export { Component, PropTypes, _createPage };
