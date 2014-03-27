function TrashEntryService() {
}

TrashEntryService.prototype.deleteEntries = function(entryIds) {
	return {
		"/trashentry/delete-entries": {
			"entryIds": entryIds
		}
	};
};

TrashEntryService.prototype.deleteEntries1 = function(groupId) {
	return {
		"/trashentry/delete-entries": {
			"groupId": groupId
		}
	};
};

TrashEntryService.prototype.deleteEntry = function(entryId) {
	return {
		"/trashentry/delete-entry": {
			"entryId": entryId
		}
	};
};

TrashEntryService.prototype.deleteEntry = function(className, classPK) {
	return {
		"/trashentry/delete-entry": {
			"className": className,
			"classPK": classPK
		}
	};
};

TrashEntryService.prototype.getEntries = function(groupId) {
	return {
		"/trashentry/get-entries": {
			"groupId": groupId
		}
	};
};

TrashEntryService.prototype.getEntries = function(groupId, start, end, obc) {
	return {
		"/trashentry/get-entries": {
			"groupId": groupId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

TrashEntryService.prototype.moveEntry = function(className, classPK, destinationContainerModelId, serviceContext) {
	return {
		"/trashentry/move-entry": {
			"className": className,
			"classPK": classPK,
			"destinationContainerModelId": destinationContainerModelId,
			"serviceContext": serviceContext
		}
	};
};

TrashEntryService.prototype.restoreEntry = function(entryId) {
	return {
		"/trashentry/restore-entry": {
			"entryId": entryId
		}
	};
};

TrashEntryService.prototype.restoreEntry = function(entryId, overrideClassPK, name) {
	return {
		"/trashentry/restore-entry": {
			"entryId": entryId,
			"overrideClassPK": overrideClassPK,
			"name": name
		}
	};
};

module.exports = TrashEntryService;