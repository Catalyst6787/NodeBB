
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
    return "<div class=\"container mt-5\">\n<div class=\"row justify-content-center\">\n<div class=\"col-md-10 col-lg-8\">\n<div class=\"text-center mb-4\">\n<h1 class=\"mb-3\">" + 
      __escape(guard((context != null && context['nft'] != null) ? context['nft']['title'] : null)) + 
      "</h1>\n" + 
      (guard((context != null && context['nft'] != null) ? context['nft']['reference'] : null) ?
        "\n<p class=\"text-muted\">Ref: " + 
          __escape(guard((context != null && context['nft'] != null) ? context['nft']['reference'] : null)) + 
          "</p>\n" :
        "") + 
      "\n</div>\n<div class=\"row\">\n<!-- Image -->\n<div class=\"col-md-6 mb-4\">\n<img src=\"" + 
      __escape(guard((context != null && context['nft'] != null) ? context['nft']['image'] : null)) + 
      "\"\nalt=\"" + 
      __escape(guard((context != null && context['nft'] != null) ? context['nft']['title'] : null)) + 
      "\"\nclass=\"img-fluid rounded shadow\"\nstyle=\"max-width: 100%; height: auto;\">\n</div>\n<!-- Détails -->\n<div class=\"col-md-6\">\n<h3 class=\"mb-3\">Caractéristiques</h3>\n" + 
      (guard((context != null && context['nft'] != null && context['nft']['attributes'] != null) ? context['nft']['attributes']['length'] : null) ?
        "\n<div class=\"list-group\">\n" + 
          compiled.blocks['nft.attributes'](helpers, context, guard, iter, helper) + 
          "\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['nft'] != null) ? context['nft']['serialNumber'] : null) ?
        "\n<div class=\"mt-4\">\n<p class=\"text-muted\">\n<small>Serial Number: " + 
          __escape(guard((context != null && context['nft'] != null) ? context['nft']['serialNumber'] : null)) + 
          "</small>\n</p>\n</div>\n" :
        "") + 
      "\n</div>\n</div>\n" + 
      (guard((context != null && context['nft'] != null) ? context['nft']['description'] : null) ?
        "\n<div class=\"row mt-4\">\n<div class=\"col-12\">\n<h3>Description</h3>\n<div class=\"text-muted\">\n" + 
          __escape(guard((context != null && context['nft'] != null) ? context['nft']['description'] : null)) + 
          "\n</div>\n</div>\n</div>\n" :
        "") + 
      "\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'nft.attributes': function nftattributes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['nft'] != null) ? context['nft']['attributes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"list-group-item d-flex justify-content-between\">\n<strong>" + 
          __escape(guard((context != null && context['nft'] != null && context['nft']['attributes'] != null && context['nft']['attributes'][key0] != null) ? context['nft']['attributes'][key0]['label'] : null)) + 
          ":</strong>\n<span>" + 
          __escape(guard((context != null && context['nft'] != null && context['nft']['attributes'] != null && context['nft']['attributes'][key0] != null) ? context['nft']['attributes'][key0]['value'] : null)) + 
          "</span>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
