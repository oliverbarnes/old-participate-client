import startApp from 'participate-frontend/tests/helpers/start-app';
import Resolver from 'participate-frontend/tests/helpers/resolver';

var App;

var expect = chai.expect

suite('Making a suggestion to an initiative', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Successfully', function(){
  visit('/initiatives/fixture-0').then(function() {
    click( $("a:contains('Make a suggestion')") ).then(function() {
      expect(currentURL()).to.equal('/initiatives/fixture-0/suggestions/new');
      fillIn('div.suggestions', 'Create a kickstarter campaign to get the funds.');
      click('form input[type=submit]').then(function() {
        expect(currentPath()).to.equal('suggestions.show');
        expect(find('.description').text()).to.equal('Create a kickstarter campaign to get the funds.');
      });
    });
  });
});
