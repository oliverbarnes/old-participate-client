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
      description: "The construction company in charge of the dam will pay 10 million in compensation to the local affected population. What to do with it?"
    },
      {
      id: 2,
      title: "How to solve rising youth unemployment?",
      description: "Youth unemployment in our community is high and continues to rise. How do we address this issue?"
    },
      {
      id: 3,
      title: "What to do with the industrial wastelands next to the lake?",
      description: "All the sugar refineries next to the lake closed down decades ago but their buildings and lands remain abandoned. How could they be re-integrated for public use?"
    }
  ]
});

export default Issue;