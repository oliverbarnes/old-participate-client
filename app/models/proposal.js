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

  backedByMe: computed('supports', 'me.supports', function() {
    return _.any(this.get('supports'), _.matches(this.get('me.supports')));
  }),

  ownedByMe: computed('author.id', 'me.id', function() {
    return this.get('author.id') === this.get('me.id');
  }),

  cantBeSupported: computed('backedByMe', 'ownedByMe', function() {
    return (this.get('ownedByMe') || this.get('backedByMe')) ? true : false;
  }),

  possibleDelegates: computed('_possibleDelegatesQuery', function() {
    return this.get('store').find('participants', this.get('_possibleDelegatesQuery'));
  }),

  supportDelegated: computed('id', function() {
    return this.get('me.content').delegatedSupportForProposal(this.get('id'));
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
