import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    save(resource) {
      this.store.createResource('proposals', resource).then((resp) => {
        //FIXME: When passing the resp direclty to proposal details, its not resolving the id resulting to '/proposals/undefined'
        //Note, This is only happened in acceptance test.
        let body = JSON.parse(resp._bodyInit);
        resource.set('id', body.data.id);
        this.transitionTo('proposals.details', resource);
      });
    }
  },

  model() {
    return this.container.lookup('model:proposals').create({
      isNew: true
    });
  }
});
