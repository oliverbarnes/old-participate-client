import Ember from 'ember';

const { inject, computed } = Ember;

export default Ember.Component.extend({
  supportSwitch: inject.service('support-switch'),

  actions: {
    toggleSupport: function() {
      this.get('supportSwitch').toggle(this.get('proposal'));
    }
  },

  disabled: computed('supportSwitch', 'proposal', function() {
    return this.get('supportSwitch').disabled(this.get('proposal')) ? 'disabled' : '';
  })
});
