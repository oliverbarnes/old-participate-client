import Ember from 'ember';

var SuggestionsShowRoute = Ember.Route.extend({
  // model: function(params) {
  //   //return App.Suggestion.find(params.post_id);
  //   return this.store.find('suggestion', params.suggestion_id);
  //   },

  //model fn to return all existing suggestions
  model: function() {
    return this.store.find('suggestion');
    },

  // setupController: function(controller, suggestions) {
  //   controller.set('model', suggestion.get('details'));
  // },

  // setupController: function(controller, model) {
  //       controller.set('content', model);
  //       // the "user_id" parameter can come from a global variable for example
  //       // or you can implement in another way. This is generally where you
  //       // setup your controller properties and models, or even other models
  //       // that can be used in your route's template
  //       controller.set('initiative', App.Initiative.find(window.initiative_id));
  //   }

});

export default SuggestionsShowRoute;