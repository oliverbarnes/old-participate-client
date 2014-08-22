import Ember from 'ember';

var InitiativeIndexRoute = Ember.Route.extend({

  actions: {
    supportIt: function() {
      var initiative = this.get('controller.model');
      initiative.set('isSupported', true)
    },

    removeSupport: function() {
      var initiative = this.get('controller.model');
      initiative.set('isSupported', false)
    }
  }
  
});

export default InitiativeIndexRoute;