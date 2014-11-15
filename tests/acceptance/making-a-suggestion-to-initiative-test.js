import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Making a suggestion', function() {
  beforeEach(function(){
    App = startApp();
  });
  
  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('To a supported initiative, successfully', function(){
    visit('/initiatives/1').then(function() {
      click( $("a:contains('Support it!')") ).then(function() {
        click( $("a:contains('Make a suggestion')") ).then(function() {
          expect($(':submit').attr('disabled')).to.equal('disabled');
          expect(currentURL()).to.equal('/initiatives/1/suggestions/new');
          fillIn('div.details textarea', "Make sure there's a doctor available for house calls");
          click('form input[type=submit]').then(function() {
            expect(currentURL()).to.equal('/initiatives/1');
            expect(find('.suggestion').first().text()).to.equal("Make sure there's a doctor available for house calls");
          });
        });
      });
    });
  });
});

//   it('To a unsupported initiative', function(){
//     visit('/initiatives/1').then(function() {
//     expect( $("a:contains('Make a suggestion')").length ).to.equal(0);
//     expect(find('.new_suggestion').text()).to.equal('(by supporters)');
//   });
//   visit('/initiatives/1/suggestions/new').then(function() {
//     expect(currentURL()).to.equal('/initiatives/1');
//     expect( $("a:contains('Make a suggestion')").length ).to.equal(0);
//     expect(find('.new_suggestion').text()).to.equal('(by supporters)');
//     expect($("textarea").length).to.equal(0);
//   });
// });