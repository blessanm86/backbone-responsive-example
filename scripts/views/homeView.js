define([
  'backbone',
  'handlebars',
], function(Backbone, Handlebars) {
  var HomeView = Backbone.View.extend({
    template: Handlebars.templates.home(),
    initialize: function(){
      this.render();
    },
    render: function() {      
      this.$el.html(this.template);
      return this;
    }
  });
  
  return HomeView;
});