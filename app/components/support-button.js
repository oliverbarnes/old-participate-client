import Ember from 'ember';

const { inject, computed } = Ember;

export default Ember.Component.extend({
  me: inject.service(),

  actions: {
    toggleSupport: () => {
      this.me.toggleSupport(this.get('proposal'));
    }
  },

  disabled: computed('proposal.cantBeSupported', () => {
    return this.get('proposal.cantBeSupported') ? 'disabled' : 'enabled';
  })
});
