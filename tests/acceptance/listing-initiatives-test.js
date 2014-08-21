import startApp from 'participate-frontend/tests/helpers/start-app';
import Resolver from 'participate-frontend/tests/helpers/resolver';

var App;

var expect = chai.expect

suite('Listing initiatives', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Successfully', function(){
  visit('/initiatives').then(function() {
    expect(find('.initiative').first().text()).to.equal("Public health clinic");
    expect(find('.initiative').last().text()).to.equal("Public library upgrade");
  });
});