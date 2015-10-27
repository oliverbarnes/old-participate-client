import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({

  supported:       null,

  actions: {
    toggleSupport: function(){
      var self = this;
      this.container.lookup('service:supports').find(this.get('previousSupportQuery')).then(function(resources) {
        if( Ember.isEmpty(resources) ) {
          self._addSupport();
        } else {
          self._removeSupport(resources);
        }
      });
    }
  },

  isOwner: Ember.computed('proposal.author.id', 'author.id', function() {
    return this.get('author.id') === this.get('proposal.relationships.author.data.id');
  }),

  disabledAttr: Ember.computed('isOwner', function() {
    return this.get('isOwner') ? 'disabled' : 'enabled';
  }),

  _setSupportedOrNot: function() {
    let self = this;
    this.store.find('supports', this.get('previousSupportQuery')).then(function(resources) {
      if( Ember.isEmpty(resources) ) {
        self.set('supported', false);
      } else {
        self.set('supported', true);
      }
    });
  }.on('didInsertElement'),

  _addSupport: function() {
    let support = this.container.lookupFactory('model:supports').create();
    support.addRelationship('proposal', this.get('proposal.id'));
    support.addRelationship('author', this.get('author.id'));

    const self = this;
    this.store.createResource('support', support).then(function() {
      const newSupportCount = self.store.all('proposals').content[0].get('support-count');

      self.set('proposal.support-count', newSupportCount);
      self.set('supported', true);
    });
  },

  _removeSupport: function(resources) {
    var self = this;
    this.store.deleteResource('support', resources.get('firstObject')).then(function() {

      self.store.find('proposals', self.get('proposal.id')).then(function(updatedProposal) {
        const newSupportCount = updatedProposal.get('support-count');

        self.set('proposal.support-count', newSupportCount);
      });

      self.set('supported', false);
    });
  },

  previousSupportQuery: Ember.computed('proposal.id', 'author.id', function() {
    return {
      query: {
        filter: {
          proposal_id: this.get('proposal.id'),
          author_id: this.get('author.id')
        }
      }
    };
  })
});
