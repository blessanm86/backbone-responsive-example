define([
  'backbone',
  'handlebars',
  'globals',
  'collections/repoCollection'
], function(Backbone, Handlebars, Globals, RepoCollection) {
  var RepoCategoryView = Backbone.View.extend({
    template: Handlebars.templates.repoCategory,
    attributes: {
      'id': 'repo-category-page',
      'data-role': 'page',
      'data-dom-remove': true
    },
    events :function(){        
      var me = this,
        events = 'ontouchstart' in document ? {
          'touchstart #all-repos, #source-repos, #fork-repos': function(e){
            me.filterRepos();
          },
          'touchstart #back-btn': function(e){
            me.goBackToHomePage();
          }
        } : {
          'click #all-repos, #source-repos, #fork-repos': 'filterRepos',
          'click #back-btn': 'goBackToHomePage'
        };
      
      return events;
    },
    initialize: function(){
      this.collection = new RepoCollection([],{user: this.options.user});
      this.pageData = {isPhone:Globals.controller.isPhone, header: 'Git Repo Categories'};
      
      //This didnt work for some reason. So using on method.
      //this.listenTo(Globals.events, 'page:destry', this.close);
      Globals.events.on("page:destroy", this.close, this);
      
      this.render();
      
      this.listenToOnce(this.collection, 'reset', this.render);
      this.collection.fetch({reset:true});
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
      Globals.controller.goToHomePage();
    },
    filterRepos: function(evt) {
      evt.preventDefault();
      var collection,
        filters = {
        'source-repos': {fork: false},
        'fork-repos': {fork: true}
      };

      if (evt.target.id == 'all-repos') {
        collection = this.collection.toJSON();
      } else {
        collection = _.where(this.collection.toJSON(),filters[evt.target.id]);
      }
      
      Globals.controller.goToRepoPage({repos: collection, el: '#repos-container'});
    },
    close: function(id) {
      if(id === this.attributes.id) {
        Globals.events.off('page:destroy',this.close);
        this.undelegateEvents();
        this.$el.removeData().unbind();
        if (Globals.controller.isPhone) {
          this.remove();
          Backbone.View.prototype.remove.call(this);
        } else {
          this.$el.empty();
        }
      }
    }
  });
  
  return RepoCategoryView;
});