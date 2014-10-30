import Ember from 'ember';

var EditController = Ember.ObjectController.extend({

  actions: {
    cancel: function() {
      this.get('model').rollback();
      return this.send('closeEdit');
    },

    update: function() {
      return this.send('closeEdit');
    }
  }

});

export default EditController;