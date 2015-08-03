import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleSupport: function(proposal){
      proposal.toggleSupport();
    }
  }
});
