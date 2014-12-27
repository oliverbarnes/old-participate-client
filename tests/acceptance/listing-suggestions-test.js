import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Listing suggestions', function() {
  beforeEach(function(){
    App = startApp();
    visit('/initiatives/1');
  });
  
  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('the titles get displayed', function(){
    expect(find('.suggestion').first().text()).to.equal("Make sure there\'s a doctor available for house calls");
    expect(find('.suggestion').last().text()).to.equal("Collaborate with the neighbouring municipality to integrate services.");
  });
});