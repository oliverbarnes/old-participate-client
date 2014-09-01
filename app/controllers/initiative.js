import Ember from 'ember';

var InitiativeIndexController = Ember.ObjectController.extend({

  isVisible: false,
  actions: {
    toggleShow: function() {
      
      this.toggleProperty('isVisible');

      if(this.isVisible) {
        this.transitionToRoute('suggestions.index');

      } else {
        this.transitionToRoute('initiative.index');
      }
    }
  }

});

export default InitiativeIndexController;