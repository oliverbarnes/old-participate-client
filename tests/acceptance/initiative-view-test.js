import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

describe('Viewing an initiative', function() {
  beforeEach(function(){
    App = startApp();
  });
  
  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('Successfully', function(){
    visit('/initiatives').then(function() {
      click( $("a:contains('Public health clinic')") ).then(function() {
        expect(currentURL()).to.equal('/initiatives/1'); 
        expect(find('.issue_title').text()).to.equal('For issue: What to do with the compensation money from the dam\'s impact?');
        expect(find('.description').text()).to.equal('Allocate compensation money to create a local public health clinic');
        expect( $("a:contains('Support it!')").length ).to.equal(1);
        expect(find('.new_suggestion').text()).to.equal('(by supporters)');
      });
    });
  });  
});