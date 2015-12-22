import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { hasOne } from 'ember-jsonapi-resources/models/resource';

const { inject } = Ember;

const Support = Resource.extend({
  type: 'supports',
  service: inject.service('supports'),

  proposal: hasOne('proposal'),
  author: hasOne('author')
});

Support.reopenClass({
  store: inject.service(),
  me: inject.service(),

  toggle: function(proposal) {
    if(proposal.get('canBeSupported')) {
      this._add(proposal);
    } else {
      this._remove(proposal);
    }
  },

  _add: function(proposal) {
    let support = this.create();
    support.addRelationship('proposal', proposal);
    support.addRelationship('author', this.get('me'));

    this.get('store').createResource('support', support);
  },

  _remove: function(proposal) {
    let support = this.get('me.content').supportFor(proposal);

    this.get('store').deleteResource('support', support);
  }
});

export default Support;
