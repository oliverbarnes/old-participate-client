import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session:        service('session'),
  sessionAccount: service('session-account'),
  supportSwitch:  service('support-switch'),

  actions: {
    toggleSupport() {
      this.get('supportSwitch').toggleSupport(this.get('proposal'));
    }
  }
});
