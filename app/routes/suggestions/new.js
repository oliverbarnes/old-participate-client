import Ember from 'ember';

var SuggestionsNewRoute = Ember.Route.extend({
  model: function(params) {
    //debugger;
    return this.store.createRecord('suggestion', params);
  },

  actions: {
    submit: function() {
      var _this = this;
      var suggestion = this.get('controller.model');
      suggestion.save().then(function(model) {
        // model.save();
        _this.transitionTo('suggestions.show', model.get('id'));
        console.log('model:', model);
        console.log('id:', model.get('id'));
        //debugger;
      });
    }
  }
});

export default SuggestionsNewRoute;