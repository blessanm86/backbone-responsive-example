define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['activity'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <tr>\r\n      <th>";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</th>\r\n      <td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.payload),stack1 == null || stack1 === false ? stack1 : stack1.action)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n      <td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.repo),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n    </tr>\r\n    ";
  return buffer;
  }

  buffer += "<div data-role=\"header\" data-position=\"fixed\" id=\"activity-header\">\r\n  <h1>Github Activity</h1>\r\n</div>\r\n<table data-role=\"table\" id=\"table-column-toggle\" class=\"ui-responsive table-stroke\">\r\n  <thead>\r\n    <tr>\r\n      <th>Event</th>\r\n      <th>Action</th>\r\n      <th>Repository</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.events, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tbody>\r\n</table>\r\n<div data-role=\"footer\" data-position=\"fixed\" data-tap-toggle=\"false\">\r\n  <h4>Version - 1.0.0</h4>\r\n</div>";
  return buffer;
  });
templates['home'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div data-role=\"header\" data-position=\"fixed\">\r\n  <h1>Git Info</h1>\r\n</div>\r\n<div data-role=\"content\">\r\n  <div class=\"home-container\">\r\n    <div class=\"ui-grid-a home-top-container\">\r\n      <div class=\"ui-block-a inner-container left\">\r\n        <div class=\"form-container\">\r\n          <input type=\"text\" name=\"gh-name\" id=\"gh-username\" value=\"\" placeholder=\"Github Username\">\r\n          <a href=\"#\" data-role=\"button\" data-icon=\"arrow-r\" data-iconpos=\"notext\" data-theme=\"c\" data-inline=\"true\" id=\"find-user\">Find User</a>\r\n        </div>\r\n        <div class=\"avatar-container\">\r\n          <img src=\"http://www.gravatar.com/avatar/12d350738eec24a8fdfee3177ee70cda?s=200\" class=\"avatar\" id=\"gh-avatar\"/>\r\n          <fieldset class=\"ui-grid-a\">\r\n            <div class=\"ui-block-a\"><button type=\"submit\" data-theme=\"c\" id=\"get-user-activity\">Get User Activity</button></div>\r\n            <div class=\"ui-block-b\"><button type=\"submit\" data-theme=\"b\" id=\"get-user-repositores\">Get User Repositories</button></div>\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-block-b inner-container right\" id=\"events-container\"></div>\r\n    </div>    \r\n    <div id=\"repos-container\"></div>\r\n  </div>\r\n</div>\r\n<div data-role=\"footer\" data-position=\"fixed\" data-tap-toggle=\"false\">\r\n  <h4>Version - 1.0.0</h4>\r\n</div>";
  });
templates['repo'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <tr>\r\n      <th>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</th>\r\n      <th>";
  if (stack1 = helpers.watchers) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.watchers; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</th>\r\n      <th>";
  if (stack1 = helpers.forks) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forks; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</th>\r\n    </tr>\r\n    ";
  return buffer;
  }

  buffer += "<fieldset class=\"ui-grid-b\" id=\"repo-bar\">\r\n  <div class=\"ui-block-a\"><button type=\"submit\" data-theme=\"b\" id=\"all-repos\">All</button></div>\r\n  <div class=\"ui-block-b\"><button type=\"submit\" data-theme=\"b\" id=\"source-repos\">Source's</button></div>\r\n  <div class=\"ui-block-c\"><button type=\"submit\" data-theme=\"b\" id=\"fork-repos\">Fork's</button></div>\r\n</fieldset>\r\n<table data-role=\"table\" id=\"table-column-toggle\" class=\"ui-responsive table-stroke\">\r\n  <thead>\r\n    <tr>\r\n      <th>Repositories</th>\r\n      <th>Stars</th>\r\n      <th>Forks</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.repos, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tbody>\r\n</table>";
  return buffer;
  });
return templates;
});
