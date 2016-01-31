import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  me: service(),

  beforeModel() {
    return this._loadMe();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadMe().catch(() => this.get('session').invalidate());
  },

  _loadMe() {
    return this.get('me').loadMe();
  }
});
