import 'vendor/ember-validations/index';

var Suggestion = DS.Model.extend(Ember.Validations.Mixin, {
  description: DS.attr('string'),
  initiative: DS.belongsTo('initiative',{async: true}),

  validations: {
    description: {
      presence: true
    }
  }
});

Suggestion.reopenClass({
  FIXTURES: [
     {
       id: 100,
       initiative: '1',
       description: "Create a kickstarter campaign to get the funds."
     },
     {
       id: 101,
       initiative: '1',
       description: "Sugestion 2 blaaaaaa"
     }
   ]
});

export default Suggestion;