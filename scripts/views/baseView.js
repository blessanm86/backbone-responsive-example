define([
  'backbone',
  'globals',
], function(Backbone, Globals) {
  var BaseView = Backbone.View.extend({
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
  
  return BaseView;
});