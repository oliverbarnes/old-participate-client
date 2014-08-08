import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ParticipateFrontendENV.locationType
});

Router.map(function() {
  this.resource('initiatives', function() {
    this.route('new');
    this.route('show', {path: '/:initiative_id'});
    //this.route('show', {path: '/:initiative_id/:suggestion_id'})
  });
});

export default Router;
