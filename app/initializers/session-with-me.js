import Ember from 'ember';
import Session from 'simple-auth/session';

export default {
  name: 'session-with-me',
  before: 'simple-auth',
  initialize: function(container, application) {
    // Session.reopen({
    //   me: function() {
    //     var accessToken = this.get('secure.access_token');
    //     var self = this;

    //     if (!Ember.isEmpty(accessToken)) {
    //       return this.container.lookup('store:main').find('me', {});
    //     }
    //   }.property('secure.access_token')
    // });
  }
};
