import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr, hasOne, hasMany } from 'ember-jsonapi-resources/models/resource';

export default Resource.extend({
  type: 'proposals',
  service: Ember.inject.service('proposals'),


  title: attr(),
  body:  attr()

  /*
  author: hasOne('author'),
  comments: hasMany('comments')
  */
});
