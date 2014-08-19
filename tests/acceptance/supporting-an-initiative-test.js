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
  // visit('/initiatives/1').then(function() {
  //   click( $("a:contains('Support this initiative')") ).then(function() {
  //     expect(currentURL()).to.equal('/initiatives/1');
  //     expect(find('.support').text()).to.equal('Remove support for this initiative');
  //     click( $("a:contains('Remove support for this initiative')") ).then(function() {
  //       expect(currentURL()).to.equal('/initiatives/1');
  //       expect(find('.support').text()).to.equal('Support this initiative');
  //     });
  //   });
  // });
});
