import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr, hasOne, hasMany } from 'ember-jsonapi-resources/models/resource';
import _ from 'lodash/lodash';

const { inject, computed } = Ember;

export default Resource.extend({
  type: 'proposals',
  service: inject.service('proposals'),
  me: inject.service(),

  title: attr(),
  body:  attr(),
  'support-count': attr(),

  author:      hasOne('author'),
  supports:    hasMany('supports'),
  suggestions: hasMany('suggestions'),

  backedByMe: computed('supports', 'me.supports', () => {
    return _.any(this.get('supports'), _.matches(this.get('me.supports')));
  }),

  ownedByMe: computed('author.id', 'me.id', function() {
    return this.get('author.id') === this.get('me.id');
  }),

  cantBeSupported: computed('backedByMe', 'ownedByMe', () => {
    return (this.get('ownedByMe') || this.get('backedByMe')) ? true : false;
  }),

  possibleDelegates: computed('_possibleDelegatesQuery', () => {
    return this.store.find('participants', this.get('_possibleDelegatesQuery'));
  }),

  supportDelegated: computed('id', () => {
    return this.me.supportDelegatedFor(this.get('id'));
  }),

  _possibleDelegatesQuery: computed('id', () => {
    return {
      query: {
        filter: {
          exclude_author_of_proposal: this.get('id')
        }
      }
    };
  })
});
