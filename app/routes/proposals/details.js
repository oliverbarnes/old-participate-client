import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var proposal = this.store.find('proposals', params.id);
    var me = this.store.find('me', { singleton: true });

    return Ember.RSVP.hash({
      proposal: proposal,
      me: me
    });
  }
});
