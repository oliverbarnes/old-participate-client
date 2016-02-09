import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Service.extend({
  store: service(),
  me:    service(),

  // TODO:  remove support from proposal if existing
  delegateSupport: function(proposal, delegateId) {
    let author = this.get('me.content');
    let delegation;
    return this.get('store').find('participant', delegateId).then((delegate)=> {
      // _removeCurrentSupportIfExisting(proposal);
      delegation = this.get('store').createRecord('delegation', {
        proposal: proposal,
        author: author,
        delegate: delegate
      });

      return delegation.save();
    });
  },

  fetchPossibleDelegates(proposal) {
    //query('person', { filter: { name: 'Peter' } })
    return this.get('store').query('participant', {
      filter: {
        exclude_author_of_proposal: proposal.id
      }
    });
  },

  fetchCurrentDelegateIfExisting(proposal) {
    let author = this.get('me.content');
    return this.get('store').queryRecord('delegation', {
      filter: {
        author: author,
        proposal: proposal
      }
    }).then(function(delegation) { 
      return delegation.get('delegate'); 
    });
  }

  //_removeCurrentSupportIfExisting(proposal){}
});
