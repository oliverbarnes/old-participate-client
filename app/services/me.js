import Ember from 'ember';
import _ from 'lodash/lodash';

const { inject: { service }, computed, isEmpty } = Ember;

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
    proposal.get('supports').then((proposalSupports) => {
      if(isEmpty(proposalSupports)) { return; }

      this.get('supports').then((mySupports) => {
        if(isEmpty(mySupports)) { return; }
        
        return _.first(
          _.filter(
            proposalSupports,
            function(support){ return _.matches(mySupports, _.matches({id: support.id})); }
          )
        );
      });
    });
  },

  supporting: function(proposal) {
    return this.supportFor(proposal) ? true : false;
  }
});
