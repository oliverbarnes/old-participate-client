import Ember from 'ember';
import Resource from './resource';
import { attr, hasMany } from 'ember-jsonapi-resources/models/resource';
import Support from '../models/support';
import Delegation from '../models/delegation';
import _ from 'lodash/lodash';

const { inject } = Ember;

export default Resource.extend({
  type: 'me',
  service: inject.service('me'),

  name: attr(),

  supports: hasMany('supports'),

  supportFor: (proposal) => {
    return _.first(_.filter(proposal.get('supports'), _.matches(this.get('supports'))));
  },

  toggleSupport: (proposal) => {
    return Support.toggle(proposal);
  },

  delegateSupport: (proposal, delegateId) => {
    return Delegation.createFor(proposal, delegateId);
  },

  supportDelegatedFor: (proposalId) => {
    return _.any(this.get('delegations'), { proposal: { id: proposalId } });
  }
});
