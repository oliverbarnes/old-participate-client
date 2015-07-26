import Ember from 'ember';
import Torii from 'simple-auth-torii/authenticators/torii';
import Configuration from 'simple-auth-oauth2/configuration';

export default Torii.extend({
  authenticate(provider) {
    return this._super(provider).then((authResponse) => {
      return Ember.$.post(Configuration.serverTokenEndpoint, { 'auth_code': authResponse.authorizationCode }).then(function(response) {
        return { 'access_token': response['access_token'], provider };
      });
    });
  }
});

