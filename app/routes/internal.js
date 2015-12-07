import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

const { inject } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  meService: inject.service('me'),

  // Make the current authenticated user available to all
  // internal routes, components and templates
  //
  // Step one: fetch the 'Me' resource from the API
  // then set a 'me' property on the route
  // with the resolved resource
  beforeModel() {
    return this.get('meService').find().then(function(resource) {
      this.set('me', resource);
    }.bind(this));
  },

  // Step two: set a 'me' property on the internal controller
  // to the 'me' property on the route
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('me', this.get('me'));
  }
});
