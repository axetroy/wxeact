/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-21
 * @author Liang <liang@maichong.it>
 */

const fs = require('fs-extra');
const path = require('path');

const co = require('co');
const download = require('download-npm-package');

const utils = require('./utils');
const execSync = require('child_process').execSync;

function* create(args, options) {
  const name = args.name;
  let rootDir = path.join(process.cwd(), name);
  if (utils.isDirectory(rootDir)) {
    console.error(`项目创建失败："${rootDir}" 已经存在`.red);
    process.exit();
  }

  console.log('下载初始项目...'.green);
  try {
    yield download({
      arg: 'wxeact-demo@latest',
      dir: path.join(process.cwd(), '.temp')
    });
    console.log('下载完毕'.green);

    // 移动到目的地
    yield fs.move(path.join(process.cwd(), '.temp', 'wxeact-demo'), rootDir, {
      overwrite: true
    });

    // 修改项目名称
    let pkgFile = path.join(rootDir, 'package.json');
    let pkg = yield fs.readJson(pkgFile);
    pkg.name = name;
    yield fs.writeJson(pkgFile, pkg);

    console.log('安装npm依赖'.green);
    execSync(which('yarn') ? 'yarn install' : 'npm install', {
      cwd: rootDir,
      stdio: ['inherit', 'inherit', 'inherit'],
      env: Object.assign(
        {
          NPM_CONFIG_LOGLEVEL: 'http',
          NPM_CONFIG_PROGRESS: 'false',
          NPM_CONFIG_COLOR: 'false'
        },
        process.env
      )
    });
    console.log('构建项目...'.green);
    execSync('wxeact build', {
      cwd: rootDir,
      stdio: ['inherit', 'inherit', 'inherit']
    });
    yield fs.remove(path.join(process.cwd(), '.temp'));
  } catch (err) {
    console.error(err);
    console.log('下载失败'.red);
    return fs.remove(path.join(process.cwd(), '.temp'));
  }
}

module.exports = function(args, options) {
  co(create(args, options)).then(
    () => {},
    error => {
      console.error(error.stack);
      process.exit();
    }
  );
};
