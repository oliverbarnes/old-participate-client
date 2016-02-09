import Ember from 'ember';

const { inject: { service }, get } = Ember;

export default Ember.Component.extend({
  supportDelegator: service('support-delegator'),
  delegates: null,
  currentDelegate: null,

  actions: {
    delegateSupport(selectedDelegateId) { 
      this.get('supportDelegator').delegateSupport(this.get('proposal'), selectedDelegateId).then((delegation) => {
        get(this, 'flashMessages').success('Delegated support option to ' + delegation.get('delegate.name'));
      });
    }
  },

  willInsertElement() {
    let _this = this;
    let proposal = this.get('proposal');

    return this.get('supportDelegator').fetchPossibleDelegates(proposal).then(function(delegates) {
      _this.set('delegates', delegates);

      return _this.get('supportDelegator').fetchCurrentDelegateIfExisting(proposal).then(function(currentDelegate) {
        _this.set('currentDelegate', currentDelegate);
      });
    });
  }
});
