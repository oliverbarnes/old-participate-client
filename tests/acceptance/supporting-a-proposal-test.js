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
var meData = {
  'id': '21dadfad39ede62155f8a0222222',
  'attributes': {
    'name': 'Ada Lovelace'
  },
  'type': 'me',
  'links': {
    'self': 'http://www.example.com/me'
  }
};
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
var supportData =[
  {
    'id': '6754d39ede62155f8a0301923f',
    'type': 'supports',
    'relationships': {
      'participant': {
        'links': {
          'related': 'http://www.example.com/supports/6754d39ede62155f8a0301923f/participant',
          'self': 'http://www.example.com/supports/6754d39ede62155f8a0301923f/relationships/participant'
        }
      },
      'proposal': {
        'links': {
          'related': 'http://www.example.com/supports/6754d39ede62155f8a0301923f/proposal',
          'self': 'http://www.example.com/supports/6754d39ede62155f8a0301923f/relationships/proposal'
        }
      }
    },
    'links': {
      'self': 'http://www.example.com/supports/6754d39ede62155f8a0301923f'
    }
  }
];
var filter_params = "filter[proposal_id]=54d39ede62155f8a0301967z";
filter_params = filter_params + "&filter[participant_id]=21dadfad39ede62155f8a0222222";

describe('Acceptance: Supporting a proposal', function() {
  var application;
  var server;

  beforeEach(function() {
    application = startApp();
    server = new Pretender(function() {
      this.get('/proposals/54d39ede62155f8a0301967z', function() {
        return [200, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: proposalData })];
      });

      this.get('/me', function() {
        return [200, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: meData })];
      });

      this.get('/supports?' + filter_params, function() {
        return [200, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: [] })];
      });

      this.post('/proposals/54d39ede62155f8a0301967z/supports', function() {
        return [201, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: supportData })];
      });
    });

    authenticateSession();
    visit('/proposals/54d39ede62155f8a0301967z').then(function() {
      // click(SUPPORT_BUTTON_SELECTOR);
    });
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
    Ember.tryInvoke(server, 'shutdown');
  });

  it('adds a support resource to the proposal', function() {
    //
  });

  it("changes 'Support' button text to 'Supported'", function() {
    // expect(SUPPORT_BUTTON_SELECTOR.value).to.equal('Supported');
  });

  it("changes 'Support' button state to selected", function() {
    //to be defined how this is going to work
  });

  it("updates support count next to support button", function() {
    //to be defined how this is going to work
  });

  describe('when proposal is already supported', function(){
    beforeEach(function() {
      //make filtered supports endpoint return an existing support
    });

    it('deletes existing support', function() {
      //pending
    });
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
