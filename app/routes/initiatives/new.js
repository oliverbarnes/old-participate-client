import Ember from 'ember';

var InitiativesNewRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('initiative', params);
  },

  actions: {
    submit: function() {
      var _this = this;
      var initiative = this.get('controller.model');
      initiative.save().then(function(model) {
        _this.transitionTo('initiatives.show', model.get('id'));
      });
    }
  }
});

export default InitiativesNewRoute;