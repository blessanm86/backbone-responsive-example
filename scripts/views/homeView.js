define([
  'backbone',
  'handlebars',
  'controller',
  'views/activityView',
  'views/repoView'
], function(Backbone, Handlebars, Controller, ActivityView, RepoView) {
  var HomeView = Backbone.View.extend({
    template: Handlebars.templates.home(),
    events :function(){ 
      var me = this,
        additionalEvents,
        events = 'ontouchstart' in document ? {
          'touchstart #find-user': function(e){
            e.preventDefault();
            me.findUser();
          },
          'touchstart #get-user-activity': function(e){
            e.preventDefault();
            me.getUserActivity();
          },
          'touchstart #get-user-repositores': function(e){
            e.preventDefault();
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
      return this;
    },
    findUser: function(){
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
    getUserActivity: function() {
      Controller.goToActivityPage(ActivityView,{user: this.input.val(), el: '#events-container'});
    },
    getUserRepositories: function() {
      Controller.goToRepoPage(RepoView,{user: this.input.val(), el: '#repos-container'});
    }
  });
  
  return HomeView;
});