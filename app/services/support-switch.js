import Ember from 'ember';
import Support from '../models/support';
import _ from 'lodash/lodash';

const { inject: { service }, computed } = Ember;

export default Ember.Service.extend({
  store: service(),
  me:    service(),

  toggleSupport(proposal) {
    if(this._canSupport(proposal)) {
      this._add(proposal);
    } else {
      this._remove(proposal);
    }
  },

  disabled(proposal) {
    return proposal.get('authoredByMe');
  },

  _add(proposal) {
    let support = this.container.lookupFactory('model:support').create();
    support.addRelationship('proposal', proposal.id);
    support.addRelationship('author', this.get('me.id'));

    this.get('store').createResource('support', support);

    this._incrementCache(proposal, support);

    // TODO: if support was previously delegated,
    // remove delegation
  },

  _remove(proposal) {
    let support = this.get('me.content').supportFor(proposal);

    this.get('store').deleteResource('support', support.id);

    this._decrementCache(proposal, support);
  },

  _canSupport(proposal) {
    return proposal.get('backedByMe') || proposal.get('authoredByMe') ? false : true;
  },

  _supportDelegated(proposal) {
    return _.any(this.get('me.delegations-given'), { proposal: { id: proposal.get('id') } });
  },

  // TODO: figure out why EJR's caching isn't handling this automatically
  _incrementCache(proposal, support) {
    this.get('me.relationships.supports.data').pushObject(support);
    proposal.get('relationships.supports.data').pushObject(support);
    proposal.set('support-count', proposal.get('support-count') + 1);
  },

  _decrementCache(proposal, support) {
    this.get('me.relationships.supports.data').removeObject(support);
    proposal.get('relationships.supports.data').removeObject(support);
    proposal.set('support-count', proposal.get('support-count') - 1);
  }
});
