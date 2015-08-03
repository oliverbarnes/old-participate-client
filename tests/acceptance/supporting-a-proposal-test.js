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

var SUPPORT_BUTTON_SELECTOR = '.js-support-proposal';
var proposalData = {
  'id': '54d39ede62155f8a0301967z',
  'attributes': {
    'title': 'Change 14st to one-way',
    'body':  'Lorem ipsum lorem ipsum'
  },
  'type': 'proposals',
  'links': {
    'self': 'http://www.example.com/proposals/54d39ede62155f8a0301967z'
  }
};

describe('Acceptance: Supporting a proposal', function() {
  var application;
  var server;

  beforeEach(function() {
    application = startApp();
    server = new Pretender(function() {
      this.get('/proposals/54d39ede62155f8a0301967z', function() {
        return [200, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: proposalData })];
      });
      this.post('/proposals/54d39ede62155f8a0301967z/supports', function() {
        return [201, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: {} })];
      });
    });

    authenticateSession();
    visit('/proposals/54d39ede62155f8a0301967z');
    click(SUPPORT_BUTTON_SELECTOR);
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
    Ember.tryInvoke(server, 'shutdown');

  });

  it("changes 'Support' button text to 'Supported'", function() {
    expect(SUPPORT_BUTTON_SELECTOR.value).to.equal('Supported');
  });

  it("changes 'Support' button state to selected", function() {
    //to be defined how this is going to work
  });

  it("updates support count next to support button", function() {
    //to be defined how this is going to work
  });

  describe('when not logged-in', function(){
    beforeEach(function() {
      //invalidateSession(); is this a test helper too?
    });

    it("Shows a tooltip explaining one needs to login to support a proposal", function() {
      //pending
    });
  });
});
