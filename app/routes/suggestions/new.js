import Ember from 'ember';

var SuggestionsNewRoute = Ember.Route.extend({
  needs: 'initiative',
  initiative: Ember.computed.alias('controllers.initiative.model'),

  model: function(params) {
    //debugger;
    console.log("model.param %o", params);
    return this.store.createRecord('suggestion', params);
  },

  actions: {
    submit: function() {
      var _this = this;
      var suggestion = this.get('controller.model');
      console.log('var suggestion._attributes.details:', suggestion);
      var initiative = this.store.all('initiative');
      //var content = this.controller.content;
      //var initiative = this.modelFor('initiative');
      //debugger;
      console.log('initiative:', initiative);
      //console.log('content:', content);
      console.log('initiative.suggestions:', this.get('initiative.suggestions'));
      //debugger;
      initiative.content.pushObject(suggestion);
      suggestion.save().then(function(model) {
        //_this.transitionTo('suggestions.show', model.get('id'));
        _this.transitionTo('initiatives.show');
        console.log('suggestion model:', model);
        console.log('suggestion id:', model.get('id'));
        console.log('var initiatives:', initiative);
      });
    }
  }
});

export default SuggestionsNewRoute;