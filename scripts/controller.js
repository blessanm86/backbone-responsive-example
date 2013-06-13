define([
  'jquerymobile'
], function($mobile) {
  var Controller = {
    firstPage: true,
    goToHomePage: function(page) {
      this.changePage(new page());
    },
    goToActivityPage: function(page, options) {
      new page(options);
    },
    goToRepoPage: function(page, options) {
      new page(options);
    },
    changePage: function(page, reverse, transition) {
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
  }
  
  return Controller;
});