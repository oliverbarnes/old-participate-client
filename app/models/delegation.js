import Ember from 'ember';
import Resource from './resource';
import { attr, hasOne, hasMany } from 'ember-jsonapi-resources/models/resource';

export default Resource.extend({
  type: 'delegations',
  service: Ember.inject.service('delegations'),

  proposal: hasOne('proposal'),
  author:   hasOne('author'),
  delegate: hasOne('delegate')
});
