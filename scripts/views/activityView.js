define([
  'backbone',
  'handlebars',
  'globals'
], function(Backbone, Handlebars, Globals) {
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
      this.model = {isPhone:Globals.controller.isPhone, events:[]};
      this.render();
      //this.model = {isPhone:Globals.controller.isPhone};
      this.getUserActivity();
    },
    render: function() {
      //var event;
      //if(Globals.controller.isPhone) {
      //  this.setElement(this.template(this.model));
      //  event = 'pagecreate';
      //} else {
      //  this.$el.html(this.template(this.model));
      //  event = 'create'
      //}
      //this.$el.trigger(event);
      //return this;
      this.$el.html(this.template(this.model));
      //JQM quirk - Need pagecreate event to get the headers and footers right.
      var event = Globals.controller.isPhone? 'pagecreate' : 'create';
      this.$el.trigger(event);
      return this;
    },
    getUserActivity: function() {
      var me = this,
          url = 'https://api.github.com/users/'+this.options.user+'/events';
      $.get(url, function(data) {
        if (data.length) {
          me.model.events = data;
          me.render();
        }
      });
    },
    goBackToHomePage: function(evt){
      evt.preventDefault();
      Globals.controller.goToHomePage();
    }
  });
  
  return ActivityView;
});