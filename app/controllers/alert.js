import Ember from 'ember';

var AlertController = Ember.ObjectController.extend({

  actions: {
    cancel: function() {
      return this.send('closeModal');
    },

    yes: function() {
      return this.send('doItModal');
    }
  }

});

export default AlertController;