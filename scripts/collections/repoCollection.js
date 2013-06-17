define([
  'backbone',
  'models/repoModel'
], function(Backbone, RepoModel) {
  var RepoCollection = Backbone.Collection.extend({
    model: RepoModel,
    url: function() {
      return 'https://api.github.com/users/'+this.user+'/repos';
    },
    initialize: function(models, options) {
      this.user = options.user;
    }
  });
  
  return RepoCollection;
});