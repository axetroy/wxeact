import Component from './src/component';
import Proptype from './src/prop-type';

const weact = {
  wx,
  get app() {
    return getApp();
  },
  get getCurrentPage() {
    return getCurrentPage();
  }
};

export default weact;
export { Component, Proptype };
