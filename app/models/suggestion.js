import 'vendor/ember-validations/index';

var Suggestion = DS.Model.extend(Ember.Validations.Mixin, {
  details: DS.attr('string'),
  initiative: DS.belongsTo('initiative'),

  validations: {
    details: {
      presence: true
    }
  }
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