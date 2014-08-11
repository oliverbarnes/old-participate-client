import 'vendor/ember-validations/index';

var Issue = DS.Model.extend(Ember.Validations.Mixin, {
  title: DS.attr('string'),
  description: DS.attr('string'),
  initiative: DS.belongsTo('initiative'),

  validations: {
    title: {
      presence: true
    },
    description: {
      presence: true
    }
  }
});

Issue.reopenClass({
  FIXTURES: [
    {
      id: 1,
      initiative: 1,
      title: "What to do with the compensation money from the dam's impact?",
      description: "The contruction company in charge of the dam will pay 10 million in compensation to the local affected population. What to do with it?"
    }
  ]
});

export default Issue;