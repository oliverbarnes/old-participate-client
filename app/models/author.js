import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr, hasMany } from 'ember-jsonapi-resources/models/resource';

const { inject } = Ember;

export default Resource.extend({
  type: 'authors',
  service: inject.service('authors'),

  name: attr(),

  proposals: hasMany('proposals'),
  supports: hasMany('supports'),
  suggestions: hasMany('suggestions')
});
