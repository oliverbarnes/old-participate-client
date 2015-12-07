import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr, hasMany } from 'ember-jsonapi-resources/models/resource';

export default Resource.extend({
  type: 'delegates',
  service: Ember.inject.service('delegates'),

  name: attr(),

  delegations: hasMany('delegations')
});
