import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var proposal = this.store.find('proposals', {
      id: params.id,
      query: {
        include: 'author,supports'
      }
    });
    //proposal.checkBackingByMe
    var me = this.store.find('me', { singleton: true });

    //anti pattern. 'me' should be in its own service (or session)
    return Ember.RSVP.hash({
      proposal: proposal,
      me: me
    });
  }
});
