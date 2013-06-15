define([
  'backbone',
  'models/activityModel'
], function(Backbone, ActivityModel) {
  var activityCollection = Backbone.Collection.extend({
    model: ActivityModel,
    url: function() {
      return 'https://api.github.com/users/'+this.user+'/events';
    },
    initialize: function(models, options) {
      this.user = options.user;
    }
  });
  
  return activityCollection;
});