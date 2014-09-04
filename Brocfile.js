/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
// Mocha support
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp({
  name: require('./package.json').name,

  minifyCSS: {
    enabled: true,
    options: {}
  },

  sassOptions: {
    includePaths: require('node-neat').with('app/styles/bitters')
  },

  getEnvJSON: require('./config/environment')
});

// Mocha support: JSHint tests are current QUnit and fail to run
app.hinting = false;
//

// Use this to add additional libraries to the generated output files.
app.import('vendor/ember-data/ember-data.js');

app.import('vendor/ember-validations/index.js');

// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});

// more Mocha support
var mochaFiles = pickFiles('vendor', {
    srcDir: '/mocha',
    files: [
      'mocha.css', 'mocha.js'
    ],
    destDir: '/assets/'
  });

var chaiFiles = pickFiles('vendor', {
    srcDir: '/chai',
    files: [
      'chai.js'
    ],
    destDir: '/assets/'
  });

var sinonFiles = pickFiles('vendor', {
    srcDir: '/sinonjs-built/pkg',
    files: [
      'sinon.js'
    ],
    destDir: '/assets/'
  });

var sinonChaiFiles = pickFiles('vendor', {
    srcDir: '/sinon-chai/lib',
    files: [
      'sinon-chai.js'
    ],
    destDir: '/assets/'
  });

var mochaAdapter = pickFiles('vendor', {
    srcDir: '/ember-mocha-adapter',
    files: [
      'adapter-qunit.js'
    ],
    destDir: '/assets/'
  });

var testTrees = mergeTrees([mochaFiles, mochaAdapter, chaiFiles, sinonFiles, sinonChaiFiles], {
     overwrite: true
});

var fullTree = mergeTrees([app.toTree(), testTrees]);

module.exports = fullTree;
//