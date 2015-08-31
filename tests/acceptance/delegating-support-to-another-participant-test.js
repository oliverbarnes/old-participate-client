/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';
import AuthorizationMixin from 'ember-jsonapi-resources/mixins/authorization';
import page from '../pages/proposal';

let App;
let proposal;

describe('Delegating support for a proposal to another participant', function() {
  beforeEach(function() {
    App = startApp();

    AuthorizationMixin.reopen({
      authorizationCredential: 'Bearer access_token'
    });

    let session = currentSession();
    session.set('isAuthenticated', true);
    session.set('secure.access_token', 'access_token');

    server.create('me');
    proposal = server.create('proposal');
    page.visit({ id: proposal.id });
  });

  afterEach(function() {
    server.shutdown();
    Ember.run(App, 'destroy');
  });

  it('create new proposal', function() {
    andThen(function() {
      expect(currentURL()).to.eql('/proposals/' + proposal.id);
    });
  });
});
