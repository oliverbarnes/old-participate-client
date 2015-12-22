import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr, hasMany } from 'ember-jsonapi-resources/models/resource';
import Support from '../models/support';
import Delegation from '../models/delegation';
import _ from 'lodash/lodash';

const { inject } = Ember;

export default Resource.extend({
  type: 'me',
  service: inject.service('me'),

  cacheDuration: /* minutes */ 100 * /* seconds */ 60 * /* milliseconds */ 1000,

  name: attr(),

  supports: hasMany('supports'),

  'delegations-given': hasMany({ resource: 'delegations-given', type: 'delegation' }),

  supportFor: function(proposal) {
    return _.first(_.filter(proposal.get('supports'), _.matches(this.get('supports'))));
  },

  toggleSupport: function(proposal) {
    return Support.toggle(proposal);
  },

  delegateSupport: function(proposal, delegateId) {
    return Delegation.createFor(proposal, delegateId);
  },

  delegatedSupportForProposal(proposalId) {
    return _.any(this.get('delegations-given'), { proposal: { id: proposalId } });
  }
});
