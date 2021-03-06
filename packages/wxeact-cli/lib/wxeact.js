/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-09-25
 * @author Liang <liang@maichong.it>
 */
require('colors');
require('shelljs/global');
const co = require('co');
const program = require('caporal');
const pkg = require('../package.json');

function catcher(err) {
  console.error(err);
}

program.version(pkg.version);

program
  .command('create')
  .argument('<name>', '项目名称')
  .alias('c')
  .description('创建新项目')
  .action((args, options) => {
    co(require('./create')(args, options)).catch(catcher);
  });

program
  .command('build')
  .alias('b')
  .description('编译当前项目')
  .option('-c, --catch', '在载入时自动catch所有JS脚本的错误')
  .option('-t, --test', '运行测试脚本')
  .option('-m, --minify', '压缩代码')
  .option('-f, --force', '强制构建，不使用缓存')
  .option('--work-dir [dir]', '工作目录，默认为当前目录')
  .option('--config [file]', '配置文件，默认为wxeact.config.js')
  .option('--src-dir [dir]', '源码目录，默认为工作目录下的src文件夹')
  .option('--dist-dir [dir]', '目标目录，默认为工作目录下的dist文件夹')
  .option('--modules-dir [dir]', 'NPM模块目录，默认为工作目录下的node_modules文件夹')
  .option('--temp-dir [dir]', '临时目录，默认为工作目录下的.build文件夹')
  .option('--ignore-minify-js', 'minify模式下，不压缩JS代码')
  .option('--ignore-minify-page', 'minify模式下，不强力压缩WXSS和WXML代码')
  .action((args, options) => {
    if (!options.minify) {
      if (options.ignoreMinifyJs) {
        console.error('--ignore-minify-js 必须配合 --minify 选项一起使用');
        process.exit();
      }
      if (options.ignoreMinifyPage) {
        console.error('--ignore-minify-page 必须配合 --minify 选项一起使用');
        process.exit();
      }
    }
    co(require('./build')(args, options))
      .then(() => {
        console.log('项目构建完成'.green);
      })
      .catch(catcher);
  });

program
  .command('watch')
  .alias('w')
  .description('编译当前项目并检测文件改动')
  .option('-c, --catch', '在载入时自动catch所有JS脚本的错误')
  .option('-t, --test', '运行测试脚本')
  .option('--work-dir [dir]', '工作目录，默认为当前目录')
  .option('--config [file]', '配置文件，默认为wxeact.config.js')
  .option('--src-dir [dir]', '源码目录，默认为工作目录下的src文件夹')
  .option('--dist-dir [dir]', '目标目录，默认为工作目录下的dist文件夹')
  .option('--modules-dir [dir]', 'NPM模块目录，默认为工作目录下的node_modules文件夹')
  .option('--temp-dir [dir]', '临时目录，默认为工作目录下的.build文件夹')
  .action((args, options) => {
    co(require('./watch')(args, options)).catch(catcher);
  });

program
  .command('minify-page')
  .description('minify page')
  .option('--work-dir [dir]', '工作目录，默认为当前目录')
  .option('--config [file]', '配置文件，默认为wxeact.config.js')
  .option('--src-dir [dir]', '源码目录，默认为工作目录下的src文件夹')
  .option('--dist-dir [dir]', '目标目录，默认为工作目录下的dist文件夹')
  .option('--modules-dir [dir]', 'NPM模块目录，默认为工作目录下的node_modules文件夹')
  .option('--temp-dir [dir]', '临时目录，默认为工作目录下的.build文件夹')
  .action((args, options) => {
    require('./utils');
    require('./config')(options);
    co(require('./minify-page')(args, options)).catch(catcher);
  });

program
  .command('minify-js')
  .description('minify js')
  .option('--work-dir [dir]', '工作目录，默认为当前目录')
  .option('--config [file]', '配置文件，默认为wxeact.config.js')
  .option('--src-dir [dir]', '源码目录，默认为工作目录下的src文件夹')
  .option('--dist-dir [dir]', '目标目录，默认为工作目录下的dist文件夹')
  .option('--modules-dir [dir]', 'NPM模块目录，默认为工作目录下的node_modules文件夹')
  .option('--temp-dir [dir]', '临时目录，默认为工作目录下的.build文件夹')
  .action((args, options) => {
    require('./utils');
    require('./config')(options);
    co(require('./minify-js')(args, options)).catch(catcher);
  });

program.parse(process.argv);
