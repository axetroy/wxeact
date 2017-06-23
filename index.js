/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-09-26
 * @author Liang <liang@maichong.it>
 */
import promisify from 'wxapp-promisify';

import Component from './component';
import PropTypes from './prop-types';
import _createPage from './create-page';

const labrador = {
  wx,
  ...promisify(wx),
  get app() {
    return getApp();
  },
  get currentPages() {
    return getCurrentPages();
  }
};

export default labrador;
export { Component, PropTypes, _createPage };
