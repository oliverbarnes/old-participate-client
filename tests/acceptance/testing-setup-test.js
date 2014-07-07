import startApp from 'participate-frontend/tests/helpers/start-app';
import Resolver from 'participate-frontend/tests/helpers/resolver';

var App;

// only TDD-style tests working for now (ie no describe() nor it())
suite('Testing setup', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Mocha, Chai and page interaction', function(){
  visit('/');

  chai.expect(1+1).to.equal(2);

  var page = $(App.rootElement)
  chai.expect(page.find('.ember-application')).to.exist;
});
