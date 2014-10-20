import Ember from 'ember';

var InitiativesNewRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('initiative', params);
  },

  actions: {
    submit: function() {
      var _this = this,
          initiative = this.get('controller.model');

      var issue = this.store.createRecord('issue', {
                    title: this.controller.get('issue_title'),
                    description: this.controller.get('issue_description')
                  });
      initiative.set('issue', issue);
      initiative.save().then(function(model) {
        _this.transitionTo('initiative', model.get('id'));
      });
    }
  }
});

export default InitiativesNewRoute;