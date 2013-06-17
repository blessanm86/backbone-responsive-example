define([
  'backbone',
  'handlebars',
  'globals',
  'views/baseView',
  'collections/activityCollection'
], function(Backbone, Handlebars, Globals, BaseView, ActivityCollection) {
  var ActivityView = BaseView.extend({
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
    }
  });
  
  return ActivityView;
});