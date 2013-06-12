requirejs.config({
  baseUrl: 'scripts',
  paths: {
    'jquery': 'libs/jquery-1.8.3',
    'jquerymobile': 'libs/jquery-mobile-1.3.1',
    'underscore': 'libs/underscore-1.4.4',
    'backbone': 'libs/backbone-1.0.0',
    'handlebars': 'libs/handlebars-runtime',
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'handlebars': []
  }
});

require([
  'jquery',  
  'underscore',
  'backbone',
  'handlebars',
  'router',
  'events',
  'jquerymobile',
  'pageTemplates',
  'partialTemplates'
], function($, _, Backbone, Handlebars, Router) {
  new Router();
  Backbone.history.start();
});