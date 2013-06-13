define([
  'backbone',
  'handlebars',
], function(Backbone, Handlebars) {
  var RepoView = Backbone.View.extend({
    template: Handlebars.templates.repo,
    events :function(){        
      var me = this,
        events = 'ontouchstart' in document ? {
          'touchstart #all-repos, #source-repos, #fork-repos': function(e){
            e.preventDefault();
            me.filterRepos();
          }
        } : {
          'click #all-repos, #source-repos, #fork-repos': 'filterRepos'
        };
        
      return events;
    },
    initialize: function(){
      this.getUserRepositories();
    },
    render: function() {
      this.$el.html(this.template(this.model));
      $(document).trigger('create');
      return this;
    },
    getUserRepositories: function() {
      var me = this,
          url = 'https://api.github.com/users/'+this.options.user+'/repos';
      $.get(url, function(data) {
        if (data.length) {
          me.model = me.modelBackUp = {repos:data};
          me.render();
        }
      });
    },
    filterRepos: function(evt) {
      var filters = {
        'source-repos': {fork: false},
        'fork-repos': {fork: true}
      }
      
      if (evt.target.id == 'all-repos') {
        this.model = {repos: this.modelBackUp.repos};
      } else {
        this.model = {repos: _.where(this.modelBackUp.repos,filters[evt.target.id])};
      }      
      this.render();
    }
  });
  
  return RepoView;
});