import startApp from 'participate-frontend/tests/helpers/start-app';
import Resolver from 'participate-frontend/tests/helpers/resolver';

var App;

var expect = chai.expect

suite('Viewing an issue', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Successfully', function(){
  visit('/issues').then(function() {    
    //test toggle of first issue and check that another description doesn't open
    click( $("a:contains('What to do with the compensation money from the dam')") ).then(function() {
      expect(currentURL()).to.equal('/issues');
      expect(find('.description').text()).to.equal("The construction company in charge of the dam will pay 10 million in compensation to the local affected population. What to do with it?");
      expect( $("a:contains('How to solve rising youth unemployment?')").length ).to.equal(1);
      expect( $("a:contains('Youth unemployment in our community is high and continues to rise. How do we address this issue?')").length ).to.equal(0);
    });
    //test that re-toggling first issue closes the description
    click( $("a:contains('What to do with the compensation money from the dam')") ).then(function() {
      expect(currentURL()).to.equal('/issues');
      expect(find('.issue').first().text()).to.equal("What to do with the compensation money from the dam\'s impact?");
      expect( $("a:contains('The construction company in charge of the dam will pay 10 million in compensation to the local affected population. What to do with it?')").length ).to.equal(0);
    });
  });

  visit('/issues').then(function() {
    //test toggle of second issue and check that another description doesn't open
    click( $("a:contains('How to solve rising youth unemployment?')") ).then(function() {
      expect(currentURL()).to.equal('/issues');
      expect(find('.description').text()).to.equal("Youth unemployment in our community is high and continues to rise. How do we address this issue?");
      expect( $("a:contains('What to do with the compensation money from the dam')").length ).to.equal(1);
      expect( $("a:contains('The construction company in charge of the dam will pay 10 million in compensation to the local affected population. What to do with it?')").length ).to.equal(0);
    });
    //test that re-toggling second issue closes the description
    click( $("a:contains('How to solve rising youth unemployment?')") ).then(function() {
      expect(currentURL()).to.equal('/issues');
      expect( $("a:contains('How to solve rising youth unemployment?')").length ).to.equal(1);
      expect( $("a:contains('Youth unemployment in our community is high and continues to rise. How do we address this issue?')").length ).to.equal(0);
    });
  });

  visit('/issues').then(function() {
    //test toggle of last issue and check that another description doesn't open
    click( $("a:contains('What to do with the industrial wastelands next to the lake?')") ).then(function() {
      expect(currentURL()).to.equal('/issues');
      expect(find('.description').text()).to.equal("All the sugar refineries next to the lake closed down decades ago but their buildings and lands remain abandoned. How could they be re-integrated for public use?");
      expect( $("a:contains('What to do with the compensation money from the dam')").length ).to.equal(1);
      expect( $("a:contains('The construction company in charge of the dam will pay 10 million in compensation to the local affected population. What to do with it?')").length ).to.equal(0);
    });
    //test that re-toggling last issue closes the description
    click( $("a:contains('What to do with the industrial wastelands next to the lake?')") ).then(function() {
      expect(currentURL()).to.equal('/issues');
      expect( $("a:contains('What to do with the industrial wastelands next to the lake?')").length ).to.equal(1);
      expect( $("a:contains('All the sugar refineries next to the lake closed down decades ago but their buildings and lands remain abandoned. How could they be re-integrated for public use?')").length ).to.equal(0);
    });
  });
});