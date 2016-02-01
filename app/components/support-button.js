import Ember from 'ember';

const { inject: { service }, computed } = Ember;

export default Ember.Component.extend({
  session:        service(),
  me:             service(),
  supportSwitch:  service('support-switch'),

  actions: {
    toggleSupport() {
      this.get('supportSwitch').toggleSupport(this.get('proposal'));
    }
  },

  disabled: computed('supportSwitch', 'proposal', function() {
    return this.get('supportSwitch').disabled(this.get('proposal')) ? 'disabled' : '';
  }),
});
