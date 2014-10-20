import Ember from 'ember';
import Application from '../../app';
import Router from '../../router';
import config from '../../config/environment';

export default function startApp(attrs) {
  var App;

  var attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;
  // attributes = Ember.merge({
  //   // useful Test defaults
  //   rootElement: '#ember-testing',
  //   LOG_ACTIVE_GENERATION:false,
  //   LOG_VIEW_LOOKUPS: false,
  //   LOG_TRANSITIONS: true
  // }, attrs); // but you can override;

  Router.reopen({
    location: 'none'
  });

  Ember.run(function() {
    App = Application.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
  });

  App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

  return App;
}
