import Ember from 'ember';

var IssuesController = Ember.ObjectController.extend({

  //declare 'issueExists' otherwise cannot "Start a new initiative" when first opening the app
  issueExists: ''

});

export default IssuesController;