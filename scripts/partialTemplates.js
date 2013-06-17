define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div data-role=\"footer\" data-position=\"fixed\" data-tap-toggle=\"false\">\r\n  <h4>Version - 1.0.0</h4>\r\n</div>";
  });
Handlebars.partials['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-role=\"header\" data-position=\"fixed\" data-tap-toggle=\"false\">\r\n  <a href=\"#\" data-role=\"button\" data-icon=\"arrow-l\" data-iconpos=\"left\" data-inline=\"true\" id=\"back-btn\">Back</a>\r\n  <h1>";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\r\n</div>";
  return buffer;
  });
return Handlebars.partials;
});
