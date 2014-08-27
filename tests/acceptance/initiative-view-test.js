import startApp from 'participate-frontend/tests/helpers/start-app';
import Resolver from 'participate-frontend/tests/helpers/resolver';

var App;

var expect = chai.expect;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

suite('Viewing an initiative', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');                                                                                                                                                                                                                
  }
});

test('Successfully', function(){
  visit('/initiatives').then(function() {
    click( $("a:contains('Public health clinic')") ).then(function() {
      expect(currentURL()).to.equal('/initiatives/1'); 
      expect(find('.issue_title').text()).to.equal('Issue: What to do with the compensation money from the dam\'s impact?');
      expect(find('.description').text()).to.equal('Allocate compensation money to create a local public health clinic');
      expect( $("a:contains('Support this initiative')").length ).to.equal(1);
      expect(find('.new_suggestion').text()).to.equal('Note: To make suggestions for an initiative, you must first support it');
    });
  });  
});