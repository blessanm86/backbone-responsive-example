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
  'pageTemplates'
], function($, _, Backbone, Handlebars, Router) {
  //console.log(_, Backbone, Handlebars);
  //console.log($.mobile.version);
  //var page = new HomeView();
  //page.$el.attr('data-role', 'page');
  ////page.render();
  //$('body').append(page.$el);
  //var transition = $.mobile.defaultPageTransition;
  //      // We don't want to slide the first page
  //      if (this.firstPage) {
  //          transition = 'none';
  //          this.firstPage = false;
  //      }
  //$.mobile.changePage( page.$el, { transition: 'slide', reverse:false, changeHash: false} );
  new Router();
  Backbone.history.start();
});