import fetch from 'fetch';
import config from 'client/config/environment';

export default {
    name: 'fetch',
    initialize: function() {
    // HACK: this is to override the native fetch with ember-fetch.
    // ember-fetch play nicely with pretender
    if (config.environment === 'test') {
      window.fetch = fetch;
    }
  }
};
