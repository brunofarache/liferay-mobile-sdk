function BookmarksFolderService() {
}

BookmarksFolderService.prototype.addFolder = function(parentFolderId, name, description, serviceContext) {
	return {
		"/bookmarksfolder/add-folder": {
			"parentFolderId": parentFolderId,
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

BookmarksFolderService.prototype.deleteFolder = function(folderId) {
	return {
		"/bookmarksfolder/delete-folder": {
			"folderId": folderId
		}
	};
};

BookmarksFolderService.prototype.deleteFolder = function(folderId, includeTrashedEntries) {
	return {
		"/bookmarksfolder/delete-folder": {
			"folderId": folderId,
			"includeTrashedEntries": includeTrashedEntries
		}
	};
};

BookmarksFolderService.prototype.getFolder = function(folderId) {
	return {
		"/bookmarksfolder/get-folder": {
			"folderId": folderId
		}
	};
};

BookmarksFolderService.prototype.getFolderIds = function(groupId, folderId) {
	return {
		"/bookmarksfolder/get-folder-ids": {
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

BookmarksFolderService.prototype.getFolders = function(groupId) {
	return {
		"/bookmarksfolder/get-folders": {
			"groupId": groupId
		}
	};
};

BookmarksFolderService.prototype.getFolders = function(groupId, parentFolderId) {
	return {
		"/bookmarksfolder/get-folders": {
			"groupId": groupId,
			"parentFolderId": parentFolderId
		}
	};
};

BookmarksFolderService.prototype.getFolders = function(groupId, parentFolderId, start, end) {
	return {
		"/bookmarksfolder/get-folders": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"start": start,
			"end": end
		}
	};
};

BookmarksFolderService.prototype.getFolders = function(groupId, parentFolderId, status, start, end) {
	return {
		"/bookmarksfolder/get-folders": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

BookmarksFolderService.prototype.getFoldersAndEntries = function(groupId, folderId) {
	return {
		"/bookmarksfolder/get-folders-and-entries": {
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

BookmarksFolderService.prototype.getFoldersAndEntries = function(groupId, folderId, status) {
	return {
		"/bookmarksfolder/get-folders-and-entries": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status
		}
	};
};

BookmarksFolderService.prototype.getFoldersAndEntries = function(groupId, folderId, status, start, end) {
	return {
		"/bookmarksfolder/get-folders-and-entries": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

BookmarksFolderService.prototype.getFoldersAndEntriesCount = function(groupId, folderId) {
	return {
		"/bookmarksfolder/get-folders-and-entries-count": {
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

BookmarksFolderService.prototype.getFoldersAndEntriesCount = function(groupId, folderId, status) {
	return {
		"/bookmarksfolder/get-folders-and-entries-count": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status
		}
	};
};

BookmarksFolderService.prototype.getFoldersCount = function(groupId, parentFolderId) {
	return {
		"/bookmarksfolder/get-folders-count": {
			"groupId": groupId,
			"parentFolderId": parentFolderId
		}
	};
};

BookmarksFolderService.prototype.getFoldersCount = function(groupId, parentFolderId, status) {
	return {
		"/bookmarksfolder/get-folders-count": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"status": status
		}
	};
};

BookmarksFolderService.prototype.getSubfolderIds = function(folderIds, groupId, folderId) {
	return {
		"/bookmarksfolder/get-subfolder-ids": {
			"folderIds": folderIds,
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

BookmarksFolderService.prototype.getSubfolderIds1 = function(groupId, folderId, recurse) {
	return {
		"/bookmarksfolder/get-subfolder-ids": {
			"groupId": groupId,
			"folderId": folderId,
			"recurse": recurse
		}
	};
};

BookmarksFolderService.prototype.moveFolder = function(folderId, parentFolderId) {
	return {
		"/bookmarksfolder/move-folder": {
			"folderId": folderId,
			"parentFolderId": parentFolderId
		}
	};
};

BookmarksFolderService.prototype.moveFolderFromTrash = function(folderId, parentFolderId) {
	return {
		"/bookmarksfolder/move-folder-from-trash": {
			"folderId": folderId,
			"parentFolderId": parentFolderId
		}
	};
};

BookmarksFolderService.prototype.moveFolderToTrash = function(folderId) {
	return {
		"/bookmarksfolder/move-folder-to-trash": {
			"folderId": folderId
		}
	};
};

BookmarksFolderService.prototype.restoreFolderFromTrash = function(folderId) {
	return {
		"/bookmarksfolder/restore-folder-from-trash": {
			"folderId": folderId
		}
	};
};

BookmarksFolderService.prototype.subscribeFolder = function(groupId, folderId) {
	return {
		"/bookmarksfolder/subscribe-folder": {
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

BookmarksFolderService.prototype.unsubscribeFolder = function(groupId, folderId) {
	return {
		"/bookmarksfolder/unsubscribe-folder": {
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

BookmarksFolderService.prototype.updateFolder = function(folderId, parentFolderId, name, description, mergeWithParentFolder, serviceContext) {
	return {
		"/bookmarksfolder/update-folder": {
			"folderId": folderId,
			"parentFolderId": parentFolderId,
			"name": name,
			"description": description,
			"mergeWithParentFolder": mergeWithParentFolder,
			"serviceContext": serviceContext
		}
	};
};

module.exports = BookmarksFolderService;