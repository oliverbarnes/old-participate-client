import Ember from 'ember';

var InitiativesIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('initiative');
  }
});

export default InitiativesIndexRoute;