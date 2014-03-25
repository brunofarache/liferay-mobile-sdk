function AnnouncementsFlagService() {
}

AnnouncementsFlagService.prototype.addFlag = function(entryId, value) {
	return {
		"/announcementsflag/add-flag": {
			"entryId": entryId,
			"value": value
		}
	};
};

AnnouncementsFlagService.prototype.deleteFlag = function(flagId) {
	return {
		"/announcementsflag/delete-flag": {
			"flagId": flagId
		}
	};
};

AnnouncementsFlagService.prototype.getFlag = function(entryId, value) {
	return {
		"/announcementsflag/get-flag": {
			"entryId": entryId,
			"value": value
		}
	};
};
