import Ember from 'ember';

var IssueController = Ember.ObjectController.extend({

  actions: {
    toggleExpand: function() {
      this.toggleProperty('isExpanded');
    }
  },

  isExpanded: false

});

export default IssueController;