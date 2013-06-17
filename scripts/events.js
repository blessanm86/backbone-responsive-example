define([
  'jquery',
  'globals'
], function($, Globals) {
  $(document).on('mobileinit', function() {
      $.mobile.ajaxEnabled = false;
      $.mobile.linkBindingEnabled = false;
      $.mobile.hashListeningEnabled = false;
      $.mobile.pushStateEnabled = false;
      
      $('div[data-role="page"]').live('pagehide', function (event, ui) {
        if($(event.currentTarget).attr('data-dom-remove')) {
          //$(event.currentTarget).remove();
          Globals.events.trigger("page:destroy", event.currentTarget.id);
        }
      });
      
      //Add a overloay and loading message whenever an ajax call is made
      $.ajaxSetup({
        beforeSend: function() {
          $("body").addClass('ui-disabled');
          $.mobile.showPageLoadingMsg("a", "Connecting To Github");
        },
        complete: function() {
          $("body").removeClass('ui-disabled');
          $.mobile.hidePageLoadingMsg();
        }
      });
  });
});