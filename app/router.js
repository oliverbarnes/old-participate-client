import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('initiatives', function() {
    this.route('new');
    this.resource('initiative', { path: ':initiative_id' }, function() {
      this.resource('suggestions', function() {
        this.route('new'); 
      });
    }); 
  });
  this.resource('issues', { path: '/issues' }, function() {
    this.route('issue', { path: '/:issue_id' });
  });
});

export default Router;
