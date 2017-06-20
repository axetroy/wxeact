/**
 * Created by axetroy on 17-6-20.
 */

const program = require('caporal');
const pkg = require('../package.json');

program.version(pkg.version).description(pkg.description);

program.command('build').action(function(argv, options) {
  require('./build')(argv, options);
});

program.parse(process.argv);