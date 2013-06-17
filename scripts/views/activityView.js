define([
  'backbone',
  'handlebars',
  'globals',
  'collections/activityCollection'
], function(Backbone, Handlebars, Globals, ActivityCollection) {
  var ActivityView = Backbone.View.extend({
    template: Handlebars.templates.activity,
    attributes: {
      'id': 'activity-page',
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
      this.collection = new ActivityCollection([],{user: this.options.user});
      this.pageData = {isPhone:Globals.controller.isPhone, header: 'Git Activity'};
      
      //This didnt work for some reason. So using on method.
      //this.listenTo(Globals.events, 'page:destry', this.close);
      Globals.events.on("page:destroy", this.close, this);
      
      this.render();      
      
      this.listenToOnce(this.collection, 'reset', this.render);
      this.collection.fetch({reset:true});
    },
    render: function() {
      this.pageData.events = this.collection.toJSON();
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
  
  return ActivityView;
});