import startApp from 'participate-frontend/tests/helpers/start-app';
import Resolver from 'participate-frontend/tests/helpers/resolver';

var App;

var expect = chai.expect

suite('Initiative support', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Adding support', function(){
  visit('/initiatives/1').then(function() {
    click( $("a:contains('Support this initiative')") ).then(function() {
      expect(currentURL()).to.equal('/initiatives/1');
      expect(find('.support').text()).to.equal('Remove support for this initiative');
      expect(find('.new_suggestion').text()).to.equal('Make a suggestion');     
    });
  });
});


test('Removing support ', function(){
  visit('/initiatives/1').then(function() {
    click( $("a:contains('Support this initiative')") ).then(function() {
      click( $("a:contains('Make a suggestion')") ).then(function() {
        click( $("a:contains('Remove support for this initiative')") ).then(function() {
          expect($("textarea").length).to.equal(0);
          expect(currentURL()).to.equal('/initiatives/1');
          expect( $("a:contains('Make a suggestion')").length ).to.equal(0);
        });
      });
    });
  });
});
