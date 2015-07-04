/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    torii: {
      providers: {
        'facebook-oauth2': {
          clientId: '1583083701926004'
        }
      }
    },

    'simple-auth': {
      authenticationRoute: 'session',
      authorizer: 'simple-auth-authorizer:oauth2-bearer',
      crossOriginWhitelist: ['http://localhost:3000'],
      routeAfterAuthentication: 'dashboard'
    },

    'simple-auth-oauth2': {
      serverTokenEndpoint: 'http://localhost:3000/tokens'
    }
  };

  ENV.contentSecurityPolicy = {
    'script-src':  "'self' 'unsafe-eval'",
    'style-src':   "'self' 'unsafe-inline'"
  }

  if (environment === 'development') {
    ENV.contentSecurityPolicy['connect-src'] = "'self' http://localhost:4200 http://localhost:3000";
    ENV.contentSecurityPolicy['default-src'] = "'self' http://localhost:4200";
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
