import Ember from 'ember';

var SuggestionsNewRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('suggestion', params);
  },

  actions: {
    submit: function(suggestion) {
      var _this = this;
      var initiative = this.modelFor('initiative');
      var suggestion = this.store.createRecord('suggestion', { 
          details: this.controller.content._attributes.details,
          initiative: initiative
        });
      debugger;
      suggestion.save().then(function(model) {
        _this.transitionTo('suggestions');
      });
    }
  }
});

export default SuggestionsNewRoute;