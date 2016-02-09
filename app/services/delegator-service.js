import Ember from 'ember';

const { inject: { service }, computed } = Ember;

export default Ember.Service.extend({
  store: service(),
  me:    service(),

  // TODO:  remove support from proposal if existing
  delegateSupport: function(proposal, delegateId) {
    let author = this.get('me.content');
    let delegation;
    this.get('store').find('participant', delegateId).then(function(){
      // _removeCurrentSupportIfExisting(proposal);
      delegation = this.get('store').createRecord('delegation', {
        proposal: proposal,
        author: author,
        delegate: delegate
      });

      return delegation.save();
    });
  },

  fetchPossibleDelegates() {
    let _this = this;
    return this.get('store').query('participant', {
      filter: {
        exclude_author_of_proposal: _this.get('proposal.id')
      }
    });
  }

  //_removeCurrentSupportIfExisting(proposal){}
});
