import Ember from 'ember';
import Resource from './resource';
import { hasOne } from 'ember-jsonapi-resources/models/resource';

const { inject } = Ember;

const Support = Resource.extend({
  type: 'supports',
  service: inject.service('supports'),
  store: inject.service(),
  me: inject.service(),

  proposal: hasOne('proposal'),
  author: hasOne('author')
});

Support.reopenClass({
  toggle: (proposal) => {
    if(proposal.get('canBeSupported')) {
      this._add(proposal);
    } else {
      this._remove(proposal);
    }
  },

  _add: (proposal) => {
    let support = this.create();
    support.addRelationship('proposal', proposal));
    support.addRelationship('author', this.me);

    this.store.createResource('support', support);
  },

  _remove: (proposal) => {
    let support = this.me.supportFor(proposal);

    this.store.deleteResource('support', support);
  }
});

export default Support;
