import Ember from 'ember';

var InitiativesShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('initiative', params.initiative_id);
    return this.store.createRecord('suggestion');
  },

  actions: {
    supportIt: function() {
      var initiative = this.get('controller.model');
      initiative.set('isSupported', true)
    },

    removeSupport: function() {
      var initiative = this.get('controller.model');
      initiative.set('isSupported', false)
    },

    makeSuggestion: function() {
      var initiative = this.get('controller.model');
      initiative.set('isSuggested', true);
    },

    submit: function() {
      console.log('aaaaaa');
      var initiative = this.get('controller.model');
      initiative.save();
      //initiative.save().then(function(){
      //  this.transitionTo('initiatives.show', model.get('id'));
      //  console.log('hhhhhhh');
      //  });

    }
  }
});

export default InitiativesShowRoute;