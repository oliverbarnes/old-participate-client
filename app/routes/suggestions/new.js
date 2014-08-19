import Ember from 'ember';

var SuggestionsNewRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('suggestion', params);
  },

  actions: {
    submit: function() {
      var _this = this;
      var initiative = this.modelFor('initiative');
      var suggestion = this.store.createRecord('suggestion', {
            //dirty hack, while figuring out why EasyForm isn't 
            // passing the params to submit()
            details: this.controller.content._attributes.details
      });
      suggestion.save().then(function(model) {
        initiative.get('suggestions').then(function(suggestions) {
          suggestions.pushObject(suggestion);
        });
        _this.transitionTo('suggestions');
      });
    }
  }
});

export default SuggestionsNewRoute;