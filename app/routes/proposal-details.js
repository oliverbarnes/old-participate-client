import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.queryRecord('proposal', {
      id: params.proposal_id,
      include: 'author,supports,delegations,delegates'
    });
  }
});
