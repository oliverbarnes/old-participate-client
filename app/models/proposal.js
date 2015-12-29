import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr, hasOne, hasMany } from 'ember-jsonapi-resources/models/resource';
import _ from 'lodash/lodash';

const { inject, computed } = Ember;

export default Resource.extend({
  type: 'proposals',
  service: inject.service('proposals'),
  store: inject.service(),
  me: inject.service(),

  title: attr(),
  body:  attr(),
  'support-count': attr(),

  author:      hasOne('author'),
  supports:    hasMany('supports'),
  suggestions: hasMany('suggestions'),

  possibleDelegates: computed('_possibleDelegatesQuery', function() {
    return this.get('store').find('participants', this.get('_possibleDelegatesQuery'));
  }),

  authoredByMe: computed('relationships.author.data.id', 'me.id', function() {
    return this.get('relationships.author.data.id') === this.get('me.id');
  }),

  backedByMe: computed('relationships.supports.data', 'me.relationships.supports.data', function() {
    return this.get('me.content').supporting(this);
  }),

  _possibleDelegatesQuery: computed('id', function() {
    return {
      query: {
        filter: {
          exclude_author_of_proposal: this.get('id')
        }
      }
    };
  })
});
