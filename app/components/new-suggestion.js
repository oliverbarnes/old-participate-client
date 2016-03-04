import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Component.extend({
  store: service(),
  me: service(),

  actions: {
    createSuggestion(proposal, e) {
      e.preventDefault();
      const { store, body } = this.getProperties('store', 'body');
      const author = this.get('me.content');

      let suggestion = store.createRecord('suggestion', { body, author, proposal });

      suggestion.save().then(() => {
        this.getAttr('on-created')(proposal);
      }, () => {
        this.set('errors', suggestion.get('errors'));
        store.unloadRecord(suggestion);
      });
    },

    bodyChanged(event) {
      this.set('body', event.target.value);
    }
  }
});
