import Ember from 'ember';

var InitiativeController = Ember.ObjectController.extend({
  actions: {
    // editInitiative: function () {
    //   this.set('isEditing', true);
    // },
    // isEditing: false,
    
    deleteInitiative: function () {
      var initiative = this.get('model');
      initiative.deleteRecord();
      initiative.save();      
    }
  }
});

export default InitiativeController;