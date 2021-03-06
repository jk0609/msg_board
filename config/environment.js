/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'msg-board',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    firebase: {
      apiKey: "AIzaSyDfwNVs3NhJf1mjSJFu8pTUbHzhJukKVa8",
      authDomain: "msgboard-fd4b5.firebaseapp.com",
      databaseURL: "https://msgboard-fd4b5.firebaseio.com",
      projectId: "msgboard-fd4b5",
      storageBucket: "msgboard-fd4b5.appspot.com",
      messagingSenderId: "971941910755"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    googleFonts: [
      'Anton',
    ],

    // Set or update content security policies
    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' fonts.googleapis.com"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
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
