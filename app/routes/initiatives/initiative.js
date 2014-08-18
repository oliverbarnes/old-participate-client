import Ember from 'ember';
//import Initiative from "../../models/initiative.js";

var InitiativesRoute = Ember.Route.extend({
  model: function() {
    //return this.store.find('initiative', params.initiative_id);
    return this.store.find('initiative');
  }
});


export default InitiativesRoute;