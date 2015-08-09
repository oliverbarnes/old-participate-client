import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(proposal) {
      this.store.createResource('proposals', proposal).then((resource) => {
        this.transitionToRoute('proposals.details', resource.get('id'));
      });
    }
  }
});

