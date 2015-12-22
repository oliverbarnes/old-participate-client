import Ember from 'ember';

const { inject, computed } = Ember;

export default Ember.Component.extend({
  me: inject.service(),

  actions: {
    toggleSupport: function() {
      this.get('me.content').toggleSupport(this.get('proposal'));
    }
  },

  disabled: computed('proposal.cantBeSupported', function() {
    return this.get('proposal.cantBeSupported') ? 'disabled' : 'enabled';
  })
});
