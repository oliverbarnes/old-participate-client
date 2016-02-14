import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Service.extend({
  store: service(),
  me:    service(),

  toggleSupport(proposal) {
    if(this._canSupport(proposal)) {
      this._giveSupport(proposal);
    } else {
      this.removeSupport(proposal);
    }
  },

  disabled(proposal) {
    return proposal.get('authoredByMe');
  },

  removeSupport(proposal) {
    let support = this.get('me').supportFor(proposal);

    return support.destroyRecord();
  },

  // TODO: if support was previously delegated,
  // remove delegation
  _giveSupport(proposal) {
    let author = this.get('me.content');
    let support = this.get('store').createRecord('support', {
      proposal: proposal,
      author: author
    });

    return support.save();
  },

  _canSupport(proposal) {
    return proposal.get('backedByMe') || proposal.get('authoredByMe') ? false : true;
  }
});
