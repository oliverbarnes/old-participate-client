import Ember from 'ember';

var SuggestionsIndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor('initiative').get('suggestions');
  },

  // actions: {
  //   deleteSuggestion: function () {
  //     var suggestion = this.get('model');
  //     suggestion.deleteRecord();
  //     suggestion.save();
  //   }
  // }

});

export default SuggestionsIndexRoute;