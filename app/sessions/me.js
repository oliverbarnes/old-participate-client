import Ember from 'ember';
import Session from 'simple-auth/session';

var PromiseObject = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);

export default Session.extend({
  me: function() {
    var accessToken = this.get('secure.access_token');
    if (!Ember.isEmpty(accessToken)) {
      return PromiseObject.create({
        promise: this.container.lookup('service:me').find({})
      });
    }
  }.property('secure.access_token')
});
