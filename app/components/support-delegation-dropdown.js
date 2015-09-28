import Ember from 'ember';

export default Ember.Component.extend({
  participants: null,

  actions: {
    delegateSupport: function(participantId) {
      const flashMessages = Ember.get(this, 'flashMessages');
      this.container.lookup('service:participants').find(participantId).then(function(participant) {
        flashMessages.success('Delegated support option to ' + participant.get('name'));
      })
    }
  },

  willInsertElement: function() {
    let self = this;
    this.container.lookup('service:participants').find().then(function(resources) {
      self.set('participants', resources);
    });
  },

  _delegateSupport: function() {
    var delegation = this.container.lookupFactory('model:delegations').create();
    delegation.addRelationship('proposal', this.get('proposal.id'));
    delegation.addRelationship('delegate', this.get('delegate.id'));
    delegation.addRelationship('author', this.get('author.id'));

    this.store.createResource('delegation', delegation);
    this.set('supported', true);
  },
});
