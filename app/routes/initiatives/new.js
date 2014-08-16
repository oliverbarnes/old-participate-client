import Ember from 'ember';

var InitiativesNewRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('initiative', params);
  },

  actions: {
    submit: function() {
      var _this = this,
          content = this.controller.content,
          initiative = this.get('controller.model');

      var issue = this.store.createRecord('issue', {
                    title: content.issue_title,
                    description: content.issue_description
                  });
      initiative.set('issue', issue);
      initiative.save().then(function(model) {
        _this.transitionTo('initiatives.show', model.get('id'));
      });
    }
  }
});

export default InitiativesNewRoute;