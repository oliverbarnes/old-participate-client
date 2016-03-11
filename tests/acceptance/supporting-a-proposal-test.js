/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from 'tagged/tests/helpers/start-app';

describe('Acceptance: proposal support', function() {

  beforeEach(function() {
    application = startApp();
    //create participant from factory
    //create proposal from factory
    //login with facebook
    //visit proposal details 
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  describe('giving', function(){
    beforeEach(function(){
    });

    describe('from clean slate', function(){
      it('changes support button state to "Backing"', function(){
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
