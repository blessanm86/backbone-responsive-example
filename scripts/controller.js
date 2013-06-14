define([
  'jquerymobile',
  'views/homeView',
  'views/activityView'
], function($mobile, HomeView, ActivityView) {
  var Controller = {
    firstPage: true,
    isPhone: false,
    start: function() {
      var me = this;
      enquire.register('all and (max-width: 599px)', {
        match: function() {
          me.isPhone = true;
          console.log('sdfds');
        }
      });
      enquire.unregister('all and (max-width: 599px)');
    },
    goToHomePage: function() {
      this.changePage(new HomeView(), 'home-page');
    },
    goToActivityPage: function(options) {
      this.isPhone? this.changePage(new ActivityView({user: options.user}), 'activity-page') : new ActivityView(options);      
    },
    goToRepoPage: function(page, options) {
      new page(options);
    },
    changePage: function(page, id, reverse, transition) {
      reverse = reverse? reverse: false;
      transition = transition? transition: 'slide';
        
      page.$el.attr('data-role', 'page');
      page.$el.attr('id', id);
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