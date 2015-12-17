import Ember from 'ember';

const { inject } = Ember;

export default Ember.Controller.extend({
  actions: {
    save(proposal) {
      return this.store.createResource('proposals', proposal).then((resource) => {
        this.transitionToRoute('internal.proposals.details', resource.get('id'));
      });
    }
  }
});

