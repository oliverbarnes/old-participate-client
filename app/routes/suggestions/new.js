import Ember from 'ember';

var SuggestionsNewRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('suggestion', params);
  },

  actions: {
    submit: function() {
      var _this = this;
      var suggestion = this.get('controller.model');
      suggestion.save().then(function(model) {
        _this.transitionTo('initiatives.show');
        console.log('model:', model);
        console.log('id:', model.get('id'));
      });
    }
  }
});

export default SuggestionsNewRoute;