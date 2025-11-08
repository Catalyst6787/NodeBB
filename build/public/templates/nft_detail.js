
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
    return "<div class=\"container py-4\">\n<div class=\"row justify-content-center\">\n<div class=\"col-12 col-xl-10\">\n<div class=\"d-flex flex-column align-items-center text-center mb-4\">\n<h2 class=\"fw-semibold mb-2\">" + 
      __escape(guard((context != null && context['nft'] != null) ? context['nft']['title'] : null)) + 
      "</h2>\n" + 
      (guard((context != null && context['nft'] != null) ? context['nft']['reference'] : null) ?
        "\n<span class=\"badge text-bg-light border\">" + 
          __escape(guard((context != null && context['nft'] != null) ? context['nft']['reference'] : null)) + 
          "</span>\n" :
        "") + 
      "\n</div>\n<div class=\"row g-4 align-items-start\">\n<div class=\"col-12 col-md-6\">\n<div class=\"card border-0 shadow-sm\">\n<img src=\"" + 
      __escape(guard((context != null && context['nft'] != null) ? context['nft']['image'] : null)) + 
      "\" alt=\"" + 
      __escape(guard((context != null && context['nft'] != null) ? context['nft']['title'] : null)) + 
      "\" class=\"card-img-top rounded-top\">\n</div>\n</div>\n<div class=\"col-12 col-md-6\">\n<div class=\"card border-0 shadow-sm h-100\">\n<div class=\"card-body\">\n<h5 class=\"mb-3\">Caractéristiques</h5>\n" + 
      (guard((context != null && context['nft'] != null && context['nft']['attributes'] != null) ? context['nft']['attributes']['length'] : null) ?
        "\n<div class=\"row row-cols-1 g-2\">\n" + 
          compiled.blocks['nft.attributes'](helpers, context, guard, iter, helper) + 
          "\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['nft'] != null) ? context['nft']['serialNumber'] : null) ?
        "\n<div class=\"mt-3\">\n<div class=\"text-muted\">N° de série</div>\n<div class=\"fw-semibold\">" + 
          __escape(guard((context != null && context['nft'] != null) ? context['nft']['serialNumber'] : null)) + 
          "</div>\n</div>\n" :
        "") + 
      "\n</div>\n</div>\n</div>\n</div>\n" + 
      (guard((context != null && context['nft'] != null) ? context['nft']['description'] : null) ?
        "\n<div class=\"card border-0 shadow-sm mt-4\">\n<div class=\"card-body\">\n<h5 class=\"mb-3\">Description</h5>\n<div class=\"text-muted\">" + 
          __escape(guard((context != null && context['nft'] != null) ? context['nft']['description'] : null)) + 
          "</div>\n</div>\n</div>\n" :
        "") + 
      "\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'nft.attributes': function nftattributes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['nft'] != null) ? context['nft']['attributes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"col\">\n<div class=\"d-flex justify-content-between align-items-center rounded px-3 py-2 bg-light\">\n<span class=\"text-muted\">" + 
          __escape(guard((context != null && context['nft'] != null && context['nft']['attributes'] != null && context['nft']['attributes'][key0] != null) ? context['nft']['attributes'][key0]['label'] : null)) + 
          "</span>\n<span class=\"fw-semibold\">" + 
          __escape(guard((context != null && context['nft'] != null && context['nft']['attributes'] != null && context['nft']['attributes'][key0] != null) ? context['nft']['attributes'][key0]['value'] : null)) + 
          "</span>\n</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
