import Ember from 'ember';

const { inject, get, computed} = Ember;

export default Ember.Component.extend({
  store: inject.service(),
  me: inject.service(),
  supportSwitch: inject.service('support-switch'),
  participants: null,

  actions: {
    delegateSupport: (selectedDelegateId) => {
      // TODO: also remove support from proposal if existing
      this.get('me.content').delegateSupport(this.get('proposal'), selectedDelegateId).then((delegation) => {
        get(this, 'flashMessages').success('Delegated support option to ' + delegation.get('delegate.name'));
      });
    }
  },

  willInsertElement: function() {
    let _this = this;
    return this.get('store').find('participants', this.get('_possibleDelegatesQuery')).then(function(participants) {
      return _this.set('participants', participants);
    })
  },

  disabled: computed('proposal.backedByMe', function() {
    return this.get('supportSwitch').disabled(this.get('proposal')) ? 'disabled' : '';
  }),

  _possibleDelegatesQuery: computed('proposal.id', function() {
    return {
      query: {
        filter: {
          exclude_author_of_proposal: this.get('proposal.id')
        }
      }
    };
  })
});
