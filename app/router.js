import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ParticipateFrontendENV.locationType
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
});

export default Router;