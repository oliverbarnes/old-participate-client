import Ember from 'ember';

var InitiativesShowRoute = Ember.Route.extend({
  needs: "initiative",
  initiative: Ember.computed.alias("controllers.initiative.model"),
  details: '',

  model: function(params) {
    return this.store.find('initiative', params.initiative_id);
    return this.store.find('suggestion');
    
    //return this.store.createRecord('suggestion');
  },

  actions: {
    supportIt: function() {
      var initiative = this.get('controller.model');
      initiative.set('isSupported', true)
    },

    removeSupport: function() {
      var initiative = this.get('controller.model');
      initiative.set('isSupported', false)
    },

    makeSuggestion: function() {
      var initiative = this.get('controller.model');
      initiative.set('isSuggested', true);
    },

    
    submit: function() {
            //var initiative = this.get('controller.model');

            var message = this.get('controller.model');

            console.log('msg',message.details);
            var suggestion = this.store.createRecord('suggestion', {
                details : message.details
            });

            //this.set('details', '');
            console.log('suggestion',suggestion);
            var initiative = this.get('controllers.initiative');

            console.log('initiative',initiative);
            var suggestions = this.get('suggestions');

            console.log('suggestions',suggestions);
            suggestions.pushObject(suggestion);
            suggestion.save();
            this.save();
        }
  }
});

export default InitiativesShowRoute;