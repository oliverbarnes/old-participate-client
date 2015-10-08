import Ember from 'ember';

export default Ember.Component.extend({
  participants: null,

  actions: {
    delegateSupport: function(selectedDelegateId) {
      var self = this;
      const flashMessages = Ember.get(this, 'flashMessages');
      this.container.lookup('service:participants').find(selectedDelegateId).then(function(delegate) {
        self._delegateSupportTo(delegate);
        flashMessages.success('Delegated support option to ' + delegate.get('name'));
      })
    }
  },

  _delegateSupportTo: function(delegate) {
    var delegation = this.container.lookupFactory('model:delegations').create();
    debugger;
    delegation.addRelationship('proposal', this.get('proposal.id'));
    delegation.addRelationship('delegate', delegate.get('id'));
    delegation.addRelationship('author', this.get('author.id'));

    this.store.createResource('delegation', delegation);
  },

  willInsertElement: function() {
    let self = this;
    this.container.lookup('service:participants').find().then(function(resources) {
      self.set('participants', resources);
    });
  }
});
