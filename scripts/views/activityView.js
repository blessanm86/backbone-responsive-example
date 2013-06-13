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
      this.getUserActivity();
    },
    render: function() {      
      this.$el.html(this.template(this.model));
      $(document).trigger('create');
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