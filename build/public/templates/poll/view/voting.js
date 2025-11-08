
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
    return "<form role=\"form\" class=\"poll-voting-form mb-3 d-flex flex-column gap-3\">\n" + 
      compiled.blocks['poll.options'](helpers, context, guard, iter, helper) + 
      "\n</form>\n" + 
      (guard((context != null && context['poll'] != null && context['poll']['settings'] != null) ? context['poll']['settings']['disallowVoteUpdate'] : null) ?
        "\n<div class=\"alert alert-warning\" role=\"alert\">\n[[poll:vote_is_final]]\n</div>\n" :
        "");
  }

  compiled.blocks = {
    'poll.options': function polloptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['poll'] != null) ? context['poll']['options'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"poll-view-option " + 
          __escape(guard((context != null && context['poll'] != null) ? context['poll']['optionType'] : null)) + 
          "\" data-poll-option-id=\"" + 
          __escape(guard((context != null && context['poll'] != null && context['poll']['options'] != null && context['poll']['options'][key0] != null) ? context['poll']['options'][key0]['id'] : null)) + 
          "\">\n<label>\n<input type=\"" + 
          __escape(guard((context != null && context['poll'] != null) ? context['poll']['optionType'] : null)) + 
          "\" name=\"pollVoteSelection\" value=\"" + 
          __escape(guard((context != null && context['poll'] != null && context['poll']['options'] != null && context['poll']['options'][key0] != null) ? context['poll']['options'][key0]['id'] : null)) + 
          "\">\n" + 
          __escape(guard((context != null && context['poll'] != null && context['poll']['options'] != null && context['poll']['options'][key0] != null) ? context['poll']['options'][key0]['title'] : null)) + 
          "\n</label>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
