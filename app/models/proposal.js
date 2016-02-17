import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';
import _ from 'lodash/lodash';

const { inject: { service }, computed, isEmpty } = Ember;

export default Model.extend({
  me:      service(),

  title: attr(),
  body:  attr(),
  'support-count': attr(),

  author:    belongsTo('participant'),
  supports:  hasMany(),
  delegates: hasMany('participant'),
  delegations: hasMany(),

  authoredByMe: computed('author.id', 'me.id', function() {
    return this.get('author.id') === this.get('me.id');
  }),

  backedByMe: computed('supports.[]', 'me.supports.[]', function() {
    return this.get('me').supporting(this);
  }),

  supportDelegated: computed('currentDelegate', function() {
    return this.get('currentDelegate') ? true : false;
  }),

  currentDelegate: computed('delegates.[]', 'me.delegates.[]', function() {
    const proposalDelegates = this.get('delegates').toArray();
    const myDelegates = this.get('delegates').toArray();

    if(isEmpty(proposalDelegates) || isEmpty(myDelegates)) { return; }

    return _.first(
      _.filter(
        proposalDelegates,
        function(delegate){ return _.matches(myDelegates, _.matches({id: delegate.id})); }
      )
    );
  })
});
