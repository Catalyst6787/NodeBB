
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
    return "<h4>" + 
      __escape(guard((context != null) ? context['voteCount'] : null)) + 
      " [[poll:vote_count]]</h4>\n" + 
      compiled.blocks['votes'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'votes': function votes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['votes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['votes'] != null && context['votes'][key0] != null) ? context['votes'][key0]['userslug'] : null)) + 
          "\" class=\"poll-result-details\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['votes'] != null) ? context['votes'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "\n</a>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
