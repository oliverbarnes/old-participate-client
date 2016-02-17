import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),

  proposals:   hasMany({
    inverse: 'author'
  }),
  supports:    hasMany({
    inverse: 'author'
  }),
  delegationsGiven: hasMany('delegation', {
    inverse: 'delegate'
  })
});
