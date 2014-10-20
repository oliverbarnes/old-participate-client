import Ember from 'ember';
import EmberValidations from 'ember-validations';

var Initiative = DS.Model.extend(EmberValidations.Mixin, {
  title: DS.attr('string'),
  description: DS.attr('string'),
  isSupported: DS.attr('boolean'),
  issue: DS.belongsTo('issue', {async: true}),
  suggestions: DS.hasMany('suggestion', {async: true}),

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
      id: 1,
      issue: 1,
      title: "Public health clinic",
      description: "Allocate compensation money to create a local public health clinic",
      isSupported: false,
      suggestions: [1,2,3]
    },
    {
      id: 2,
      issue: 1,
      title: "Plastic recyling program",
      description: "Allocate compensation money to create a recycling program for plastic bottles.",
      isSupported: false,
      suggestions: [4]
    },
    {
      id: 3,
      issue: 1,
      title: "Public library upgrade",
      description: "Allocate compensation money to buy more computers for the library and other modern services.",
      isSupported: false
    }
  ]
});


export default Initiative;