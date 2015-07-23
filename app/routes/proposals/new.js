import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    save(resource) {
      this.store.createResource('proposals', resource).then((proposal) => {
        this.transitionTo('proposals.details', proposal);
      });
    }
  },

  model() {
    return this.container.lookup('model:proposals').create({
      isNew: true
    });
  }
});
