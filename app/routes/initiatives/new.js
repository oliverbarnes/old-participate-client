import Ember from 'ember';

var InitiativesNewRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('initiative', params);
  },

  deactivate: function() {
    this.controllerFor('issues').set('issueExists', null);
  },

  actions: {
    submit: function() {
      var issueExists = this.controllerFor('issues').issueExists,
          _this = this,
          initiative = this.get('controller.model');

      if(issueExists) {
        var issue = this.modelFor('issues.issue');
        
        initiative.set('issue', issue);
        initiative.save().then(function(model) {
          _this.transitionTo('initiative', model.get('id'));
        });

      } else {
        var content = this.controller.content;

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
  }
});

export default InitiativesNewRoute;