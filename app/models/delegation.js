import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  proposal: belongsTo(),
  author: belongsTo('participant', {
    inverse: 'delegationsGiven'
  }),
  delegate: belongsTo('participant')
});
