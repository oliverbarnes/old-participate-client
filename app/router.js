import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('proposal-list');
  this.route('proposal-details', { path: '/proposal/:proposal_id' });
  this.route('new-proposal')
});

export default Router;
