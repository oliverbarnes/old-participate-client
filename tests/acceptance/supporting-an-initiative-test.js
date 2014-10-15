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
    click( $("a:contains('Support it!')") ).then(function() {
      expect(currentURL()).to.equal('/initiatives/1');
      expect(find('.support').text()).to.equal('Remove support');
      expect(find('.new_suggestion').text()).to.equal('Make a suggestion');     
    });
  });
});


test('Removing support ', function(){
  visit('/initiatives/1').then(function() {
    click( $("a:contains('Support it!')") ).then(function() {
      click( $("a:contains('Make a suggestion')") ).then(function() {
        expect(currentURL()).to.equal('/initiatives/1/suggestions/new');
         click( $("a:contains('Remove support')") ).then(function() {
          expect(find('.alert').text()).to.equal('Are you sure to remove? You cannot make suggestions after removing support!');
          expect(find('.yes').text()).to.equal('Yes');
          expect(find('.cancel').text()).to.equal('Cancel');
          click( $("button:contains('Yes')") ).then(function() {
            expect(currentURL()).to.equal('/initiatives/1');
            expect( $("a:contains('Support it!')").length ).to.equal(1);
          });
         });
      });
    });
  });
});

test('Canceling support removal ', function(){
  visit('/initiatives/1').then(function() {
    click( $("a:contains('Support it!')") ).then(function() {
      click( $("a:contains('Make a suggestion')") ).then(function() {
        click( $("a:contains('Remove support')") ).then(function() {
          click( $("button:contains('Cancel')") ).then(function() {
            expect(currentURL()).to.equal('/initiatives/1/suggestions/new');
            expect($("textarea").length).to.equal(1);
          });
        });
      });
    });
  });
});