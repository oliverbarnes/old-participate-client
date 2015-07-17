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
      this.post('/proposals', function(request) {
        let body = JSON.parse(request.requestBody),
            data = body.data.attributes;

        if (!data.title || !data.body) {
          return [422, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({})];
        }

        let response = JSON.stringify({ data: {
          id: 1,
          type: 'proposals',
          attributes: {
            title: data.title,
            body: data.body
          }
        }});

        return [201, { 'Content-Type': 'application/vnd.api+json' }, response];
      });
    });

    authenticateSession();
  });

  afterEach(function() {
    Ember.run(App, 'destroy');
    Ember.tryInvoke(server, 'shutdown');
  });

  it('opens the new proposal page ', function() {
    visit('/proposals/new');
    andThen(function() {
      expect(currentRouteName()).to.eql('proposals.new', 'proposal new page is reached');
    });
  });

  it('create the new proposal', function() {
    visit('/proposals/new');
    fillIn('.title', 'bar');
    fillIn('#body', 'foo');
    click('button[type="submit"]');
    andThen(function() {
      expect(currentRouteName()).to.eql('proposals.edit', 'transition to edit page');
    });
  });
});
