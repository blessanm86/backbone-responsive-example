define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div data-role=\"header\" data-position=\"fixed\">\r\n  <h1>Git Info</h1>\r\n</div>\r\n<div data-role=\"content\">\r\n  <div class=\"home-container\">\r\n    <div class=\"ui-grid-a home-top-container\">\r\n      <div class=\"ui-block-a inner-container left\">\r\n        <div class=\"form-container\">\r\n          <input type=\"text\" name=\"gh-name\" id=\"gh-username\" value=\"\" placeholder=\"Github Username\">\r\n          <a href=\"#\" data-role=\"button\" data-icon=\"arrow-r\" data-iconpos=\"notext\" data-theme=\"c\" data-inline=\"true\" id=\"find-user\">Find User</a>\r\n        </div>\r\n        <div class=\"avatar-container\">\r\n          <img src=\"http://www.gravatar.com/avatar/12d350738eec24a8fdfee3177ee70cda?s=200\" class=\"avatar\" id=\"gh-avatar\"/>\r\n          <fieldset class=\"ui-grid-a\">\r\n            <div class=\"ui-block-a\"><button type=\"submit\" data-theme=\"c\" id=\"get-user-activity\">Get User Activity</button></div>\r\n            <div class=\"ui-block-b\"><button type=\"submit\" data-theme=\"b\" id=\"get-user-repositores\">Get User Repositories</button></div>\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-block-b inner-container right\" id=\"events-container\"></div>\r\n    </div>\r\n    <fieldset class=\"ui-grid-b\" id=\"repo-bar\">\r\n      <div class=\"ui-block-a\"><button type=\"submit\" data-theme=\"b\" id=\"all-repos\">All</button></div>\r\n      <div class=\"ui-block-b\"><button type=\"submit\" data-theme=\"b\" id=\"source-repos\">Source's</button></div>\r\n      <div class=\"ui-block-c\"><button type=\"submit\" data-theme=\"b\" id=\"fork-repos\">Fork's</button></div>\r\n    </fieldset>\r\n    <div id=\"repos-container\"></div>\r\n  </div>\r\n</div>\r\n<div data-role=\"footer\" data-position=\"fixed\" data-tap-toggle=\"false\">\r\n  <h4>Version - 1.0.0</h4>\r\n</div>";
  });
return templates;
});
