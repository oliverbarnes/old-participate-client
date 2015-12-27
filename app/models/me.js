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
  store: inject.service(),
  supportSwitch: inject.service('support-switch'),

  cacheDuration: /* minutes */ 100 * /* seconds */ 60 * /* milliseconds */ 1000,

  name: attr(),

  supports: hasMany('supports'),
  'delegations-given': hasMany({ resource: 'delegations-given', type: 'delegation' }),

  delegateSupport: function(proposal, delegateId) {
    let delegation = Delegation.create();
    delegation.addRelationship('proposal', proposal);
    delegation.addRelationship('delegate', delegateId);
    delegation.addRelationship('author', this);

    return this.get('store').createResource('delegation', delegation);
  },

  supportFor: function(proposal) {
    const proposalSupports = proposal.get('relationships.supports.data');
    const mySupports = this.get('relationships.supports.data');

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
