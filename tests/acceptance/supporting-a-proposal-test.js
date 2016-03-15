/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';
import page from '../pages/proposal';

let application;
let proposal;

describe('Acceptance: proposal support', function() {

  beforeEach(function() {
    application = startApp();
    server.create('participant', { id: 1 }),
    proposal = server.create('proposal');
    visit('/');
    return click('.js-login-btn').then(function() {
      return click('.js-facebook-login-btn').then(function() {
        return page.visit(proposal.id);
      });
    });
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  describe('giving', function(){
    beforeEach(function(){
    });

    describe('from clean slate', function(){
      it('changes support button state to "Backing"', function(){
        return andThen(() => {
          expect(currentPath()).to.equal('proposal-details');
        });
      });
    });

    describe('after delegation of support', function(){
      it('changes delegate select back to unselected', function(){
      });
    });
  });

  describe('removing', function(){
    beforeEach(function(){
    });

    it('changes support button state to "Add support"', function(){
    });
  });
});
