import Ember from 'ember';
import BufferedProxy from 'ember-buffered-proxy/proxy';

export default Ember.Component.extend({
  resource: Ember.computed('proposal', function() {
    return BufferedProxy.create({ content: this.get('proposal') });
  }).readOnly(),

  actions:{
    save() {
      this.get('resource').applyChanges();
      this.sendAction('on-save', this.get('proposal'));
    }
  }
});
