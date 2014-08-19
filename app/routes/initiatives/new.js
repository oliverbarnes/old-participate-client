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
                    //dirty hack, while figuring out why EasyForm isn't 
                    // passing params to submit()
                    title: content.issue_title,
                    description: content.issue_description
                  });
      initiative.set('issue', issue);
      initiative.save().then(function(model) {
        _this.transitionTo('initiative', model.get('id'));
      });
    }
  }
});

export default InitiativesNewRoute;