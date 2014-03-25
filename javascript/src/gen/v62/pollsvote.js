function PollsVoteService() {
}

PollsVoteService.prototype.addVote = function(questionId, choiceId, serviceContext) {
	return {
		"/pollsvote/add-vote": {
			"questionId": questionId,
			"choiceId": choiceId,
			"serviceContext": serviceContext
		}
	};
};
