define([
  'jquery'
], function($) {
  $(document).on('mobileinit', function() {
      $.mobile.ajaxEnabled = false;
      $.mobile.linkBindingEnabled = false;
      $.mobile.hashListeningEnabled = false;
      $.mobile.pushStateEnabled = false;
      
      $('div[data-role="page"]').live('pagehide', function (event, ui) {
        if($(event.currentTarget).attr('data-dom-remove')) {
          $(event.currentTarget).remove();
        }
      });
  });
});