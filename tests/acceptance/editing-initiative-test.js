import startApp from 'participate-frontend/tests/helpers/start-app';
import Resolver from 'participate-frontend/tests/helpers/resolver';

var App;

var expect = chai.expect

suite('Editing an initiative', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Successfully', function(){
  visit('/initiatives/1').then(function() { 
    click( $("a:contains('Edit initiative')") ).then(function() {
      expect(find('.title_name').text()).to.equal('Initiative title'); 
      expect(find('.title').text()).to.equal('Public health clinic');
      expect(find('.description_name').text()).to.equal('Initiative description');
      expect(find('.description').text()).to.equal('Allocate compensation money to create a local public health clinic');
      expect(find('.update').text()).to.equal('Update');
      expect(find('.cancel').text()).to.equal('Cancel');
    });
  });
});

test('Cancel edit', function(){
  visit('/initiatives/1').then(function() {
    click( $("a:contains('Edit initiative')") ).then(function() {
      click( $("button:contains('Cancel')") ).then(function() {
        expect(currentURL()).to.equal('/initiatives/1');
        expect(find('.title').text()).to.equal('Public health clinic');
        expect(find('.description').text()).to.equal('Allocate compensation money to create a local public health clinic');
      });
    });
  });
});

test('Update edit', function(){
  visit('/initiatives/1').then(function() {
    click( $("a:contains('Edit initiative')") ).then(function() {
      fillIn('div.title_value input', "Updated title");
      fillIn('div.description_value textarea', 'Updated description');
      click( $("button:contains('Update')") ).then(function() {
        expect(currentURL()).to.equal('/initiatives/1');
        expect(find('.title').text()).to.equal("Updated title");
        expect(find('.description').text()).to.equal('Updated description');
      });
    });
  });
});