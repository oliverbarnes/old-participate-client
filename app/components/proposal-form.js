import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    submit() {
      const proposal = this.get('proposal');
      this.sendAction('submit', proposal);
    }
  }
});

