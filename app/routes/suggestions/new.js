import Ember from 'ember';

var SuggestionsNewRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    if (!this.controllerFor('initiative').get('isSupported')) {
      this.transitionTo('initiative');
    }
  },

  model: function(params) {
    return this.store.createRecord('suggestion', params);
  },

  actions: {
    submit: function() {
      var _this = this;
      
      var suggestion = this.get('controller.model');
      // var content = this.controller.content;
      var initiative = this.modelFor('initiative');
      //debugger;

      // var initiative = this.store.createRecord('initiative', {
      //               //dirty hack, while figuring out why EasyForm isn't 
      //               // passing params to submit()
      //               title: this.controllerFor('initiative').content._data.title,
      //               description: this.controllerFor('initiative').content._data.description
      //             });
      // // //debugger;
      // suggestion.set('details', content._attributes.details);
      // suggestion.set('initiative', initiative);
      //debugger;
      // console.log('suggestion after set:', suggestion);
      // suggestion.save().then(function(model) {
      //   _this.transitionTo('initiative.index');
      // });

      
      
      // var initiative = this.modelFor('initiative');
      // var suggestion = this.store.createRecord('suggestion', {
      //       //dirty hack, while figuring out why EasyForm isn't 
      //       // passing the params to submit()
      //       details: this.controller.content._attributes.details
      // });
      // debugger;
        suggestion.save().then(function(model) {
          initiative.get('suggestions').pushObject(model)
          // initiative.get('suggestions').then(function(suggestions) {
            // suggestions.pushObject(suggestion);
            //debugger;
            _this.transitionTo('initiative.index');
          });    

    }
    
  }
});

export default SuggestionsNewRoute;