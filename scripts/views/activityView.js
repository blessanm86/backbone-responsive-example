define([
  'backbone',
  'handlebars',
], function(Backbone, Handlebars) {
  var ActivityView = Backbone.View.extend({
    template: Handlebars.templates.activity,
    events :function(){        
      return {};
    },
    initialize: function(){
      //this.model = {events:[]};
      //this.render();
      this.getUserActivity();
    },
    render: function() {      
      this.$el.html(this.template(this.model));
      this.$el.trigger('pagecreate');
      return this;
    },
    getUserActivity: function() {
      var me = this,
          url = 'https://api.github.com/users/'+this.options.user+'/events';
      $.get(url, function(data) {
        if (data.length) {
          me.model = {events:data};
          me.render();
        }
      });
    }
  });
  
  return ActivityView;
});