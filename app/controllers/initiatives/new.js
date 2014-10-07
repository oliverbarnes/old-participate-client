import Ember from 'ember';

var InitiativesNewController = Ember.ObjectController.extend({

  needs: ['issues'],
  issueExists: Ember.computed.alias('controllers.issues.issueExists'),
  savedIssueTitle: Ember.computed.alias('controllers.issues.savedIssueTitle')

});

export default InitiativesNewController;