import Ember from 'ember';

export default Ember.Mixin.create({
  authorizationHeaderStorageKey: 'ember_simple_auth:session',
  authorizationCredential: Ember.computed({
    get(key) {
      key = this.get('ember_simple_auth:session');
      const simpleAuthSession = JSON.parse(window.localStorage.getItem(key));
      //FIXME: session is null in test env, looking for a way to stub session access_token.
      if (simpleAuthSession) {
        return 'Bearer ' + simpleAuthSession.secure.access_token;
      }
    }
  })
});
