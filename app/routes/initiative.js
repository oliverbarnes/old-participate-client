import Ember from 'ember';

var InitiativeRoute = Ember.Route.extend({

  model: function(params) {
    return this.store.find('initiative', params.initiative_id);
  },

  actions: {
    supportIt: function() {
      var initiative = this.get('controller.model');
      initiative.set('isSupported', true)
    },

    doItModal: function() {
      return this.send('removeSupport');
    },

    removeSupport: function() {
      var initiative = this.get('controller.model');
      initiative.set('isSupported', false);
      this.transitionTo('initiative');
    },

    openModal: function(alert, model) {
      this.controllerFor(alert).set('model', model);
      this.controllerFor(alert).set('message', 'Are you sure to remove? You cannot make suggestions after removing support!');
      return this.render(alert, {
        into: 'initiative',
        outlet: 'alert'
      });
    },

    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'alert',
        parentView: 'initiative'
      });
    }

    deleteSuggestion: function (suggestion_id) {
      var suggestion_array = this.currentModel._data.suggestions;

      for (var i = 0; i < suggestion_array.length; i++) {
        if (suggestion_array[i].id === suggestion_id) {
          var suggestion = suggestion_array[i];
         }
      }

      suggestion.deleteRecord();
      suggestion.save();
    }

  }
});

export default InitiativeRoute;
