import 'vendor/ember-validations/index';

var Initiative = DS.Model.extend(Ember.Validations.Mixin, {
  title: DS.attr('string'),
  description: DS.attr('string'),
  isSupported: DS.attr('boolean'),

  validations: {
    title: {
      presence: true
    },
    description: {
      presence: true
    }
  }
});

Initiative.reopenClass({
  FIXTURES: [
    {
      id: 'fixture-0',
      title: "Public health clinic",
      description: "Allocate compensation money to create a local public health clinic"
    }
  ]
});

export default Initiative;