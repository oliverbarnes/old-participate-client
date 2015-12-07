import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr } from 'ember-jsonapi-resources/models/resource';

export default Resource.extend({
  type: 'participants',
  service: Ember.inject.service('participants'),

  name: attr()
});
