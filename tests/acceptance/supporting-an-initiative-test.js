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
  visit('/initiatives/1').then(function() {
    expect(find('.new_suggestion').text()).to.equal('Note: To make suggestions for an initiative, you must first support it');
    click( $("a:contains('Support this initiative')") ).then(function() {
      expect(currentURL()).to.equal('/initiatives/1');
      expect(find('.support').text()).to.equal('Remove support for this initiative');
      expect(find('.new_suggestion').text()).to.equal('Make a suggestion');
      click( $("a:contains('Remove support for this initiative')") ).then(function() {
        expect(currentURL()).to.equal('/initiatives/1');
          expect(find('.support').text()).to.equal('Support this initiative');
          expect(find('.new_suggestion').text()).to.equal('Note: To make suggestions for an initiative, you must first support it');
      });      
    });
  });
});