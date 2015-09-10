import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delegateSupport: function() {
      this.flashMessages.success('Delegated support option to Easier Name')
    }
  },

  model: function(params) {
    var proposal = this.store.find('proposals', {
      id: params.id,
      query: {
        include: 'author'
      }
    });
    var me = this.store.find('me', { singleton: true });

    return Ember.RSVP.hash({
      proposal: proposal,
      me: me
    });
  }
});
