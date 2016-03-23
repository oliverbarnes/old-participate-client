/* jshint expr:true */
import Ember from 'ember';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import MockFacebookOauth2 from '../helpers/mock-facebook-oauth2';
import page from '../pages/proposal';
import loginPage from '../pages/login';

let application;
let proposal;

describe('Acceptance: proposal support', function() {

  beforeEach(function() {
    application = startApp();
    application.register('torii-provider:facebook-oauth2', MockFacebookOauth2);
    server.create('participant', { id: 1 }),
    proposal = server.create('proposal');
    return loginPage.visit().clickLogin().clickLoginWithFacebook();
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  describe('giving', function(){
    // beforeEach(function(){
    // });

    // describe('from clean slate', function(){
      it('changes support button state to "Backing"', function(){
        page.visit();

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
