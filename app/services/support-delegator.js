import Ember from 'ember';

const { inject: { service }, computed } = Ember;

export default Ember.Service.extend({
  store: service(),
  me:    service(),
  supportSwitch: service('support-switch'),

  // TODO:  remove support from proposal if existing
  delegateSupport: function(proposal, delegateId) {
    let author = this.get('me.content');
    let delegation;
    return this.get('store').find('participant', delegateId).then((delegate)=> {
      delegation = this.get('store').createRecord('delegation', {
        proposal: proposal,
        author: author,
        delegate: delegate
      });

      if(this.get('me').supporting(proposal)) {
        return delegation.save().then(()=> {
          return this.get('supportSwitch').removeSupport(proposal);
        });
      } else {
        return delegation.save();
      }
    });
  },

  fetchPossibleDelegates(proposal) {
    return this.get('store').query('participant', {
      filter: {
        exclude_author_of_proposal: proposal.id
      }
    });
  }
});
