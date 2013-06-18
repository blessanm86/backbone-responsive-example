define([
  'backbone',
], function(Backbone) {
  var UserModel = Backbone.Model.extend({
    urlRoot:'https://api.github.com/legacy/user/search/',
    defaults: {},
    parse: function(data) {
      return data.users[0];
    }
  });
  
  return UserModel;
});