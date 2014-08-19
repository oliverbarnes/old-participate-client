import startApp from 'participate-frontend/tests/helpers/start-app';
import Resolver from 'participate-frontend/tests/helpers/resolver';

var App;

var expect = chai.expect

suite('Supporting an initiative', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Successfully', function(){
  // Test bug: https://github.com/oliverbarnes/participate-frontend/issues/34
  visit('/initiatives/1').then(function() {
    expect(find('.new_suggestion').text()).to.equal('Note: To make suggestions for an initiative, you must first support it');
    click( $("a:contains('Support this initiative')") ).then(function() {
      expect(currentURL()).to.equal('/initiatives/1');
      // Test remove text 
      expect(find('.support').text()).to.equal('Remove support for this initiative');
      // Test make a suggestion text 
      expect(find('.new_suggestion').text()).to.equal('Make a suggestion');
      // Here the Make a suggestion text must be put in front of the test of remove link, if below the remove link test
      // AssertionError: expected 'Note: To make suggestions for an initiative, you must first support it' to equal 'Make a suggestion'

      //Test remove click
      click( $("a:contains('Remove support for this initiative')") ).then(function() {
        expect(currentURL()).to.equal('/initiatives/1');
        expect(find('.support').text()).to.equal('Support this initiative');
        expect(find('.new_suggestion').text()).to.equal('Note: To make suggestions for an initiative, you must first support it');
      });
      
      // Test make a suggestion link 
      //expect(find('.new_suggestion').text()).to.equal('Make a suggestion'); // order matters
      // click( $("a:contains('Make a suggestion')") ).then(function() {
      //   //expect(currentURL()).to.equal('/initiatives/1/suggestions/new');
      //   //expect($(':submit').attr('disabled')).to.equal('disabled'); // AssertionError: expected undefined to equal 'disabled'
      // });
      // One tricky thing here is that one part of test code breaks another part of code. If i write click test for the remove i cannot write click test for making suggestion, 
      // If i write click test for suggestion then the remove one breaks. Also like one test file breaks another test file.
    });
  });
});
