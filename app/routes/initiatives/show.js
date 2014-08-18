import Ember from 'ember';

var InitiativesShowRoute = Ember.Route.extend({

  model: function(params) {
    return this.store.find('initiative', params.initiative_id);
  },

  // setupController: function(controller, model) {
  //   this.controllerFor('suggestion').set('model', model);
  // },

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

export default InitiativesShowRoute;