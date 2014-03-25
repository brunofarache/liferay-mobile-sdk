function PollsQuestionService() {
}

PollsQuestionService.prototype.addQuestion = function(titleMap, descriptionMap, expirationDateMonth, expirationDateDay, expirationDateYear, expirationDateHour, expirationDateMinute, neverExpire, choices, serviceContext) {
	return {
		"/pollsquestion/add-question": {
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"expirationDateMonth": expirationDateMonth,
			"expirationDateDay": expirationDateDay,
			"expirationDateYear": expirationDateYear,
			"expirationDateHour": expirationDateHour,
			"expirationDateMinute": expirationDateMinute,
			"neverExpire": neverExpire,
			"choices": choices,
			"serviceContext": serviceContext
		}
	};
};

PollsQuestionService.prototype.deleteQuestion = function(questionId) {
	return {
		"/pollsquestion/delete-question": {
			"questionId": questionId
		}
	};
};

PollsQuestionService.prototype.getQuestion = function(questionId) {
	return {
		"/pollsquestion/get-question": {
			"questionId": questionId
		}
	};
};

PollsQuestionService.prototype.updateQuestion = function(questionId, titleMap, descriptionMap, expirationDateMonth, expirationDateDay, expirationDateYear, expirationDateHour, expirationDateMinute, neverExpire, choices, serviceContext) {
	return {
		"/pollsquestion/update-question": {
			"questionId": questionId,
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"expirationDateMonth": expirationDateMonth,
			"expirationDateDay": expirationDateDay,
			"expirationDateYear": expirationDateYear,
			"expirationDateHour": expirationDateHour,
			"expirationDateMinute": expirationDateMinute,
			"neverExpire": neverExpire,
			"choices": choices,
			"serviceContext": serviceContext
		}
	};
};
