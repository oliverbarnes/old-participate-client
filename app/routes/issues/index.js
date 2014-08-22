import Ember from 'ember';

var IssuesIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('issue');
  }

});

export default IssuesIndexRoute;