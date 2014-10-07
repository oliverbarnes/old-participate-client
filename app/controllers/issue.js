import Ember from 'ember';

var IssueController = Ember.ObjectController.extend({

  needs: ['issues'],
  expandedIssueId: Ember.computed.alias('controllers.issues.expandedIssueId'),

  isExpanded: function() {
  	console.log('expandedIssueId', this.get('expandedIssueId'));
  	console.log('id:', this.get('id'));
    return this.get('id') === this.get('expandedIssueId');
  }.property('id', 'expandedIssueId')

});

export default IssueController;