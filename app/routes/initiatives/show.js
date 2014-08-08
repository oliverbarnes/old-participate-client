import Ember from 'ember';

var InitiativesShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('initiative', params.initiative_id);
    return this.store.createRecord('initiative');
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
      var _this = this;
      var initiative = this.get('controller.model');
      initiative.save().then(function(model) {
        // model.save();
        _this.transitionTo('initiatives.show', model.get('id'));
      });
    }
  }
});

export default InitiativesShowRoute;