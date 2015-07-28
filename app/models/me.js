import Ember from 'ember';
import Resource from './resource';
import { attr } from 'ember-jsonapi-resources/models/resource';

export default Resource.extend({
  type: 'me',
  service: Ember.inject.service('me'),

  name: attr()
});
