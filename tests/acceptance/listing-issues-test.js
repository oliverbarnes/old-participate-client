import startApp from 'participate-frontend/tests/helpers/start-app';
import Resolver from 'participate-frontend/tests/helpers/resolver';

var App;

var expect = chai.expect

suite('Listing issues', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Successfully', function(){
  visit('/issues').then(function() {
    expect(find('.issue').first().text()).to.equal("What to do with the compensation money from the dam's impact?");
    expect(find('.issue').last().text()).to.equal("What to do with the industrial wastelands next to the lake?");
  });
});