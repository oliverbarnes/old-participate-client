import ApplicationAdapter from 'ember-jsonapi-resources/adapters/application';
import config from '../config/environment';
import fetch from 'fetch';

export default ApplicationAdapter.extend({
  type: 'proposal',

  url: config.APP.API_HOST +  'proposals',

  // FIXME: This is a hack to make ember-jsonapi-resources work with ember-simple-auth.
  // It overrides fetch() options to include the bearer token in the session.
  // I'll post an issue on ember-jsonapi-resources and see if there's a better way.
  fetchOptions(options) {
    let isUpdate;
    options.headers = options.headers || { 'Content-Type': 'application/vnd.api+json' };
    // const authHeader = window.localStorage.getItem('AuthorizationHeader');
    const simpleAuthSession = JSON.parse(window.localStorage.getItem('ember_simple_auth:session'));
    const accessToken       = simpleAuthSession.secure.access_token;
    const authHeader        = 'Bearer ' + accessToken;

    if (authHeader) {
      options.headers['Authorization'] = authHeader;
    }
    if (typeof options.update === 'boolean') {
      isUpdate = options.update;
      delete options.update;
    }
    return isUpdate;
  },

  createResource(resource) {
    let url = this.get('url');
    const json = this.serializer.serialize(resource);
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(json)
    });
  }
});
