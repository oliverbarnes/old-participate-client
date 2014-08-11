import Ember from 'ember';

var InitiativesShowRoute = Ember.Route.extend({
  //needs: "initiative",
  //initiative: Ember.computed.alias("controllers.initiative.model"),
  needs: ['initiative'],
  details: '',

  model: function(params) {
    //gets FIXTURE data out of the store
    return this.store.find('initiative', params.initiative_id);
  },

  suggestion: function() {
    return this.store.createRecord('suggestion', {
      product: this.get('model')
    });
  }.property('model'),

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

    createSuggestion: function() {
      //From Codeschool tutorial for reviews of products, slide 268ff
      // Step 1: Build a new Suggestion object
      var suggestion = this.store.createRecord('suggestion', {   
         details: this.get('details'),
         initiative: this.get('model')
       });
      var controller = this; //stores the initiative controller
      
      //Create the suggestion
      suggestion.save().then(function(suggestion) {
        // Will be called when the save call finishes
        controller.set('details', ''); //blanks out details property in template
        controller.get('model.suggestions').addObject(suggestion);
      });
      
      //next version in tutorial, but throws error:
      //Cannot read property 'addObject' of undefined
      // var controller = this;
      // this.get('suggestion').save().then(function(suggestion) {
      //   controller.get('model.suggestions').addObject(suggestion);
      // });

    },
    
    submit: function() {
      // Step 1: Build a new Review object
      // var suggestion = this.store.createRecord('suggestion', {   
      //    details: this.get('details'),
      //    initiative: this.get('model')
      //  });
      // var controller = this;
      
      // //Create the suggestion
      // suggestion.save().then(function(suggestion) {
      //   // Will be called when the save call finishes
      //   controller.set('details', '');
      //   controller.get('model.suggestions').addObject(suggestion);
      // });

            //MUKESH
            //var initiative = this.get('controller.model');
            // var message = this.get('controller.model');

            // console.log('msg',message.details);
            // message.save();
            // var suggestion = this.store.createRecord('suggestion', {
            //     details : message.details
            // });

            // //this.set('details', '');
            // console.log('suggestion',suggestion);
            // var initiative = this.get('controllers.initiative');

            // console.log('initiative',initiative);
            // var suggestions = this.get('suggestions');

            // console.log('suggestions',suggestions);
            // suggestions.pushObject(suggestion);
            // suggestion.save();
            //this.save();
        }
  }
});

export default InitiativesShowRoute;