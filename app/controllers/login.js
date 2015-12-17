import Ember from 'ember';
import AuthenticationMixin from '../mixins/controllers/authentication';

export default Ember.Controller.extend(AuthenticationMixin, {
  actions: {
    authenticate() {
      this._attemptAuthentication(() => {
        return this.get('session').authenticate('authenticator:torii', 'facebook');
      });
    }
  }
});
