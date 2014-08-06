import Ember from 'ember';

var InitiativesShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('initiative', params.initiative_id);
  },

  actions: {
    supportIt: function() {
      console.log('supported!');
      var initiative = this.get('controller.model');
      initiative.set('isSupported', true)
    },

    removeSupport: function() {
      console.log('NOT supported!');
      var initiative = this.get('controller.model');
      initiative.set('isSupported', false)
    }
  }

});

export default InitiativesShowRoute;