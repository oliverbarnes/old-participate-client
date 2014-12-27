import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Making a suggestion to an initiative', function() {
  beforeEach(function(){
    App = startApp();
    visit('/initiatives/1');
  });
  
  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  describe('To a supported initiative', function(){
    beforeEach(function(){
      click( $("a:contains('Support it!')") ).then(function(){
        click( $("a:contains('Make a suggestion')") );              
      });
    });

    it('transitions to /initiatives/:id/suggestions/new', function() {
      expect(currentURL()).to.equal('/initiatives/1/suggestions/new');
    });

    it('before filling in the suggestion, the submit button is disabled', function() {
      expect($(':submit').attr('disabled')).to.equal('disabled');      
    });

    it('transitions to /initiatives/:id', function() {
      fillIn('div.details textarea', "Make sure there's a doctor available for house calls");
      click('form input[type=submit]').then(function(){
        expect(currentURL()).to.equal('/initiatives/1');
      });
    });

    it('the posted suggestion gets displayed', function() {          
      fillIn('div.details textarea', "Make sure there's a doctor available for house calls");
      click('form input[type=submit]').then(function(){
        expect(find('.suggestion').first().text()).to.equal("Make sure there's a doctor available for house calls");
      });
    });
  });

  describe('To a unsupported initiative', function(){
    it('link to make a suggestion doesnt get shown', function() {
      expect( $("a:contains('Make a suggestion')").length ).to.equal(0);  
    });
    
    it('note that only supporters can make suggestions gets displayed', function(){
      expect(find('.new_suggestion').text()).to.equal('(by supporters)');
    });

    it('suggestion field doesnt get displayed', function() {
      expect($("textarea").length).to.equal(0);      
    });
  });

  //Note: should this go on a separate test for routing?
  describe('trying to visit /initiatives/:id/suggestions/new directly', function(){
    beforeEach(function(){
      visit('/initiatives/1/suggestions/new');
    });

    it('transitions back to /initiatives/:id', function() {
      expect(currentURL()).to.equal('/initiatives/1');
    });
    
    it('link to make a suggestion doesnt get shown', function() {
      expect( $("a:contains('Make a suggestion')").length ).to.equal(0);  
    });
    
    it('note that only supporters can make suggestions gets displayed', function(){
      expect(find('.new_suggestion').text()).to.equal('(by supporters)');
    });

    it('suggestion field doesnt get displayed', function() {
      expect($("textarea").length).to.equal(0);      
    });
  });
});