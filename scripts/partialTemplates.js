define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['events'] = template(function (Handlebars,depth0,helpers,partials,data) {
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

  buffer += "<table data-role=\"table\" id=\"table-column-toggle\" class=\"ui-responsive table-stroke\">\r\n  <thead>\r\n    <tr>\r\n      <th>Event</th>\r\n      <th>Action</th>\r\n      <th>Repository</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.events, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tbody>\r\n</table>";
  return buffer;
  });
return Handlebars.partials;
});
