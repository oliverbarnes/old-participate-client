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

// export default Torii.extend({
//   authenticate: function(credentials) {
//     return this._super(provider).then((authResponse) => {
//       return new Ember.RSVP.Promise(function(resolve, reject) {
//         Ember.$.ajax({
//           url:  Configuration.serverTokenEndpoint,
//           type: 'POST',
//           data: { 'auth_code': authResponse.authorizationCode }
//         }).then(function(response) {
//           Ember.run(function() {
//             // all properties this promise resolves
//             // with will be available through the session
//             resolve({ access_token: response.access_token, participant_id: response.participant_id });
//           });
//         }, function(xhr, status, error) {
//           Ember.run(function() {
//             reject(xhr.responseText);
//           });
//         });
//       });
//     });
//   }
// });
