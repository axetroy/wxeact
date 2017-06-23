import wx from 'wxeact';
import http from 'wxapp-http/index';

Object.defineProperty(wx, 'http', {
  configurable: false,
  enumerable: false,
  writable: false,
  value: http
});

export default http;
