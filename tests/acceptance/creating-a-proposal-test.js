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
import PO from '../page-object';
import AuthorizationMixin from 'ember-jsonapi-resources/mixins/authorization';

let App;
let server;
let new_proposal = PO.build({
  visit: PO.visitable('/proposals/new'),
  title: PO.fillable('.title'),
  body: PO.fillable('.body'),
  submit: PO.clickable('button[type="submit"]')
});
let proposalId = '54d39ede62155f8a0301967b';

describe('Creating a proposal', function() {

  beforeEach(function() {
    let createdProposalData;
    let includedResources;

    let authorId = '743d39ede62155f8a03011111';
    let authorName = 'Martin Fowler';

    App = startApp();
    server = new Pretender(function() {
      this.get('/me', function() {
        let response = JSON.stringify({ data: {
          id: authorId,
          type: 'me',
          attributes: {
            name: authorName
          },
          links: {
            self: 'http://www.example.com/me'
          }
        }});

        return [200, { 'Content-Type': 'application/vnd.api+json' }, response];
      });

      this.post('/proposals', function(request) {
        let requestBody = JSON.parse(request.requestBody);
        let postedData = requestBody.data.attributes;

        // TODO: add test that actually describes this scenario
        if (!postedData.title || !postedData.body) {
          return [422, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({})];
        }

        createdProposalData = {
          id: proposalId,
          type: 'proposals',
          attributes: {
            title: postedData.title,
            body: postedData.body
          },
          links: {
            self: 'http://www.example.com/proposals/' + proposalId
          },
          relationships: {
            author: {
              data: {
                id: authorId,
                type: 'authors'
              },
              links: {
                related: 'http://www.example.com/proposals/' + proposalId + '/author',
                self: 'http://www.example.com/proposals/' + proposalId + '/relationships/author'
              }
            },
            suggestions: {
              links: {
                related: 'http://www.example.com/proposals/' + proposalId + '/suggestions',
                self: 'http://www.example.com/proposals/' + proposalId + '/relationships/suggestions'
              }
            },
            supports: {
              links: {
                related: 'http://www.example.com/proposals/' + proposalId + '/supports',
                self: 'http://www.example.com/proposals/' + proposalId + '/relationships/supports'
              }
            }
          }
        };

        includedResources = [
          {
            attributes: {
              name: authorName
            },
            id: authorId,
            links: {
              self: 'http://www.example.com/authors/' + authorId
            },
            type: 'authors'
          }
        ];

        return [201, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: createdProposalData })];
      });

      this.get('/proposals/' + proposalId, function() {
        return [200, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: createdProposalData, included: includedResources })];
      });

      this.get('/supports', function() {
        return [200, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: [] })];
      });
    });

    AuthorizationMixin.reopen({
      authorizationCredential: 'Bearer access_token'
    });

    let session = currentSession();
    session.set('isAuthenticated', true);
    session.set('secure.access_token', 'access_token');
  });

  afterEach(function() {
    server.shutdown();
    Ember.run(App, 'destroy');
  });

  // it('create new proposal', function(done) {
  it('create new proposal', function() {
    new_proposal.visit()
      .title('Subsidize home cisterns')
      .body('Use city taxes to subsidize home cisterns to save water.')
      .submit();
    andThen(function() {
      // setTimeout(function() {
        expect(currentURL()).to.eql('/proposals/' + proposalId);
      //   done();
      // }, 1000);
    });
  });
});
