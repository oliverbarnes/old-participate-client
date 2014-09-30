import startApp from 'participate-frontend/tests/helpers/start-app';
import Resolver from 'participate-frontend/tests/helpers/resolver';

var App;

var expect = chai.expect;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

suite('Deleting an suggestion', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');                                                                                                                                                                                                                
  }
});

test('Successfully', function(){
  visit('/initiatives/1').then(function() {
    expect($("button:contains('Delete')").length).to.equal(3);
    expect(find('.suggestion').first().text()).to.equal("Make sure there\'s a doctor available for house calls");
    click( $("button:contains('Delete')").first()).then(function() {
      expect(currentURL()).to.equal('/initiatives/1');
      expect($("button:contains('Delete')").length).to.equal(2);
      expect($("suggestion:contains('Make sure there\'s a doctor available for house calls')").length).to.equal(0);
    });
  });  
});