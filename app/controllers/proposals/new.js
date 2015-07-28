import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(proposal) {
      this.store.createResource('proposals', proposal).then((resp) => {
        this.transitionToRoute('proposals.details', resp);
      });
    }
  }
});

