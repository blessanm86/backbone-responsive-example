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
        }
      });
      enquire.unregister('all and (max-width: 599px)');
    },
    goToHomePage: function() {
      //this.changePage(new HomeView(), 'home-page');
      //This checks if the view is already present. Needed when the back button is pressed from the activity or repo view.
      var opt = $('#home-page').length? {id: '#home-page',reverse: true} : {page: new HomeView()};
      this.changePage(opt);
    },
    goToActivityPage: function(options) {
      //this.isPhone? this.changePage(new ActivityView({user: options.user}), 'activity-page') : new ActivityView(options);
      this.isPhone? this.changePage({page: new ActivityView({user: options.user})})
          : {page: new ActivityView(options)};
    },
    goToRepoPage: function(page, options) {
      new page(options);
    },
    //changePage: function(page, id, reverse, transition) {
    //  reverse = reverse? reverse: false;
    //  transition = transition? transition: 'slide';
    //    
    //  page.$el.attr('data-role', 'page');
    //  page.$el.attr('id', id);
    //  $('body').append(page.$el);
    //  
    //  if(this.firstPage) {
    //      transition = 'none';
    //      this.firstPage = false;
    //  }
    //  
    //  $mobile.changePage(page.$el, {
    //      changeHash : false,
    //      transition : transition,
    //      reverse : reverse
    //  });
    //},
    changePage: function(options) {
      options.reverse = options.reverse? options.reverse: false;
      options.transition = options.transition? options.transition: 'slide';
      
      //If new page, add the data role, id and append to the body.
      if(options.page) { 
        //options.page.$el.attr('data-role', 'page');
        //options.page.$el.attr('id', options.id);
        $('body').append(options.page.$el);
      }
      
      if(this.firstPage) {
          options.transition = 'none';
          this.firstPage = false;
      }
      
      var to = options.page? options.page.$el : options.id;
      $mobile.changePage(to, {
          changeHash : false,
          transition : options.transition,
          reverse : options.reverse
      });
    }
  }
  
  return Controller;
});