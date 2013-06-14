requirejs.config({
  baseUrl: 'scripts',
  paths: {
    'jquery': 'libs/jquery-1.8.3',
    'jquerymobile': 'libs/jquery-mobile-1.3.1',
    'underscore': 'libs/underscore-1.4.4',
    'backbone': 'libs/backbone-1.0.0',
    'handlebars': 'libs/handlebars-runtime',
    'enquire': 'libs/enquire-2.0.2'
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
  'controller',
  //'views/homeView',
  //'views/activityView',
  'globals',
  'events',
  'jquerymobile',
  'pageTemplates',
  'partialTemplates',
  'enquire'
], function($, _, Backbone, Handlebars, Controller,Globals) {
  Globals.controller = Controller;
  Globals.controller.start();
  Controller.goToHomePage();
  //Controller.goToHomePage(HomeView);
  //Controller.goToActivityPage(ActivityView, {user:'blessenm'});
  Backbone.history.start();
});