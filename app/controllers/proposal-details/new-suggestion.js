import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    endSuggesting(proposal) {
      this.transitionToRoute('proposal-details', proposal);
    }
  }
});
