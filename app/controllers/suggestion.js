import Ember from 'ember';

var SuggestionController = Ember.ObjectController.extend({
  actions: {    
    deleteSuggestion: function () {
      var suggestion = this.get('model');
      suggestion.deleteRecord();
      suggestion.save();      
    }
  }
});

export default SuggestionController;