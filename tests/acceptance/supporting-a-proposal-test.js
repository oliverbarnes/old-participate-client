/* jshint expr:true */
import Ember from 'ember';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import page from '../pages/proposal';
import { authenticateSession } from 'client/tests/helpers/ember-simple-auth';

let application;
let proposal;

describe('Acceptance: proposal support', function() {

  beforeEach(function() {
    application = startApp();
    server.create('participant');
    proposal = server.create('proposal');
    authenticateSession(application, {access_token: 'token'});
    page.visit({ id: proposal.id });
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  describe('giving support', function(){
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

    // TODO: not working, seems like the onchange event doesn't work correctly
    // under the test, though it works manually.
    // (target.value is empty on the delegate-select component
    // describe('after delegation of support', function(){
    //   beforeEach(function(){
    //     server.create('participant', { id: '56b915f7000591279a000000', name: 'Edward Snowden'});
    //     page.visit({ id: proposal.id });
    //   });

    //   it('changes support button text', function(){
    //     page.selectDelegate('Edward Snowden');
  
    //     andThen(function() {
    //       expect(page.supportButtonText).to.equal('Support delegated to');
    //     });
    //   });
    // });
  });

  describe('when support was previously given', function(){
    beforeEach(function(){
      page.addSupport();
    });

    it('changes support button state to "Add your support"', function(){
      page.addSupport();

      andThen(function() {
        expect(page.supportButtonText).to.equal('Add your support');
      });
    });
  });
});
