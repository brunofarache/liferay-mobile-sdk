function JournalFeedService() {
}

JournalFeedService.prototype.addFeed = function(groupId, feedId, autoFeedId, name, description, type, structureId, templateId, rendererTemplateId, delta, orderByCol, orderByType, targetLayoutFriendlyUrl, targetPortletId, contentField, feedType, feedVersion, serviceContext) {
	return {
		"/journalfeed/add-feed": {
			"groupId": groupId,
			"feedId": feedId,
			"autoFeedId": autoFeedId,
			"name": name,
			"description": description,
			"type": type,
			"structureId": structureId,
			"templateId": templateId,
			"rendererTemplateId": rendererTemplateId,
			"delta": delta,
			"orderByCol": orderByCol,
			"orderByType": orderByType,
			"targetLayoutFriendlyUrl": targetLayoutFriendlyUrl,
			"targetPortletId": targetPortletId,
			"contentField": contentField,
			"feedType": feedType,
			"feedVersion": feedVersion,
			"serviceContext": serviceContext
		}
	};
};

JournalFeedService.prototype.deleteFeed = function(feedId) {
	return {
		"/journalfeed/delete-feed": {
			"feedId": feedId
		}
	};
};

JournalFeedService.prototype.deleteFeed = function(groupId, feedId) {
	return {
		"/journalfeed/delete-feed": {
			"groupId": groupId,
			"feedId": feedId
		}
	};
};

JournalFeedService.prototype.getFeed = function(feedId) {
	return {
		"/journalfeed/get-feed": {
			"feedId": feedId
		}
	};
};

JournalFeedService.prototype.getFeed = function(groupId, feedId) {
	return {
		"/journalfeed/get-feed": {
			"groupId": groupId,
			"feedId": feedId
		}
	};
};

JournalFeedService.prototype.updateFeed = function(groupId, feedId, name, description, type, structureId, templateId, rendererTemplateId, delta, orderByCol, orderByType, targetLayoutFriendlyUrl, targetPortletId, contentField, feedType, feedVersion, serviceContext) {
	return {
		"/journalfeed/update-feed": {
			"groupId": groupId,
			"feedId": feedId,
			"name": name,
			"description": description,
			"type": type,
			"structureId": structureId,
			"templateId": templateId,
			"rendererTemplateId": rendererTemplateId,
			"delta": delta,
			"orderByCol": orderByCol,
			"orderByType": orderByType,
			"targetLayoutFriendlyUrl": targetLayoutFriendlyUrl,
			"targetPortletId": targetPortletId,
			"contentField": contentField,
			"feedType": feedType,
			"feedVersion": feedVersion,
			"serviceContext": serviceContext
		}
	};
};
