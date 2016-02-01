import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

const { inject: { service }, computed } = Ember;

export default Model.extend({
  me:      service(),

  title: attr(),
  body:  attr(),
  'support-count': attr(),

  author:   belongsTo('participant'),
  supports: hasMany(),

  authoredByMe: computed('author.id', 'me.id', function() {
    return this.get('author.id') === this.get('me.id');
  }),

  backedByMe: computed('supports.[]', 'me.supports.[]', function() {
    return this.get('me').supporting(this);
  })
});
