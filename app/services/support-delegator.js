import Ember from 'ember';

const { inject: { service }, computed } = Ember;

export default Ember.Service.extend({
  store: service(),
  me:    service(),
  supportSwitch: service('support-switch'),

  delegateSupport(proposal, delegateId) {
    let author = this.get('me.content');
    let delegation;
    return this.get('store').find('participant', delegateId).then((delegate)=> {
      delegation = this.get('store').createRecord('delegation', {
        proposal: proposal,
        author: author,
        delegate: delegate
      });

      if(this.get('me').supporting(proposal)) {
        return delegation.save().then((delegation)=> {
          this.get('supportSwitch').removeSupport(proposal);
          author.get('delegates').pushObject(delegate);
          proposal.get('delegates').pushObject(delegate);
          return delegation;
        });
      } else {
        return delegation.save()
      }
    });
  },

  removeDelegation(proposal) {
    let delegation = this.get('me').delegationOfSupportFor(proposal);
    let delegateId = delegation.get('delegate.id');
    let delegate = this.get('store').peekRecord('participant', delegateId);
    
    return delegation.destroyRecord().then(()=> {
      this.get('me.delegates').removeObject(delegate);
      proposal.get('delegates').removeObject(delegate);
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
