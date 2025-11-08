
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
    return "<div class=\"poll-view mb-3\" data-poll-id=\"" + 
      __escape(guard((context != null && context['poll'] != null && context['poll']['info'] != null) ? context['poll']['info']['pollId'] : null)) + 
      "\">\n<div class=\"card\">\n<div class=\"card-header d-flex justify-content-between align-items-center\">\n<h5 class=\"card-title mb-0\">" + 
      __escape(guard((context != null && context['poll'] != null && context['poll']['settings'] != null) ? context['poll']['settings']['title'] : null)) + 
      "</h5>\n<a href=\"#\" class=\"btn btn-sm btn-light border poll-button-edit hidden\">\n<span class=\"fa fa-pencil\"></span>\n</a>\n</div>\n<div class=\"card-body\">\n<div class=\"poll-view-messages hidden\"></div>\n<div class=\"poll-view-voting " + 
      (guard((context != null && context['poll'] != null) ? context['poll']['hasVoted'] : null) ?
        "hidden" :
        "") + 
      "\">\n<form role=\"form\" class=\"poll-voting-form mb-3 d-flex flex-column gap-3\">\n" + 
      compiled.blocks['poll.options'](helpers, context, guard, iter, helper) + 
      "\n</form>\n" + 
      (guard((context != null && context['poll'] != null && context['poll']['settings'] != null) ? context['poll']['settings']['disallowVoteUpdate'] : null) ?
        "\n<div class=\"alert alert-warning\" role=\"alert\">\n[[poll:vote_is_final]]\n</div>\n" :
        "") + 
      "\n</div>\n<div class=\"poll-view-results d-flex flex-column gap-3 mb-3 " + 
      (guard((context != null && context['poll'] != null) ? context['poll']['hasVoted'] : null) ?
        "" :
        "hidden") + 
      "\">\n" + 
      iter(guard((context != null && context['poll'] != null) ? context['poll']['options'] : null), function each(key0, index, length, value) {
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
      }) + 
      "\n<div class=\"text-end text-sm text-secondary poll-result-total-votecount\">[[poll:total-votes-x, " + 
      __escape(guard((context != null && context['poll'] != null && context['poll']['info'] != null) ? context['poll']['info']['voteCount'] : null)) + 
      "]]</div>\n</div>\n<div class=\"poll-view-buttons\">\n<button type=\"button\" class=\"btn btn-sm btn-primary poll-button-vote hidden\">[[poll:vote]]</button>\n<button type=\"button\" class=\"btn btn-sm btn-primary poll-button-vote-anon hidden\">[[poll:vote_anonymously]]</button>\n<button type=\"button\" class=\"btn btn-sm btn-primary poll-button-update-vote hidden\">[[poll:update_vote]]</button>\n<button type=\"button\" class=\"btn btn-sm btn-danger poll-button-remove-vote hidden\">[[poll:remove_vote]]</button>\n<button type=\"button\" class=\"btn btn-sm btn-link poll-button-results hidden\">[[poll:to_results]]</button>\n<button type=\"button\" class=\"btn btn-sm btn-link poll-button-voting hidden\">[[poll:to_voting]]</button>\n</div>\n</div>\n</div>\n</div>";
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
