import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session:        service(),
  me:             service(),
  supportSwitch:  service('support-switch'),

  actions: {
    toggleSupport() {
      this.get('supportSwitch').toggleSupport(this.get('proposal'));
    }
  }
});
