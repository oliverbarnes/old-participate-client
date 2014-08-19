import Ember from 'ember';
//import Initiative from "../../models/initiative.js";

var InitiativesIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('initiative');
  }

});


export default InitiativesIndexRoute;