define([
  'backbone',
  'handlebars',
  'globals',
  'models/userModel',
  'views/activityView',
  'views/repoView'
], function(Backbone, Handlebars, Globals, UserModel, ActivityView, RepoView) {
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
      return this;
    },
    findUser: function(evt) {
      evt.preventDefault();      
      this.model = new UserModel({id: this.input.val()});
      this.listenToOnce(this.model, 'sync', this.showAdditionalButtons);
      this.model.fetch();
    },
    showAdditionalButtons: function() {
      if(this.model.has('username')) {
        this.avatar.attr('src','http://www.gravatar.com/avatar/'+this.model.get('gravatar_id')+'?s=200');
        this.avatarContainer.slideDown();
      } else {
        this.avatarContainer.slideUp('slow', function() {
          alert('No User Found');
        });
      }
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