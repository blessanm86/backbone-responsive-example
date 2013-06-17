define([
  'backbone',
  'handlebars',
  'globals',
  'views/baseView'
], function(Backbone, Handlebars, Globals, BaseView) {
  var RepoView = BaseView.extend({
    template: Handlebars.templates.repo,
    attributes: {
      'id': 'repo-page',
      'data-role': 'page',
      'data-dom-remove': true
    },
    events :function(){        
      var me = this,
        events = 'ontouchstart' in document ? {
          'touchstart #back-btn': function(e){
            me.goBackToHomePage();
          }
        } : {
          'click #back-btn': 'goBackToHomePage'
        };
        
      return events;
    },
    initialize: function(){
      this.pageData = {isPhone:Globals.controller.isPhone, repos: this.options.repos, header: 'Git Repos'};
      
      //This didnt work for some reason. So using on method.
      //this.listenTo(Globals.events, 'page:destry', this.close);
      Globals.events.on("page:destroy", this.close, this);
      
      this.render();
    },
    render: function() {
      this.$el.html(this.template(this.pageData));
      
      //JQM quirk - Need pagecreate event to get the headers and footers right.
      var event = Globals.controller.isPhone? 'pagecreate' : 'create';
      this.$el.trigger(event);
      return this;
    },
    goBackToHomePage: function(evt) {
      evt.preventDefault();
      Globals.controller.goToRepoCategoryPage();
    }
  });
  
  return RepoView;
});