import Ember from 'ember';

var IssuesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('issue');
  }
});

export default IssuesRoute;