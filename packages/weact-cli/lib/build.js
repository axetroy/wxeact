/**
 * Created by axetroy on 17-6-20.
 */
const fs = require('fs-extra');
const path = require('path');
const babel = require('babel-core');

const cwd = process.cwd();
const distPath = path.join(cwd, 'dist');
const srcPath = path.join(cwd, 'src');
const pagePath = path.join(srcPath, 'pages');

module.exports = async function(argv, options) {
  const files = (await fs.readdir(srcPath)) || [];
  const pages = (await fs.readdir(pagePath)) || [];

  pages.forEach(async pageDir => {
    const files = (await fs.readdir(path.join(pagePath, pageDir))) || [];
    files.forEach(async file => {
      const filePath = path.join(pagePath, pageDir, file);
      switch (path.extname(file)) {
        case '.js':
          const code = await fs.readFile(filePath, 'utf8');
          babel.transformFile(filePath, {}, async (err, result) => {
            if (err) {
              console.log(err);
              return;
            }

            await fs.remove(distPath);
            await fs.ensureDir(distPath);
            const targetFilePath = path.join(
              distPath,
              filePath.replace(srcPath, '')
            );
            await fs.ensureFile(targetFilePath);
            await fs.writeFile(targetFilePath, result.code, {
              encoding: 'utf8'
            });
          });
          break;
        default:
      }
    });
  });
};
