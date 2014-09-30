import Ember from 'ember';

var InitiativeIndexController = Ember.ObjectController.extend({

  // isVisible: false,
  // actions: {
  //   toggleShow: function() {
      
  //     this.toggleProperty('isVisible');

  //     if(this.isVisible) {
  //       this.transitionToRoute('suggestions.index');

  //     } else {
  //       this.transitionToRoute('initiative.index');
  //     }
  //   }
  // }

  duplicate: function() {
    console.log('in duplicate');
    debugger;
    //this.controllerFor('initiatives').set('suggestionTitle', this.controllerFor('suggestion').content._data.title);
  }

});

export default InitiativeIndexController;