/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-09-26
 * @author Liang <liang@maichong.it>
 */
import wx from '@axetroy/wxapp-promisify';

import Component from './component';
import PropTypes from './prop-types';
import _createPage from './create-page';

const wxeact = {
  ...wx,
  get app() {
    return getApp();
  },
  get currentPages() {
    return currentPages();
  }
};

export default wxeact;
export { Component, PropTypes, _createPage };
