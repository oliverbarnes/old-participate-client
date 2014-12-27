import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Initiative support', function() {
  beforeEach(function(){
    App = startApp();
  });
  
  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  describe('Adding support', function(){
    beforeEach(function(){
      visit('/initiatives/1').then(function() {
        click( $("a:contains('Support it!')") );             
      });
    });

    it('replaces support link with a link to remove support', function() {
      expect(find('.support').text()).to.equal('Remove support');
    });

    it('shows the link to make a suggestion', function() {
      expect(find('.new_suggestion').text()).to.equal('Make a suggestion');
    });
  });

  describe('Removing support ', function(){
    beforeEach(function(){
      visit('/initiatives/1').then(function() {
        click( $("a:contains('Support it!')") ).then(function() {
          click( $("a:contains('Make a suggestion')") ).then(function() {
            click( $("a:contains('Remove support')") );            
          });
        });
      });
    });

    it('shows a confirmation modal', function() {
      expect(find('.alert').text()).to.equal('Are you sure to remove? You cannot make suggestions after removing support!');
      expect(find('.yes').text()).to.equal('Yes');
      expect(find('.cancel').text()).to.equal('Cancel');
    });

    describe('Confirming removal', function(){
      beforeEach(function(){
        click( $("button:contains('Yes')") );
      });

      it('transitions back to /initiatives/:id', function() {
        expect(currentURL()).to.equal('/initiatives/1');
      });

      it('shows the link to support the initiative', function() {
        expect( $("a:contains('Support it!')").length ).to.equal(1);
      });

      it('hides the modal', function() {
        expect(find('.alert').length).to.equal(0);
        expect(find('.yes').length).to.equal(0);
        expect(find('.cancel').length).to.equal(0);
      });
    });

    describe('Cancelling removal', function(){
      beforeEach(function(){
        click( $("button:contains('Cancel')") );
      });
 
      it("doesn't change anything", function() {
        expect(find('.support').text()).to.equal('Remove support');
        expect(find('.new_suggestion').text()).to.equal('Make a suggestion');
      });
 
      it('hides the modal', function() {
        expect(find('.support').text()).to.equal('Remove support');
        expect(find('.yes').length).to.equal(0);
        expect(find('.cancel').length).to.equal(0);
      });
    });
  });
});
