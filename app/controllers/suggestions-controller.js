import Ember from 'ember';

//var SuggestionsShowController = Ember.ObjectController.extend()
var SuggestionsController = Ember.ArrayController.extend({
  actions: {
    createSuggestion: function() {
      var details = this.get('details');
      console.log('QQQQQQQQQQQQQ!!!!!!!!!!!!: ', details)
      debugger;
    }
  }
});

export default SuggestionsController;