import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { hasOne } from 'ember-jsonapi-resources/models/resource';

const { inject } = Ember;

export default  Resource.extend({
  type: 'delegations',
  service: inject.service('delegations'),

  proposal: hasOne('proposal'),
  author:   hasOne('author'),
  delegate: hasOne('delegate')
});
