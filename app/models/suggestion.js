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
     },
     {
       id: 2,
       initiative: 1,
       details: "Set up a vaccination program."
     },
     {
       id: 3,
       initiative: 1,
       details: "Collaborate with the neighbouring municipality to integrate services."
     },
     {
       id: 4,
       initiative: 2,
       details: "Pay to ship the plastic to Sweden--it's cheaper than recycling it ourselves."
     }
   ]
});

export default Suggestion;