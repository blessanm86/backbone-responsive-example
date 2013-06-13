define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['repos'] = template(function (Handlebars,depth0,helpers,partials,data) {
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

  buffer += "<table data-role=\"table\" id=\"table-column-toggle\" class=\"ui-responsive table-stroke\">\r\n  <thead>\r\n    <tr>\r\n      <th>Repositories</th>\r\n      <th>Stars</th>\r\n      <th>Forks</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.repos, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tbody>\r\n</table>";
  return buffer;
  });
return Handlebars.partials;
});