define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div data-role=\"header\">\r\n  <h1>Git Info</h1>\r\n</div>\r\n<div data-role=\"content\"></div>\r\n<div data-role=\"footer\">\r\n  <h4>Version - 1.0.0</h4>\r\n</div>";
  });
return templates;
});
