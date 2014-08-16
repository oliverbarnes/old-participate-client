import Ember from 'ember';

var SuggestionsRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor('initiative').get('suggestions');
  }
});

export default SuggestionsRoute;