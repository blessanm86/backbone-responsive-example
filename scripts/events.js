define([
  'jquery'
], function($) {
  $(document).on('mobileinit', function() {
      $.mobile.ajaxEnabled = false;
      $.mobile.linkBindingEnabled = false;
      $.mobile.hashListeningEnabled = false;
      $.mobile.pushStateEnabled = false;
  });
});