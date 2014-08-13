import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ParticipateFrontendENV.locationType
});

Router.map(function() {
  this.resource('initiatives', function() {
    this.route('new'); // /initiatives/new
    this.route('show', {path: '/:initiative_id'}); // /initiatives/1
    this.resource('suggestions', {path: '/:initiative_id/suggestions'}, function() {
      this.route('new'); // /initiatives/1/suggestions/new
      this.route('show', {path: '/:suggestion_id'}); // /initiatives/1/suggestions/100
    });
  });
});

export default Router;