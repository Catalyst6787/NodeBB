
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
    return "<h5>" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h5>\n<p>" + 
      __escape(guard((context != null) ? context['content'] : null)) + 
      "</p>\n<hr>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
