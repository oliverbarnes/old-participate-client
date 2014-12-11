import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Posting an initiative', function() {
  beforeEach(function(){
    App = startApp();
    visit('/');
    click( $("a:contains('Start a new initiative')") );
  });
  
  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  describe('before posting', function() {
    it('the submit button is disabled', function() {
      expect($(':submit').attr('disabled')).to.equal('disabled');
    });

    it('url path is /initiatives/new', function() {
      expect(currentURL()).to.equal('/initiatives/new');
    });
  });

  describe('when the initiative is valid', function() {
    beforeEach(function() {
      fillIn('div.title input', 'Public health clinic');
      fillIn('div.description textarea', 'Allocate compensation money to create a local public health clinic');
      fillIn('div.issue_title input', "What to do with the compensation money from the dam's impact?");
      fillIn('div.issue_description textarea', "The contruction company in charge of the dam will pay 10 million in compensation to the local affected population. What to do with it?");      
      click('form input[type=submit]');
    });

    it('current path is initiatives.initiative.index', function() {
      expect(currentPath()).to.equal('initiatives.initiative.index');
    });

    it('the title is displayed', function() {
      expect(find('.title').text()).to.equal('Public health clinic');
    });

    it('the description is displayed', function() {
      expect(find('.description').text()).to.equal('Allocate compensation money to create a local public health clinic');             
    });

    it('the issue title is displayed', function() {
      expect(find('.issue_title').text()).to.equal("For issue: What to do with the compensation money from the dam's impact?");      
    });
  });

  describe('With the title missing', function(){
    it('an error is shown next to the title field', function() {
      expect(find('div.fieldWithErrors .error').text()).to.equal('');
      triggerEvent('div.title input', 'blur').then(function() {
        expect(find('div.fieldWithErrors .error').text()).to.equal("can't be blank");
      });
    });
  });

  describe('With the description missing', function(){
    it('an error is shown next to the description field', function() {
      expect(find('div.fieldWithErrors .error').text()).to.equal('');
      triggerEvent('div.description textarea', 'blur').then(function() {
        expect(find('div.fieldWithErrors .error').text()).to.equal("can't be blank");
      });
    });
  });
});
