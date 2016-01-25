import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      const accessToken = this.get('session.data.authenticated.access_token');
      if (!Ember.isEmpty(accessToken)) {
        return this.get('store').queryRecord('me', {}).then((account) => {
          this.set('account', account);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});
