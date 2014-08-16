import Ember from 'ember';

var SuggestionsIndexController = Ember.ArrayController.extend({
  needs: 'initiative'
});

export default SuggestionsIndexController;