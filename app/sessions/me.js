import Ember from 'ember';
import Session from 'simple-auth/session';

// export default Session.extend({
//   me: function() {
//     var accessToken = this.get('secure.access_token');
//     if (!Ember.isEmpty(accessToken)) {
//       let self = this;
//       return this.container.lookup('service:me').find({}).then((me) => {
//         self.set('me', me);
//       });
//     }
//   }.property('secure.access_token')
// });

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
