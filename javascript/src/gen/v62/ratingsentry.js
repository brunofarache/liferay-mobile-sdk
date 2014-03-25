function RatingsEntryService() {
}

RatingsEntryService.prototype.deleteEntry = function(className, classPK) {
	return {
		"/ratingsentry/delete-entry": {
			"className": className,
			"classPK": classPK
		}
	};
};

RatingsEntryService.prototype.updateEntry = function(className, classPK, score) {
	return {
		"/ratingsentry/update-entry": {
			"className": className,
			"classPK": classPK,
			"score": score
		}
	};
};
