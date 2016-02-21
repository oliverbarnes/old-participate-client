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
          return this.get('store').queryRecord('participant', { 
            id: me.get('id'),
            include: 'delegations-given,delegates'
          }).then((participant) => {
            this.set('content', participant);
            resolve();
          }, reject);
        }, reject);
      } else {
        resolve();
      }
    });
  },

  // TODO: see comments for supportFor()
  delegationOfSupportFor(proposal) {
    const proposalDelegations = proposal.get('delegations').toArray();
    const myDelegations = this.get('delegationsGiven').toArray();

    if(isEmpty(proposalDelegations) || isEmpty(myDelegations)) { return; }

    return _.first(
      _.filter(
        proposalDelegations,
        function(delegation){ return _.matches(myDelegations, _.matches({id: delegation.id})); }
      )
    );
  },

  delegatingSupportFor(proposal) {
    return this.delegationOfSupportFor(proposal) ? true : false;
  },

  // TODO: could match a support from mySupports based on proposal id instead?
  // then no need to filter proposalSupports
  // (...or would that mean another request to get support relationships?)
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

  supporting(proposal) {
    return this.supportFor(proposal) ? true : false;
  }
});
