/* jshint expr:true */
import Ember from 'ember';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import page from '../pages/proposal';
import loginPage from '../pages/login';
import { authenticateSession, invalidateSession } from 'client/tests/helpers/ember-simple-auth';

let application;
let proposal;

describe('Acceptance: proposal support', function() {

  beforeEach(function() {
    application = startApp();
    authenticateSession(application, {});
  });

  afterEach(function() {
    invalidateSession(application);
    Ember.run(application, 'destroy');
  });

  describe('giving', function(){
    // beforeEach(function(){
    // });

    // describe('from clean slate', function(){
      it('changes support button state to "Backing"', function(){
        page.visit({ id: proposal.id });

        andThen(() => {
          expect(currentPath()).to.equal('proposal-details');
        });
      });
    // });

    // describe('after delegation of support', function(){
    //   it('changes delegate select back to unselected', function(){
    //   });
    // });
  });

  // describe('removing', function(){
  //   beforeEach(function(){
  //   });

  //   it('changes support button state to "Add support"', function(){
  //   });
  // });
});
