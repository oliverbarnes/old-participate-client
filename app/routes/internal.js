import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

const { inject } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  me: inject.service(),

  beforeModel() {
    return this.me.fetch();
  }
});
