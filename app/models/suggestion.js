import Ember from 'ember';
import Resource from './resource';
import { attr, hasOne, hasMany } from 'ember-jsonapi-resources/models/resource';

export default Resource.extend({
  type: 'suggestions',
  service: Ember.inject.service('suggestions'),

  body: attr(),

  author: hasOne('author'),
  proposal: hasOne('proposal')
});
