import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr, hasMany } from 'ember-jsonapi-resources/models/resource';

export default Resource.extend({
  type: 'proposals',
  service: Ember.inject.service('proposals'),


  title: attr(),
  body:  attr(),
  supports: hasMany('supports'),

  toggleSupport: function() {
    return true;
    // if proposal doesn't have a associated support with current user associated,
    // support = Support.new();
    // support.addRelationship('proposal', this.get('id'));
    // support.addRelationship('owner', session.me)

    // this.store.createResource('supports', support);
    //   create and associate a new support resource to itself
    // else
    //   remove associated support resource
  },

  //supportCount: computed property
});
