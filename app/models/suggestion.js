import 'vendor/ember-validations/index';

var Suggestion = DS.Model.extend({
  details: DS.attr('string'),
  initiative: DS.belongsTo('initiative')
});

Suggestion.reopenClass({
  FIXTURES: [
     {
       id: 1,
       initiative: 1,
       details: "Make sure there's a doctor available for house calls"
     }
   ]
});

export default Suggestion;