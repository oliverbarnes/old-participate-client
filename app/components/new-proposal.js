import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Component.extend({
  store: service(),
  me: service(),

  actions: {
    createProposal(e) {
      e.preventDefault();
      const { store, title, body } = this.getProperties('store', 'title', 'body');
      const author = this.get('me.content');
      let proposal = store.createRecord('proposal', { title, body, author });

      proposal.save().then((proposal) => {
        this.getAttr('on-created')(proposal);
      }, () => {
        this.set('errors', proposal.get('errors'));
        store.unloadRecord(proposal);
      });
    },

    titleChanged(event) {
      this.set('title', event.target.value);
    },

    bodyChanged(event) {
      this.set('body', event.target.value);
    }
  }
});
