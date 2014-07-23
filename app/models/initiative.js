var Initiative = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string')
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