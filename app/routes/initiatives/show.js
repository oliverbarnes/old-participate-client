import Ember from 'ember';

var InitiativesShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('initiative', params.initiative_id);
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
      initiative.set('isSuggested', true)
    }
  }
});

export default InitiativesShowRoute;