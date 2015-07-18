import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr } from 'ember-jsonapi-resources/models/resource';

export default Resource.extend({
  type: 'proposals',
  service: Ember.inject.service('proposals'),


  title: attr(),
  body:  attr(),

  toggleSupport: function() {
    // TODO: add unit test and implement
    //
    // if proposal doesn't have a associated support with current user associated,
    //   create and associate a new support resource to itself
    // else
    //   remove associated support
    //
    // questions: is current user a service?
  },

  //supportCount: computed property
});
