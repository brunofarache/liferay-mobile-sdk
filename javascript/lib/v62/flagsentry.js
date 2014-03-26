function FlagsEntryService() {
}

FlagsEntryService.prototype.addEntry = function(className, classPK, reporterEmailAddress, reportedUserId, contentTitle, contentURL, reason, serviceContext) {
	return {
		"/flagsentry/add-entry": {
			"className": className,
			"classPK": classPK,
			"reporterEmailAddress": reporterEmailAddress,
			"reportedUserId": reportedUserId,
			"contentTitle": contentTitle,
			"contentURL": contentURL,
			"reason": reason,
			"serviceContext": serviceContext
		}
	};
};

module.exports = FlagsEntryService;