
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
    return "<form class=\"form\" id=\"pollCreator\">\n<div id=\"pollErrorBox\" class=\"alert alert-danger hidden\"></div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"pollInputTitle\">[[poll:poll_title]]</label>\n<input type=\"text\" name=\"settings.title\" id=\"pollInputTitle\" value=\"" + 
      __escape(guard((context != null && context['poll'] != null && context['poll']['settings'] != null) ? context['poll']['settings']['title'] : null)) + 
      "\" placeholder=\"[[poll:poll_title_placeholder]]\" class=\"form-control\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"pollInputOptions\">[[poll:options_title]]</label>\n" + 
      (guard((context != null && context['poll'] != null && context['poll']['options'] != null) ? context['poll']['options']['length'] : null) ?
        "\n" + 
          compiled.blocks['poll.options'](helpers, context, guard, iter, helper) + 
          "\n" :
        "\n<input type=\"text\" name=\"options\" id=\"pollInputOptions\" class=\"form-control mb-2\"/>\n") + 
      "\n<button type=\"button\" id=\"pollAddOption\" class=\"btn btn-primary btn-sm btn-block\">[[poll:options_add]]</button>\n</div>\n<hr>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"pollInputAmount\">[[poll:max_votes]]</label>\n<input type=\"number\" name=\"settings.maxvotes\" id=\"pollInputAmount\" value=\"" + 
      __escape(guard((context != null && context['poll'] != null && context['poll']['settings'] != null) ? context['poll']['settings']['maxvotes'] : null)) + 
      "\"\nmin=\"1\" max=\"10\" step=\"1\" placeholder=\"[[poll:max_votes_placeholder]]\" class=\"form-control\">\n</div>\n<div class=\"form-check mb-3\">\n<label class=\"form-check-label\" for=\"pollDisallowVoteUpdate\">[[poll:disallow_vote_update]]</label>\n<input class=\"form-check-input\" type=\"checkbox\" name=\"settings.disallowVoteUpdate\" id=\"pollDisallowVoteUpdate\" " + 
      (guard((context != null && context['poll'] != null && context['poll']['settings'] != null) ? context['poll']['settings']['disallowVoteUpdate'] : null) ?
        "checked" :
        "") + 
      ">\n</div>\n<div class=\"form-check mb-3\">\n<label class=\"form-check-label\" for=\"allowAnonVoting\">[[poll:allow_anon_voting]]</label>\n<input class=\"form-check-input\" type=\"checkbox\" name=\"settings.allowAnonVoting\" id=\"allowAnonVoting\" " + 
      (guard((context != null && context['poll'] != null && context['poll']['settings'] != null) ? context['poll']['settings']['allowAnonVoting'] : null) ?
        "checked" :
        "") + 
      ">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"pollInputEnd\">[[poll:auto_end_title]]</label>\n<div class=\"input-group date\">\n<input id=\"pollInputEnd\" placeholder=\"[[poll:auto_end_placeholder]]\" name=\"settings.end\" class=\"form-control\" value=\"" + 
      __escape(guard((context != null && context['poll'] != null && context['poll']['settings'] != null) ? context['poll']['settings']['end'] : null)) + 
      "\" type=\"datetime-local\">\n</div>\n<p class=\"form-text\">[[poll:auto_end_help]]</p>\n</div>\n" + 
      (guard((context != null) ? context['isRedactor'] : null) ?
        "\n<div class=\"alert alert-warning\" role=\"alert\">\n[[poll:warning.redactor]]\n</div>\n" :
        "") + 
      "\n</form>";
  }

  compiled.blocks = {
    'poll.options': function polloptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['poll'] != null) ? context['poll']['options'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<input type=\"text\" name=\"options\" id=\"pollInputOptions\" value=\"" + 
          __escape(guard(value)) + 
          "\" class=\"form-control mb-2\"/>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
