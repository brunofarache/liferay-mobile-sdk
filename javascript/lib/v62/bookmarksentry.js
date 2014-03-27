function BookmarksEntryService() {
}

BookmarksEntryService.prototype.addEntry = function(groupId, folderId, name, url, description, serviceContext) {
	return {
		"/bookmarksentry/add-entry": {
			"groupId": groupId,
			"folderId": folderId,
			"name": name,
			"url": url,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

BookmarksEntryService.prototype.deleteEntry = function(entryId) {
	return {
		"/bookmarksentry/delete-entry": {
			"entryId": entryId
		}
	};
};

BookmarksEntryService.prototype.getEntries = function(groupId, folderId, start, end) {
	return {
		"/bookmarksentry/get-entries": {
			"groupId": groupId,
			"folderId": folderId,
			"start": start,
			"end": end
		}
	};
};

BookmarksEntryService.prototype.getEntries = function(groupId, folderId, start, end, orderByComparator) {
	return {
		"/bookmarksentry/get-entries": {
			"groupId": groupId,
			"folderId": folderId,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

BookmarksEntryService.prototype.getEntriesCount = function(groupId, folderId) {
	return {
		"/bookmarksentry/get-entries-count": {
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

BookmarksEntryService.prototype.getEntriesCount = function(groupId, folderId, status) {
	return {
		"/bookmarksentry/get-entries-count": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status
		}
	};
};

BookmarksEntryService.prototype.getEntry = function(entryId) {
	return {
		"/bookmarksentry/get-entry": {
			"entryId": entryId
		}
	};
};

BookmarksEntryService.prototype.getFoldersEntriesCount = function(groupId, folderIds) {
	return {
		"/bookmarksentry/get-folders-entries-count": {
			"groupId": groupId,
			"folderIds": folderIds
		}
	};
};

BookmarksEntryService.prototype.getGroupEntries = function(groupId, start, end) {
	return {
		"/bookmarksentry/get-group-entries": {
			"groupId": groupId,
			"start": start,
			"end": end
		}
	};
};

BookmarksEntryService.prototype.getGroupEntries = function(groupId, userId, start, end) {
	return {
		"/bookmarksentry/get-group-entries": {
			"groupId": groupId,
			"userId": userId,
			"start": start,
			"end": end
		}
	};
};

BookmarksEntryService.prototype.getGroupEntries = function(groupId, userId, rootFolderId, start, end) {
	return {
		"/bookmarksentry/get-group-entries": {
			"groupId": groupId,
			"userId": userId,
			"rootFolderId": rootFolderId,
			"start": start,
			"end": end
		}
	};
};

BookmarksEntryService.prototype.getGroupEntriesCount = function(groupId) {
	return {
		"/bookmarksentry/get-group-entries-count": {
			"groupId": groupId
		}
	};
};

BookmarksEntryService.prototype.getGroupEntriesCount = function(groupId, userId) {
	return {
		"/bookmarksentry/get-group-entries-count": {
			"groupId": groupId,
			"userId": userId
		}
	};
};

BookmarksEntryService.prototype.getGroupEntriesCount = function(groupId, userId, rootFolderId) {
	return {
		"/bookmarksentry/get-group-entries-count": {
			"groupId": groupId,
			"userId": userId,
			"rootFolderId": rootFolderId
		}
	};
};

BookmarksEntryService.prototype.moveEntry = function(entryId, parentFolderId) {
	return {
		"/bookmarksentry/move-entry": {
			"entryId": entryId,
			"parentFolderId": parentFolderId
		}
	};
};

BookmarksEntryService.prototype.moveEntryFromTrash = function(entryId, parentFolderId) {
	return {
		"/bookmarksentry/move-entry-from-trash": {
			"entryId": entryId,
			"parentFolderId": parentFolderId
		}
	};
};

BookmarksEntryService.prototype.moveEntryToTrash = function(entryId) {
	return {
		"/bookmarksentry/move-entry-to-trash": {
			"entryId": entryId
		}
	};
};

BookmarksEntryService.prototype.openEntry = function(entry) {
	return {
		"/bookmarksentry/open-entry": {
			"entry": entry
		}
	};
};

BookmarksEntryService.prototype.openEntry1 = function(entryId) {
	return {
		"/bookmarksentry/open-entry": {
			"entryId": entryId
		}
	};
};

BookmarksEntryService.prototype.restoreEntryFromTrash = function(entryId) {
	return {
		"/bookmarksentry/restore-entry-from-trash": {
			"entryId": entryId
		}
	};
};

BookmarksEntryService.prototype.search = function(groupId, creatorUserId, status, start, end) {
	return {
		"/bookmarksentry/search": {
			"groupId": groupId,
			"creatorUserId": creatorUserId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

BookmarksEntryService.prototype.subscribeEntry = function(entryId) {
	return {
		"/bookmarksentry/subscribe-entry": {
			"entryId": entryId
		}
	};
};

BookmarksEntryService.prototype.unsubscribeEntry = function(entryId) {
	return {
		"/bookmarksentry/unsubscribe-entry": {
			"entryId": entryId
		}
	};
};

BookmarksEntryService.prototype.updateEntry = function(entryId, groupId, folderId, name, url, description, serviceContext) {
	return {
		"/bookmarksentry/update-entry": {
			"entryId": entryId,
			"groupId": groupId,
			"folderId": folderId,
			"name": name,
			"url": url,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

module.exports = BookmarksEntryService;