import Ember from 'ember';

var InitiativesController = Ember.Route.extend({
  suggestion: function(){
    return this.store.createRecord('suggestion',{
      product: this.get('model')
    });
  }.property('model'),

  actions: {
    createSuggestion: function(){
      var controller = this;
      this.get('suggestion').save().then(function(suggestion){
        controller.get('model.suggestions')
                  .addObject(suggestion);
      });
    }
  }
});

export default InitiativesController;