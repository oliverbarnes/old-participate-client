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

const participantId = '54d39ede62155f8a0301967b';

describe('Acceptance: CurrentUser', function() {
  var application, server;

  beforeEach(function() {
    application = startApp();

    server = new Pretender(function() {
      this.get('/me', function() {
        let response = JSON.stringify({ data: {
          id: participantId,
          type: 'me',
          attributes: {
            name: 'john'
          },
          links: {
            self: 'http://www.example.com/me'
          }
        }});

        return [200, { 'Content-Type': 'application/vnd.api+json' }, response];
      });
    });

    let session = currentSession();
    session.set('isAuthenticated', true);
    session.set('secure.access_token', 'access_token');

    visit('/');
  });

  afterEach(function() {
    server.shutdown();
    Ember.run(application, 'destroy');
  });

  it('display current user', function() {
    andThen(function() {
      expect(find('a:contains(Signed in as : john)').length).to.equal(1);
    });
  });
});
