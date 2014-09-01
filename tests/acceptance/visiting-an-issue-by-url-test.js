import startApp from 'participate-frontend/tests/helpers/start-app';
import Resolver from 'participate-frontend/tests/helpers/resolver';

var App;

var expect = chai.expect

suite('Visiting an issue by url', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Successfully', function(){
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