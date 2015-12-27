import Ember from 'ember';
import Support from '../models/support';
import _ from 'lodash/lodash';

const { inject } = Ember;

export default Ember.Service.extend({
  store: inject.service(),
  me: inject.service(),

  toggle: function(proposal) {
    if(this._canSupport(proposal)) {
      this._add(proposal);
    } else {
      this._remove(proposal);
    }
  },

  disabled: function(proposal) {
    return proposal.get('authoredByMe');
  },

  _add: function(proposal) {
    let support = this.container.lookupFactory('model:support').create();
    support.addRelationship('proposal', proposal.id);
    support.addRelationship('author', this.get('me.id'));

    this.get('store').createResource('support', support);

    // TODO: proposal.support-count and proposal.backedByMe don't update
    // cache doesn't seem to be updated
    // looking at EJR's ApplicationAdapter#createResource
    debugger;

    // TODO: if support was previously delegated,
    // remove delegation
  },

  _remove: function(proposal) {
    let support = this.get('me.content').supportFor(proposal);

    this.get('store').deleteResource('support', support.id);
  },

  _canSupport: function(proposal) {
    return proposal.get('backedByMe') || proposal.get('authoredByMe') ? false : true;
  },

  _supportDelegated: function(proposal) {
    return _.any(this.get('me.delegations-given'), { proposal: { id: proposal.get('id') } });
  }
});
