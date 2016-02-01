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

  // TODO: if support was previously delegated,
  // remove delegation
  _add(proposal) {
    let author = this.get('me.content');
    let support = this.get('store').createRecord('support', {
      proposal: proposal,
      author: author
    });

    support.save();
  },

  _remove(proposal) {
    let support = this.get('me').supportFor(proposal);

    support.destroyRecord();
  },

  _canSupport(proposal) {
    return proposal.get('backedByMe') || proposal.get('authoredByMe') ? false : true;
  }
});
