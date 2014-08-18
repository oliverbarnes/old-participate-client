import 'vendor/ember-validations/index';
import Ember from 'ember';
import DS from 'ember-data';

var Initiative = DS.Model.extend(Ember.Validations.Mixin, {
  title: DS.attr('string'),
  description: DS.attr('string'),
  isSupported: DS.attr('boolean'),
  issue: DS.belongsTo('issue'),
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
      suggestions: [100]
    }
  ]
});


export default Initiative;