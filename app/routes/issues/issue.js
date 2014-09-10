import Ember from 'ember';

var IssueRoute = Ember.Route.extend({

  model: function(params) {
    return this.store.find('issue', params.issue_id);
    console.log('here');
  }

});

export default IssueRoute;