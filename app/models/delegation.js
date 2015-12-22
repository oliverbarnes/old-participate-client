import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { hasOne } from 'ember-jsonapi-resources/models/resource';

const { inject } = Ember;

let Delegation = Resource.extend({
  type: 'delegations',
  service: inject.service('delegations'),

  proposal: hasOne('proposal'),
  author:   hasOne('author'),
  delegate: hasOne('delegate')
});

Delegation.reopenClass({
  store: inject.service(),
  me: inject.service(),

  createFor: function(proposal, delegate) {
    var delegation = this.create();
    delegation.addRelationship('proposal', proposal);
    delegation.addRelationship('delegate', delegate);
    delegation.addRelationship('author', this.get('me'));

    return this.get('store').createResource('delegation', delegation);
  }
});

 export default Delegation;
