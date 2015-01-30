import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Viewing an issue', function() {
  beforeEach(function(){
    App = startApp();
  });
  
  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  describe('from the issues list', function () {
    beforeEach(function(){
      visit('/issues').then(function() { 
        click( $("a:contains('How to solve rising youth unemployment?')") );
      });
    });

    it('transitions to /issues/:id', function(){
      expect(currentURL()).to.equal('/issues/2'); 
    });

    it('the issue title gets displayed', function () {
      expect(find('.title').text()).to.equal('How to solve rising youth unemployment?');    
    });

    it('the description gets displayed', function() {
      expect(find('.description').text()).to.equal('Youth unemployment in our community is high and continues to rise. How do we address this issue?');            
    });  

    // it('initiatives associated to the issue get displayed')      
  }); 

  describe('by visiting the url', function() {
    beforeEach(function(){
      visit('/issues/1');
    });

    it('transitions to /issues/:id', function(){
      expect(currentURL()).to.equal('/issues/1'); 
    });

    it('the issue title gets displayed', function () {
      expect(find('.title').text()).to.equal("What to do with the compensation money from the dam's impact?");    
    });

    it('the description gets displayed', function() {
      expect(find('.description').text()).to.equal('The construction company in charge of the dam will pay 10 million in compensation to the local affected population. What to do with it?');            
    }); 
  }); 
});