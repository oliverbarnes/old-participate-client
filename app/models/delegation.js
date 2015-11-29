import Ember from 'ember';
import Resource from './resource';
import { attr, hasOne, hasMany } from 'ember-jsonapi-resources/models/resource';

const { inject } = Ember;

const Delegation = Resource.extend({
  type: 'delegations',
  service: inject.service('delegations'),
  store: inject.service(),
  me: inject.service(),

  proposal: hasOne('proposal'),
  author:   hasOne('author'),
  delegate: hasOne('delegate')
});

Delegation.reopenClass({
  createFor: function(proposal, delegate) {
    var delegation = this.create();
    delegation.addRelationship('proposal', proposal));
    delegation.addRelationship('delegate', delegate);
    delegation.addRelationship('author', this.me);

    return this.store.createResource('delegation', delegation);
  }
})

 export default Delegation;
