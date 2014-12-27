/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({

  minifyCSS: {
    enabled: true,
    options: {}
  },

  sassOptions: {
    includePaths: require('node-neat').with('app/styles/bitters')
  }

});

// Mocha support: JSHint tests are current QUnit and fail to run
app.hinting = false;
//

// Use this to add additional libraries to the generated output files.
app.import('bower_components/ember-data/ember-data.js');

app.import('bower_components/ember-validations/index.js');

// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('bower_components/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});

module.exports = app.toTree();
