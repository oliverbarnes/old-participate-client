import Ember from 'ember';
import _ from 'lodash/lodash';

const { inject: { service }, isEmpty, RSVP } = Ember;

export default Ember.ObjectProxy.extend({
  isServiceFactory: true,

  session: service(),
  store: service(),

  loadMe() {
    return new RSVP.Promise((resolve, reject) => {
      const accessToken = this.get('session.data.authenticated.access_token');
      if (!Ember.isEmpty(accessToken)) {
        // TODO should be just one call to either /me or /participant/:id
        // curious as to how ESA's dummy app expects a session.data.account_id
        return this.get('store').queryRecord('me', {}).then((me) => {
          return this.get('store').findRecord('participant', me.get('id')).then((participant) => {
            this.set('content', participant);
            resolve();
          }, reject);
        }, reject);
      } else {
        resolve();
      }
    });
  },

  supportFor(proposal) {
    const proposalSupports = proposal.get('supports').toArray();
    const mySupports = this.get('supports').toArray();

    if(isEmpty(proposalSupports) || isEmpty(mySupports)) { return; }

    return _.first(
      _.filter(
        proposalSupports,
        function(support){ return _.matches(mySupports, _.matches({id: support.id})); }
      )
    );
  },

  supporting: function(proposal) {
    return this.supportFor(proposal) ? true : false;
  }
});
