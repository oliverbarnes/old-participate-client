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
       id: 100,
       initiative: 'fixture-0',
       details: "Create a kickstarter campaign to get the funds."
     }
   ]
});

export default Suggestion;