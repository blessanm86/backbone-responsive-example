define([
  'jquery',
  'globals'
], function($, Globals) {
  $(document).on('mobileinit', function() {
    var pages = [];
    
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
      
      $('div[data-role="page"]').live('pagehide', function (event, ui) {
        if($(event.currentTarget).attr('data-dom-remove')) {
          //console.log(pages[pages.length-1],event.currentTarget.id);
          if (pages[pages.length-1] == event.currentTarget.id) {
            pages.pop();
            Globals.events.trigger("page:destroy", event.currentTarget.id);
          }
        }
      });
      
      $('div[data-role="page"]').live('pagebeforeshow', function (event, ui) {
        //Make sure the page has an id and it is not already present in the pages array.
        if (event.currentTarget.id && pages.indexOf(event.currentTarget.id) == -1) {
          pages.push(event.currentTarget.id);
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