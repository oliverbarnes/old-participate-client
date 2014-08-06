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

test('Successfullyyy', function(){
  visit('/initiatives/fixture-0').then(function() {
   	click( $("a:contains('Support this initiative')") ).then(function() {
      expect(currentURL()).to.equal('/initiatives/fixture-0');
      expect(find('.support').text()).to.equal('Remove Support for this initiative');
      //expect( $("a:contains('I support this')") ).to.equal( $("a:contains('I support this')") );
      //expect( $("I support this").to.equal('I support this');
   		
   		});
   });


 });