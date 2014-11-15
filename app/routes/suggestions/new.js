import Ember from 'ember';

var SuggestionsNewRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    if (!this.controllerFor('initiative').get('isSupported')) {
      this.transitionTo('initiative');
    }
  },

  model: function(params) {
    return this.store.createRecord('suggestion', params);
  },

  actions: {
    submit: function() {
      var _this = this;
      var initiative = this.modelFor('initiative');
      var suggestion = this.store.createRecord('suggestion', {
            details: this.controller.get('details')
      });
      suggestion.save().then(function(model) {
        initiative.get('suggestions').then(function(suggestions) {
          suggestions.pushObject(suggestion);
        });
        _this.transitionTo('initiative.index');
      });
    }
  }
});

export default SuggestionsNewRoute;