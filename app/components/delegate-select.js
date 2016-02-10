import Ember from 'ember';

const { inject: { service }, get, computed } = Ember;

export default Ember.Component.extend({
  supportDelegator: service('support-delegator'),
  me: service(),
  possibleDelegates: null,

  actions: {
    delegateSupport(selectedDelegateId) { 
      this.get('supportDelegator').delegateSupport(this.get('proposal'), selectedDelegateId).then((delegation) => {
        get(this, 'flashMessages').success('Delegated support option to ' + delegation.get('delegate.name'));
      });
    }
  },

  currentDelegate: computed('proposal.currentDelegate', function() {
    return this.get('proposal.currentDelegate');
  }),

  willInsertElement() {
    let _this = this;
    let proposal = this.get('proposal');

    return this.get('supportDelegator').fetchPossibleDelegates(proposal).then(function(delegates) {
      _this.set('possibleDelegates', delegates);
    });
  }
});
