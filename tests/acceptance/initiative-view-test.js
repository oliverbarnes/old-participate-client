import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

describe('Viewing an initiative', function() {
  beforeEach(function(){
    App = startApp();
    visit('/initiatives').then(function() { 
      click( $("a:contains('Public health clinic')") );
    });
  });
  
  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('transitions to /initiatives/:id', function(){
    expect(currentURL()).to.equal('/initiatives/1'); 
  });

  it('the initiative issue title gets displayed', function () {
    expect(find('.issue_title').text()).to.equal('For issue: What to do with the compensation money from the dam\'s impact?');    
  });

  it('the description gets displayed', function() {
    expect(find('.description').text()).to.equal('Allocate compensation money to create a local public health clinic');            
  });        

  it('a link to support it gets displayed', function() {
    expect( $("a:contains('Support it!')").length ).to.equal(1);
  });
        
  it('a note that suggestions are only by supporters is shown', function() {
    expect(find('.new_suggestion').text()).to.equal('(by supporters)');
  });        
});