import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Listing suggestions', function() {
  beforeEach(function(){
    App = startApp();
  });
  
  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('Successfully', function(){
    visit('/initiatives/1').then(function() {
      expect(find('.suggestion').first().text()).to.equal("Make sure there\'s a doctor available for house calls");
      expect(find('.suggestion').last().text()).to.equal("Collaborate with the neighbouring municipality to integrate services.");
    });
    visit('/initiatives/2').then(function() {
      expect(find('.suggestion').text()).to.equal("Pay to ship the plastic to Sweden--it\'s cheaper than recycling it ourselves.");
    });
    visit('/initiatives/3').then(function() {
      expect(find('.nosuggestion').first().text()).to.equal("No suggestions made yet. Be the first to write one!");
    });
  });
});