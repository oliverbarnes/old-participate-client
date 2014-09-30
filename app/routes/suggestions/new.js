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
      var suggestion = this.get('controller.model'),
          initiative = this.modelFor('initiative');
   
      suggestion.save().then(function(model) {
        initiative.get('suggestions').pushObject(model)
          _this.transitionTo('initiative.index');
      });
    }
  }
});

export default SuggestionsNewRoute;