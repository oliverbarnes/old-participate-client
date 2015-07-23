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

describe('Creating a proposal', function() {
  var App;
  var server;

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
          id: '54d39ede62155f8a0301967b',
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
    visit('/proposals/new');
  });

  afterEach(function() {
    Ember.run(App, 'destroy');
    Ember.tryInvoke(server, 'shutdown');
  });

  it('create new proposal', function() {
    fillIn('.title', 'bar');
    fillIn('#body', 'foo');
    click('button[type="submit"]');
    andThen(function() {
      expect(currentURL()).to.eql('/proposals/54d39ede62155f8a0301967b', 'creates a proposal and transition to details page');
    });
  });

  it('transition to proposal details', function() {
    fillIn('.title', 'bar');
    fillIn('#body', 'foo');
    click('button[type="submit"]');
    andThen(function() {
      expect(currentRouteName()).to.eql('proposals.details', 'transition to propsal detail page');
    });
  });
});
