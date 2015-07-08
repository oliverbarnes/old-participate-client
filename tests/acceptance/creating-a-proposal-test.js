/* jshint expr:true */
import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;
var server;

describe('Creating a proposal', function() {
  beforeEach(function(done) {
    App = startApp();
    server = new Pretender(function() {
      this.post('/proposals', function(request) {
        return [200, { 'Content-Type': 'application/json' }, JSON.stringify({ data: {} })];
      });
    });
    // authenticateSession();
    visit('/proposals/new');
  });

  afterEach(function() {
    Ember.run(App, 'destroy');
    Ember.tryInvoke(server, 'shutdown');
  });

  it('opens the new proposal page ', function() {
    expect(currentRouteName()).to.eql('proposals.new');
  });
});
