import Ember from 'ember';

var InitiativeRoute = Ember.Route.extend({

  model: function(params) {
    return this.store.find('initiative', params.initiative_id);
  },

  setupController: function(controller, model) { 
    controller.set('isVisible', false); 
    controller.set('model', model);
  },

  actions: {
    supportIt: function() {
      var initiative = this.get('controller.model');
      initiative.set('isSupported', true);
    },

    removeSupport: function() {
      var initiative = this.get('controller.model');
      initiative.set('isSupported', false);
    },

    clickIt: function() {
      var initiative = this.get('controller.model');
      initiative.set('isClicked', true);
      this.transitionTo('suggestions.new');
    }
  }

});

export default InitiativeRoute;