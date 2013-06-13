define([
  'jquery',
  'backbone',
  'jquerymobile',
  'views/homeView'
], function($, Backbone, $mobile, HomeView) {

  var Router = Backbone.Router.extend({
    routes : {
      '': 'goToHomePage',
      'activity/:user': 'goToActivityPage'
    },
    initialize : function() {
      this.firstPage = true;
    },
    goToHomePage: function() {
      this.changePage(new HomeView());
    },
    goToActivityPage: function(user) {
      console.info(user);
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
