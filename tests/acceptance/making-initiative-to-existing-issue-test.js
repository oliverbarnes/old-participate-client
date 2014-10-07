import startApp from 'participate-frontend/tests/helpers/start-app';
import Resolver from 'participate-frontend/tests/helpers/resolver';

var App;

var expect = chai.expect;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

suite('Making an initiative to an existing issue', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');                                                                                                                                                                                                                
  }
});

test('Successfully', function(){
  visit('/issues').then(function() {
    click( $("a:contains('What to do with the compensation money')") ).then(function() {
      click( $("a:contains('Start a new initiative for this issue')") ).then(function() {
        expect(currentURL()).to.equal('/initiatives/new'); 
        expect(find('.issue_title').text()).to.equal('Issue title: What to do with the compensation money from the dam\'s impact?');
        fillIn('div.title input', 'Public health clinic');
        fillIn('div.description textarea', 'Allocate compensation money to create a local public health clinic');
        click('form input[type=submit]').then(function() {
          // Ideally I'd prefer to:
          //   expect(currentURL()).to.equal('/initiatives/' + initiativeID);
          // but haven't found an ember equivalent of active record's Post.first.id,
          // nor a way to get at the local store and use store.all('initiative').objectAt(0).get('id').
          // Also can't get a record count yet
          expect(currentPath()).to.equal('initiatives.initiative.index');
          expect(find('.title').text()).to.equal('Public health clinic');
          expect(find('.issue_title').text()).to.equal("Issue: What to do with the compensation money from the dam's impact?");
          expect(find('.description').text()).to.equal('Allocate compensation money to create a local public health clinic');       
        });
      });

    });
  });  
});