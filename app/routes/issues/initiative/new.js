import Ember from 'ember';

var InitiativeNewRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('initiative', params.initiative_id);
  },

  actions: {
    submit: function() {
      var _this = this,
          initiative = this.get('controller.model'),
          issue = this.modelFor('issues.issue');
        
      initiative.set('issue', issue);
      initiative.save().then(function(model) {
        _this.transitionTo('initiative', model.get('id'));
      });
  
    }
  }
});

export default InitiativeNewRoute;