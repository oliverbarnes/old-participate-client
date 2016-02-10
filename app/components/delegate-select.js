import Ember from 'ember';
import _ from 'lodash/lodash';

const { inject: { service }, get, computed, isEmpty } = Ember;

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

  currentDelegate: computed('proposal.delegates.[]', 'possibleDelegates.[]', function() {
    const proposalDelegates = this.get('proposal.delegates').toArray();
    const possibleDelegates = this.get('possibleDelegates').toArray();

    if(isEmpty(proposalDelegates) || isEmpty(possibleDelegates)) { return; }

    return _.first(
      _.filter(
        proposalDelegates,
        function(delegate){ return _.matches(possibleDelegates, _.matches({id: delegate.id})); }
      )
    );
  }),

  willInsertElement() {
    let _this = this;
    let proposal = this.get('proposal');

    return this.get('supportDelegator').fetchPossibleDelegates(proposal).then(function(delegates) {
      _this.set('possibleDelegates', delegates);
    });
  }
});
