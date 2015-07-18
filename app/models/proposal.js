import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr } from 'ember-jsonapi-resources/models/resource';

export default Resource.extend({
  type: 'proposals',
  service: Ember.inject.service('proposals'),
  store: Ember.inject.service('service:store'),

  title: attr(),
  body:  attr()

  //supportCount: computed property
});
