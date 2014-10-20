import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Testing setup', function() {
  beforeEach(function() {
    App = startApp();
  });
  
  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('Runs Mocha, Chai and page interaction', function(){
    expect(1+1).to.equal(2);

    visit('/').then(function() {
      var page = $(App.rootElement);
      expect(page.find('.ember-application')).to.exist;
    });
  });
});
