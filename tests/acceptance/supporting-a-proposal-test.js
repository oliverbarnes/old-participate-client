/* jshint expr:true */
import Ember from 'ember';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import page from '../pages/proposal';
import { authenticateSession, invalidateSession } from 'client/tests/helpers/ember-simple-auth';

let application;
let proposal;

describe('Acceptance: proposal support', function() {

  beforeEach(function() {
    application = startApp();
    server.create('participant');
    proposal = server.create('proposal');
    authenticateSession(application, {access_token: 'token'});
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  describe('giving support', function(){
    beforeEach(function(){
      page.visit({ id: proposal.id });
    });

    it('transitions to proposal details"', function(){
      expect(currentPath()).to.equal('proposal-details.index');
    });

    describe('from clean slate', function(){
      describe('clicking "Add your support"', function(){
        it('changes support button state to "Backing"', function(){
          page.addSupport();

          andThen(function() {
            expect(page.supportButtonText).to.equal('Backing');
          });
        });
      });
    });

    describe('after delegation of support', function(){
      beforeEach(function(){
        server.create('participant', { name: 'Edward Snowden'});
        page.visit({ id: proposal.id });
      });
      
      it('changes support button text', function(){
        page.selectDelegate('Edward Snowden');
  
        andThen(function() {
          expect(page.supportButtonText).to.equal('Support delegated to');
        });
      });
    });
  });

  // describe('when support was previously given', function(){
  //   beforeEach(function(){
  //   });

  //   it('changes support button state to "Add support"', function(){
  //   });
  // });
});
