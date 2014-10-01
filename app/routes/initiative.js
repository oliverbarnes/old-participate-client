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
      var suggestion_array = this.controller.content._data.suggestions;
      var initiative = this.currentModel;
   
      //get the ids of each Class in suggestion_array
      var id_array = this.controller.content._data.suggestions.getEach('id');

      //find the element in id_array that matches suggestion_id 
      var find_suggestion = id_array.find(function(item, index, self) {
        if (item == suggestion_id) { return true; }
      });

      //use index of find_suggestion in id_array to get the right suggestion in suggestion_array
      var suggestion = suggestion_array[id_array.indexOf(find_suggestion)];

      initiative.get('suggestions').removeObject(suggestion);
      suggestion.deleteRecord();
      suggestion.save();
    }

  }
});

export default InitiativeRoute;
