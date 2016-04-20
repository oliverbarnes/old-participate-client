import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  proposal: belongsTo(),
  author: belongsTo('participant', {
    inverse: 'delegationsGiven'
  }),
  delegate: belongsTo('participant')
});
