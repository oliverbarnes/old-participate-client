import Ember from 'ember';
import AuthorizationMixin from 'ember-jsonapi-resources/mixins/authorization';

export default AuthorizationMixin.reopen({
  authorizationHeaderStorageKey: 'ember_simple_auth:session',
  authorizationCredential: Ember.computed({
    get(key) {
      key = this.get('authorizationHeaderStorageKey');
      const simpleAuthSession = JSON.parse(window.localStorage.getItem(key));
      return 'Bearer ' + simpleAuthSession.secure.access_token;
    }
  })
});
