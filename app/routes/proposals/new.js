import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    save(proposal) {
      this.store.createResource('proposals', proposal).then((resp) => {
        this.transitionTo('proposals.edit', resp);
      }.bind(this));
    }
  },

  model() {
    return this.container.lookup('model:proposals').create({
      isNew: true
    });
  }
});
