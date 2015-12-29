import Ember from 'ember';

const { inject, computed } = Ember;

export default Ember.Component.extend({
  supportSwitch: inject.service('support-switch'),
  me: inject.service(),

  actions: {
    toggleSupport: function() {
      return this.get('supportSwitch').toggle(this.get('proposal'));
    }
  },

  disabled: computed('supportSwitch', 'proposal', function() {
    return this.get('supportSwitch').disabled(this.get('proposal')) ? 'disabled' : '';
  }),

  text: computed('proposal.backedByMe', function() {
    return this.get('proposal.backedByMe') ? 'Supported' : 'Support it';
  })
});
