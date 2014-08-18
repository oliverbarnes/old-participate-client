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
  visit('/').then(function() {
    click( $("a:contains('here')") ).then(function() {
      expect(currentURL()).to.equal('/initiatives');
      expect(find('.title').text()).to.equal('Public health clinic');
    });
  });
});
