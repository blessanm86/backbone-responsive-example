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
      this.pageData = {isPhone:Globals.controller.isPhone};
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
    goBackToHomePage: function(evt){
      evt.preventDefault();
      Globals.controller.goToHomePage();
    }
  });
  
  return ActivityView;
});