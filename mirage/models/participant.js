import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  proposals:   hasMany({
    inverse: 'author'
  }),
  supports:    hasMany({
    inverse: 'author'
  }),
  delegationsGiven: hasMany('delegation', {
    inverse: 'author'
  }),
  delegates: hasMany('participant')
});
