<div class="poll-view mb-3" data-poll-id="{poll.info.pollId}">
<div class="card">
<div class="card-header d-flex justify-content-between align-items-center">
<h5 class="card-title mb-0">{poll.settings.title}</h5>
<a href="#" class="btn btn-sm btn-light border poll-button-edit hidden">
<span class="fa fa-pencil"></span>
</a>
</div>
<div class="card-body">
<div class="poll-view-messages hidden"></div>
<div class="poll-view-voting <!-- IF poll.hasVoted -->hidden<!-- ENDIF poll.hasVoted -->">
<form role="form" class="poll-voting-form mb-3 d-flex flex-column gap-3">
<!-- BEGIN poll.options -->
<div class="poll-view-option {poll.optionType}" data-poll-option-id="{poll.options.id}">
<label>
<input type="{poll.optionType}" name="pollVoteSelection" value="{poll.options.id}">
{poll.options.title}
</label>
</div>
<!-- END poll.options -->
</form>
<!-- IF poll.settings.disallowVoteUpdate -->
<div class="alert alert-warning" role="alert">
[[poll:vote_is_final]]
</div>
<!-- ENDIF poll.settings.disallowVoteUpdate -->
</div>
<div class="poll-view-results d-flex flex-column gap-3 mb-3 <!-- IF !poll.hasVoted -->hidden<!-- ENDIF !poll.hasVoted -->">
<!-- BEGIN poll.options -->
<div class="poll-result" data-poll-option-id="{poll.options.id}">
<div class="d-flex justify-content-between mb-1">
<strong>{poll.options.title}</strong>
<a class="poll-result-votecount small" href="#">
<span>[[poll:x-votes, {poll.options.voteCount}]]</span>
</a>
</div>
<div class="progress">
<div class="progress-bar poll-result-progressbar" role="progressbar" aria-valuenow="{poll.options.percentage}" aria-valuemin="0" aria-valuemax="100" style="width: {poll.options.percentage}%;">
<span><span class="percent">{poll.options.percentage}</span>%</span>
</div>
</div>
</div>
<!-- END poll.options -->
<div class="text-end text-sm text-secondary poll-result-total-votecount">[[poll:total-votes-x, {poll.info.voteCount}]]</div>
</div>
<div class="poll-view-buttons">
<button type="button" class="btn btn-sm btn-primary poll-button-vote hidden">[[poll:vote]]</button>
<button type="button" class="btn btn-sm btn-primary poll-button-vote-anon hidden">[[poll:vote_anonymously]]</button>
<button type="button" class="btn btn-sm btn-primary poll-button-update-vote hidden">[[poll:update_vote]]</button>
<button type="button" class="btn btn-sm btn-danger poll-button-remove-vote hidden">[[poll:remove_vote]]</button>
<button type="button" class="btn btn-sm btn-link poll-button-results hidden">[[poll:to_results]]</button>
<button type="button" class="btn btn-sm btn-link poll-button-voting hidden">[[poll:to_voting]]</button>
</div>
</div>
</div>
</div>