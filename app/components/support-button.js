import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleSupport: function(){
      proposal.toggleSupport();
    }
  }
});
