
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
    return compiled.blocks['poll.options'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'poll.options': function polloptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['poll'] != null) ? context['poll']['options'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"poll-result\" data-poll-option-id=\"" + 
          __escape(guard((context != null && context['poll'] != null && context['poll']['options'] != null && context['poll']['options'][key0] != null) ? context['poll']['options'][key0]['id'] : null)) + 
          "\">\n<div class=\"d-flex justify-content-between mb-1\">\n<strong>" + 
          __escape(guard((context != null && context['poll'] != null && context['poll']['options'] != null && context['poll']['options'][key0] != null) ? context['poll']['options'][key0]['title'] : null)) + 
          "</strong>\n<a class=\"poll-result-votecount small\" href=\"#\">\n<span>[[poll:x-votes, " + 
          __escape(guard((context != null && context['poll'] != null && context['poll']['options'] != null && context['poll']['options'][key0] != null) ? context['poll']['options'][key0]['voteCount'] : null)) + 
          "]]</span>\n</a>\n</div>\n<div class=\"progress\">\n<div class=\"progress-bar poll-result-progressbar\" role=\"progressbar\" aria-valuenow=\"" + 
          __escape(guard((context != null && context['poll'] != null && context['poll']['options'] != null && context['poll']['options'][key0] != null) ? context['poll']['options'][key0]['percentage'] : null)) + 
          "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + 
          __escape(guard((context != null && context['poll'] != null && context['poll']['options'] != null && context['poll']['options'][key0] != null) ? context['poll']['options'][key0]['percentage'] : null)) + 
          "%;\">\n<span><span class=\"percent\">" + 
          __escape(guard((context != null && context['poll'] != null && context['poll']['options'] != null && context['poll']['options'][key0] != null) ? context['poll']['options'][key0]['percentage'] : null)) + 
          "</span>%</span>\n</div>\n</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
