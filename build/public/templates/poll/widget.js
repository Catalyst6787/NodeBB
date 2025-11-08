
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
    return "<div data-widget-poll-id=\"" + 
      __escape(guard((context != null) ? context['pollId'] : null)) + 
      "\"></div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
