import Ember from 'ember';

var SuggestionsRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor('initiative').get('suggestions');
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('initiative', this.modelFor('initiative'));
  }
});

export default SuggestionsRoute;