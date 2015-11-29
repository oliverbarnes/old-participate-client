import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  // session: Ember.inject.service(),

  // beforeModel() {
  //   return this.get('session').fetch();
  // }
});


// example
// export default Ember.Component.extend({
//   me: Ember.inject.service(),

//   someCp: Ember.Computed('', function() {
//     this.get('me')
//   })
// })
