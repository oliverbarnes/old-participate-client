import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    save() {
      this.sendAction('on-save', this.get('proposal'));
    }
  }
});
