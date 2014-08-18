import startApp from 'participate-frontend/tests/helpers/start-app';
import Resolver from 'participate-frontend/tests/helpers/resolver';

var App;

var expect = chai.expect

suite('Support validation', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Successfully', function(){
  visit('/initiatives/1').then(function() {
    expect(find('.supportValidation').text()).to.equal('Note: To make suggestions for a initiative, you must first support this initiative');
    click( $("a:contains('Make a suggestion')") ).then(function() {
      expect($(':submit').attr('disabled')).to.equal('disabled');
      // expect(currentURL()).to.equal('/suggestions/new');
      expect(currentURL()).to.equal('/initiatives/1/suggestions/new'); // /initiatives/show.. not work
      expect(find('.supportValidation').text()).to.equal('Make a suggestion');
      //fillIn('div.description textarea', 'Create a kickstarter campaign to get the funds.');
      click('form input[type=submit]').then(function() {
        expect(currentPath()).to.equal('suggestions.show');
        //expect(find('.description').text()).to.equal('Create a kickstarter campaign to get the funds.');
      });
    });
    // how to test outlet??
    // how to test listing suggestions??
  });
});