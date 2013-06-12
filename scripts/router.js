define([
  'jquery',
  'backbone',
  'jquerymobile',
  'views/homeView'
], function($, Backbone, $mobile, HomeView) {

  var Router = Backbone.Router.extend({
    routes : {
    '': 'goToHome',
    },
    initialize : function() {
      this.firstPage = true;
    },
    goToHome: function() {
      this.changePage(new HomeView());
    },
    changePage : function(page,reverse, transition) {
      reverse = reverse? reverse: false;
      transition = transition? transition: 'slide';
      
      page.$el.attr('data-role', 'page');
      $('body').append(page.$el);
      
      if(this.firstPage) {
          transition = 'none';
          this.firstPage = false;
      }
      
      $mobile.changePage(page.$el, {
          changeHash : false,
          transition : transition,
          reverse : reverse
      });
    }
  });

  return Router;
}); 
