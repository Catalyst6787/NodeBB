
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<div class=\"acp-page-container\">\n<div component=\"settings/main/header\" class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\n<div class=\"col-12 col-md-8 px-0 mb-1 mb-md-0\">\n<h4 class=\"fw-bold tracking-tight mb-0\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h4>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3 text-end\">\n<button id=\"reset\" class=\"btn btn-warning btn-sm fw-semibold ff-secondary text-center text-nowrap\">[[poll:reset]]</button>\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row m-0\">\n<div id=\"spy-container\" class=\"col-12 px-0 mb-4\" tabindex=\"0\">\n<form class=\"form poll-settings\">\n<div class=\"card\">\n<div class=\"card-header\">[[poll:poll]]</div>\n<div class=\"card-body\">\n<div class=\"mb-3\">\n<h6>[[poll:toggles]]</h6>\n<div class=\"mb-3\">\n<div class=\"form-check\">\n<label class=\"form-check-label\">[[poll:allow_guests]]</label>\n<input class=\"form-check-input\" type=\"checkbox\" data-key=\"toggles.allowAnon\" data-trim=\"false\">\n</div>\n</div>\n</div>\n<div class=\"mb-3\">\n<h6>[[poll:limits]]</h6>\n<div>\n<label class=\"form-label\" for=\"maxPollOptions\">[[poll:max_options]]</label>\n<input type=\"number\" class=\"form-control\" id=\"maxPollOptions\" placeholder=\"10\" min=\"1\" max=\"100\" data-key=\"limits.maxOptions\">\n</div>\n</div>\n</div>\n</div>\n<div class=\"card\">\n<div class=\"card-header\">[[poll:defaults]]</div>\n<div class=\"card-body\">\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"defaultsTitle\">[[poll:default_title]]</label>\n<input type=\"text\" class=\"form-control\" id=\"defaultsTitle\" placeholder=\"Poll\" data-key=\"defaults.title\">\n</div>\n<div>\n<label class=\"form-label\" for=\"defaultsMaxVotes\">[[poll:max_votes]]</label>\n<input type=\"number\" class=\"form-control\" id=\"defaultsMaxVotes\" placeholder=\"1\" min=\"1\" max=\"100\" data-key=\"defaults.maxvotes\">\n<p class=\"form-text\">[[poll:info_choices]]</p>\n</div>\n</div>\n</div>\n</form>\n</div>\n<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n</nav>\n</nav>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
