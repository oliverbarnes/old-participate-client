import Ember from 'ember';

var InitiativesNewRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('initiative', params);
  },

  actions: {
    submit: function() {
      var _this = this,
          initiative = this.get('controller.model'),
          issue = this.store.createRecord('issue');

      issue.set('title', initiative.issue_title);
      issue.set('description', initiative.issue_description);
      initiative.save().then(function(model) {
        _this.transitionTo('initiative', model.get('id'));
      });
    }
  }
});

export default InitiativesNewRoute;