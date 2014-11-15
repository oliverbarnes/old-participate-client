import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Visiting an issue by url', function() {
  beforeEach(function(){
    App = startApp();
  });
  
  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('Successfully', function(){
    visit('/issues/1').then(function() {    
    //test that first issue expands
      expect(currentURL()).to.equal('/issues/1');
      expect( $("a:contains('What to do with the compensation money from the dam')").length ).to.equal(1);
      expect(find('.description').text()).to.equal("The construction company in charge of the dam will pay 10 million in compensation to the local affected population. What to do with it?");
      //test that visiting /issues page closes issue 1
      visit('/issues').then(function() {
        expect( $("a:contains('The construction company in charge of the dam will pay 10 million in compensation to the local affected population. What to do with it?')").length ).to.equal(0); 
      }); 
    }); 
  });
});