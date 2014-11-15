import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Listing issues', function() {
  beforeEach(function(){
    App = startApp();
  });
  
  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('Successfully', function(){
    visit('/issues').then(function() {
      expect(find('.issue').first().text()).to.equal("What to do with the compensation money from the dam's impact?");
      expect(find('.issue').last().text()).to.equal("What to do with the industrial wastelands next to the lake?");
    });
  });
});