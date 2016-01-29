import Ember from 'ember';

const { inject: { service }, computed } = Ember;

export default Ember.Service.extend({
  sessionAccount: service('session-account'),

  id: computed('sessionAccount.account.id', function(){
    return this.get('sessionAccount.account.id');
  }),

  name: computed('sessionAccount.account.name', function(){
    return this.get('sessionAccount.account.name');
  }),

  supports: computed('sessionAccount.account.supports.[]', function(){
    return this.get('sessionAccount.account.supports');
  }),

  supportFor: function(proposal) {
    const proposalSupports = proposal.get('supports');
    const mySupports = this.get('supports');

    return _.first(
      _.filter(
        proposalSupports,
        function(support){ return _.matches(mySupports, _.matches({id: support.id})); }
      )
    );
  },

  supporting: function(proposal) {
    return this.supportFor(proposal) ? true : false;
  }
});
