/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-17
 * @author Liang <liang@maichong.it>
 */

'use strict';

require('colors');
const fs = require('fs');
const path = require('path');
const utils = require('./utils');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
require('shelljs/global');

module.exports = function* minifyJs(from, to) {
  let minifyConfig = {};
  switch (from.ext) {
    case '.svg':
      minifyConfig = {
        use: [
          imageminSvgo({
            plugins: [{ removeViewBox: false }]
          })
        ]
      };
      break;
    case '.gif':
      minifyConfig = { use: [imageminGifsicle()] };
      break;
    case '.jpg':
    case '.png':
      minifyConfig = {
        plugins: [imageminJpegtran(), imageminPngquant({ quality: '65-80' })]
      };
      break;
    default:
  }

  try {
    yield imagemin([from.file], to.dir, minifyConfig);
    console.log(
      'minify image'.green,
      from.relative.blue,
      '->',
      to.relative.cyan
    );
  } catch (err) {
    console.error(
      'minify image error'.red,
      from.relative.blue,
      '->',
      to.relative.cyan
    );
    throw err;
  }
};
