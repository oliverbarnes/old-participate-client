import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ParticipateFrontendENV.locationType
});

Router.map(function() {
  this.resource('initiatives', function() {
    this.route('new');
    this.route('show', {path: '/:initiative_id'});
    this.resource('suggestions', {path:'/:initiative_id/suggestions'}, function(){
      this.route('new');
    });
  });
});

export default Router;
