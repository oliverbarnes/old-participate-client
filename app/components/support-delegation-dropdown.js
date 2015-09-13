import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delegateSupport: function(participantName) {
      const flashMessages = Ember.get(this, 'flashMessages');
      flashMessages.success('Delegated support option to Easier Name');
    }
  }
});
