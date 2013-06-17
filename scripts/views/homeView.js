define([
  'backbone',
  'handlebars',
  'globals',
  'views/activityView',
  'views/repoView'
], function(Backbone, Handlebars, Globals, ActivityView, RepoView) {
  var HomeView = Backbone.View.extend({
    template: Handlebars.templates.home(),
    attributes: {
      'id': 'home-page',
      'data-role': 'page'
    },
    events :function(){ 
      var me = this,
        events = 'ontouchstart' in document ? {
          'touchstart #find-user': function(e){            
            me.findUser();
          },
          'touchstart #get-user-activity': function(e){            
            me.getUserActivity();
          },
          'touchstart #get-user-repositores': function(e){            
            me.getUserRepositories();
          }
        } : {
          'click #find-user': 'findUser',
          'click #get-user-activity': 'getUserActivity',
          'click #get-user-repositores': 'getUserRepositories'
        };
        
      return events;
    },
    initialize: function(){
      this.render();
      this.input = this.$('#gh-username');
      this.avatar = this.$('#gh-avatar');
      this.avatarContainer = this.$('.avatar-container');
    },
    render: function() {      
      this.$el.html(this.template);
      //this.setElement(this.template);
      return this;
    },
    findUser: function(evt) {
      evt.preventDefault();
      var me = this,
          url = 'https://api.github.com/legacy/user/search/'+this.input.val();
      $.get(url, function(data) {
        if (data.users.length) {
          me.avatar.attr('src','http://www.gravatar.com/avatar/'+data.users[0].gravatar_id+'?s=200');
          me.avatarContainer.slideDown();
        } else {
          me.avatarContainer.slideUp('slow', function() {
              alert('No User Found'); 
          });          
        }
      });
    },
    getUserActivity: function(evt) {
      evt.preventDefault();
      Globals.controller.goToActivityPage({user: this.input.val(), el: '#events-container'});
    },
    getUserRepositories: function(evt) {
      evt.preventDefault();
      Globals.events.trigger("page:destroy", 'repo-category-page');
      Globals.events.trigger("page:destroy", 'repo-page');
      Globals.controller.goToRepoCategoryPage({user: this.input.val(), el: '#repos-category-container'});
    }
  });
  
  return HomeView;
});