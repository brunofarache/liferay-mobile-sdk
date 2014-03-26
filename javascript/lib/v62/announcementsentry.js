function AnnouncementsEntryService() {
}

AnnouncementsEntryService.prototype.addEntry = function(plid, classNameId, classPK, title, content, url, type, displayDateMonth, displayDateDay, displayDateYear, displayDateHour, displayDateMinute, expirationDateMonth, expirationDateDay, expirationDateYear, expirationDateHour, expirationDateMinute, priority, alert) {
	return {
		"/announcementsentry/add-entry": {
			"plid": plid,
			"classNameId": classNameId,
			"classPK": classPK,
			"title": title,
			"content": content,
			"url": url,
			"type": type,
			"displayDateMonth": displayDateMonth,
			"displayDateDay": displayDateDay,
			"displayDateYear": displayDateYear,
			"displayDateHour": displayDateHour,
			"displayDateMinute": displayDateMinute,
			"expirationDateMonth": expirationDateMonth,
			"expirationDateDay": expirationDateDay,
			"expirationDateYear": expirationDateYear,
			"expirationDateHour": expirationDateHour,
			"expirationDateMinute": expirationDateMinute,
			"priority": priority,
			"alert": alert
		}
	};
};

AnnouncementsEntryService.prototype.addEntry = function(plid, classNameId, classPK, title, content, url, type, displayDateMonth, displayDateDay, displayDateYear, displayDateHour, displayDateMinute, displayImmediately, expirationDateMonth, expirationDateDay, expirationDateYear, expirationDateHour, expirationDateMinute, priority, alert) {
	return {
		"/announcementsentry/add-entry": {
			"plid": plid,
			"classNameId": classNameId,
			"classPK": classPK,
			"title": title,
			"content": content,
			"url": url,
			"type": type,
			"displayDateMonth": displayDateMonth,
			"displayDateDay": displayDateDay,
			"displayDateYear": displayDateYear,
			"displayDateHour": displayDateHour,
			"displayDateMinute": displayDateMinute,
			"displayImmediately": displayImmediately,
			"expirationDateMonth": expirationDateMonth,
			"expirationDateDay": expirationDateDay,
			"expirationDateYear": expirationDateYear,
			"expirationDateHour": expirationDateHour,
			"expirationDateMinute": expirationDateMinute,
			"priority": priority,
			"alert": alert
		}
	};
};

AnnouncementsEntryService.prototype.deleteEntry = function(entryId) {
	return {
		"/announcementsentry/delete-entry": {
			"entryId": entryId
		}
	};
};

AnnouncementsEntryService.prototype.getEntry = function(entryId) {
	return {
		"/announcementsentry/get-entry": {
			"entryId": entryId
		}
	};
};

AnnouncementsEntryService.prototype.updateEntry = function(entryId, title, content, url, type, displayDateMonth, displayDateDay, displayDateYear, displayDateHour, displayDateMinute, displayImmediately, expirationDateMonth, expirationDateDay, expirationDateYear, expirationDateHour, expirationDateMinute, priority) {
	return {
		"/announcementsentry/update-entry": {
			"entryId": entryId,
			"title": title,
			"content": content,
			"url": url,
			"type": type,
			"displayDateMonth": displayDateMonth,
			"displayDateDay": displayDateDay,
			"displayDateYear": displayDateYear,
			"displayDateHour": displayDateHour,
			"displayDateMinute": displayDateMinute,
			"displayImmediately": displayImmediately,
			"expirationDateMonth": expirationDateMonth,
			"expirationDateDay": expirationDateDay,
			"expirationDateYear": expirationDateYear,
			"expirationDateHour": expirationDateHour,
			"expirationDateMinute": expirationDateMinute,
			"priority": priority
		}
	};
};

module.exports = AnnouncementsEntryService;