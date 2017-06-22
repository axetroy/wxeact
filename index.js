/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-09-26
 * @author Liang <liang@maichong.it>
 */

import Component from './component';
import PropTypes from './prop-types';
import _createPage from './create-page';

const labrador = {
  // 原始wx对象
  wx,
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
