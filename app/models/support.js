import Ember from 'ember';
import Resource from './resource';
import { attr, hasOne, hasMany } from 'ember-jsonapi-resources/models/resource';

export default Resource.extend({
  type: 'supports',
  service: Ember.inject.service('supports'),

  proposal: hasOne('proposal')
});
