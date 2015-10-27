import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(proposal) {
      return this.store.createResource('proposals', proposal).then((resource) => {
        this.transitionToRoute('internal.proposals.details', resource.get('id'));
      });
    }
  }
});

