/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import Pretender from 'pretender';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;
var server;

describe('Creating a proposal', function() {

  beforeEach(function() {
    App = startApp();
    server = new Pretender(function() {
      //TODO not working, im not sure if this is related to https://github.com/trek/pretender/issues/60
      this.post('/proposals', function(request) {
        return [201, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: {} })];
      });
    });

    authenticateSession();
    visit('/proposals/new');
  });

  afterEach(function() {
    server.shutdown();
    Ember.run(App, 'destroy');
    Ember.tryInvoke(server, 'shutdown');
  });

  it('opens the new proposal page ', function() {
    expect(currentRouteName()).to.eql('proposals.new');
  });

  it('create new proposal', function() {
    fillIn('#title', 'bar');
    fillIn('#body', 'foo');
    click('button[type="submit"]');
    andThen(function() {
      expect(currentRouteName()).to.eql('proposals');
    });
  });
});
