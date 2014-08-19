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
  // visit('/initiatives/1').then(function() {
    // click( $("a:contains('Make a suggestion')") ).then(function() {
    //   expect(currentURL()).to.equal('/initiatives/1/suggestions/new');
    //   fillIn('div.details textarea', "Make sure there's a doctor available for house calls");
    //   click('form input[type=submit]').then(function() {
    //     expect(currentURL()).to.equal('/initiatives/1/suggestions');
    //     expect(find('.suggestion').first().text()).to.equal("Make sure there's a doctor available for house calls");
    //   });
    // });
  // });
});
