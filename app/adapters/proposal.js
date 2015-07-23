import ApplicationAdapter from 'ember-jsonapi-resources/adapters/application';
import AuthorizationMixin from '../mixins/authorization';
import config from '../config/environment';

export default ApplicationAdapter.extend(AuthorizationMixin, {
  type: 'proposal',

  url: config.APP.API_HOST +  'proposals',

  fetchAuthorizationHeader(options) {
    if (options.headers[this.authorizationHeaderField]) {
      return;
    } else {
      const credential = this.get('authorizationCredential');
      if (credential && this.authorizationHeaderField) {
          options.headers[this.authorizationHeaderField] = credential;
      }
    }
  }
});
