import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('proposal-details', { path: '/proposal/:proposal_id' }, function() {
    this.route('new-suggestion');
  });
  this.route('new-proposal');
  this.route('counter-proposal', { path: '/counter-proposal/:proposal_id' });
  this.route('new-suggestion', { path: '/proposal/:proposal_id/new-suggestion' });
});

export default Router;
