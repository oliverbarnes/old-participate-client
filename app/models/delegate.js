import Ember from 'ember';
import Resource from './resource';
import { attr, hasOne, hasMany } from 'ember-jsonapi-resources/models/resource';

export default Resource.extend({
  type: 'delegates',
  service: Ember.inject.service('delegates'),

  name: attr(),

  delegations: hasMany('delegations')
});
