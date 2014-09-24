import Ember from 'ember';

var SuggestionsIndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor('initiative').get('suggestions');
  }

});

export default SuggestionsIndexRoute;