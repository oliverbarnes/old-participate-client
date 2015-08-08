import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', { path: '/' });
  // this.route('activity');
  this.route('dashboard');
  this.route('proposals', function() {
    this.route('new');
    this.route('details', { path: '/:id' });
  });
});

export default Router;
