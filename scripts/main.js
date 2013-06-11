requirejs.config({
  baseUrl: 'scripts',
  paths: {
    'jquery': 'libs/jquery-1.8.3',
    'jquerymobile': 'libs/jquery-mobile-1.3.1',
    'underscore': 'libs/underscore-1.4.4',
    'backbone': 'libs/backbone-1.0.0',
    'handlebars': 'libs/handlebars-runtime'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'handlebars': [],
    'jquerymobile': ['jquery']
  }
});

require([
  'jquery',  
  'underscore',
  'backbone',
  'handlebars',
  'jquerymobile'
], function($, _, Backbone, Handlebars) {
  console.log(_, Backbone, Handlebars);
  console.log($.mobile.version);
  
  $(document).on("mobileinit", function () {
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
  });
});