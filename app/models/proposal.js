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
    support = Support.new();
    support.addRelationship('proposal', this.get('id'));
    //
    // TODO: time to introduce the current_user on the front-end
    // ...or current_login, as we don't yet have a user (participant) model
    // on the api
    support.addRelationship('owner', ...)
    this.store.createResource('supports', support);
    //   create and associate a new support resource to itself
    // else
    //   remove associated support
    //
    // questions: is current user a service?
  },

  //supportCount: computed property
});
