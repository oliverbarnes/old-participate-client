import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onCreated(proposal) {
      this.transitionToRoute('proposal-details', proposal);
    }
  }
});
