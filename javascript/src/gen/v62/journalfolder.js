function JournalFolderService() {
}

JournalFolderService.prototype.addFolder = function(groupId, parentFolderId, name, description, serviceContext) {
	return {
		"/journalfolder/add-folder": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

JournalFolderService.prototype.deleteFolder = function(folderId) {
	return {
		"/journalfolder/delete-folder": {
			"folderId": folderId
		}
	};
};

JournalFolderService.prototype.deleteFolder = function(folderId, includeTrashedEntries) {
	return {
		"/journalfolder/delete-folder": {
			"folderId": folderId,
			"includeTrashedEntries": includeTrashedEntries
		}
	};
};

JournalFolderService.prototype.getFolder = function(folderId) {
	return {
		"/journalfolder/get-folder": {
			"folderId": folderId
		}
	};
};

JournalFolderService.prototype.getFolderIds = function(groupId, folderId) {
	return {
		"/journalfolder/get-folder-ids": {
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

JournalFolderService.prototype.getFolders = function(groupId) {
	return {
		"/journalfolder/get-folders": {
			"groupId": groupId
		}
	};
};

JournalFolderService.prototype.getFolders = function(groupId, parentFolderId) {
	return {
		"/journalfolder/get-folders": {
			"groupId": groupId,
			"parentFolderId": parentFolderId
		}
	};
};

JournalFolderService.prototype.getFolders = function(groupId, parentFolderId, status) {
	return {
		"/journalfolder/get-folders": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"status": status
		}
	};
};

JournalFolderService.prototype.getFolders = function(groupId, parentFolderId, start, end) {
	return {
		"/journalfolder/get-folders": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"start": start,
			"end": end
		}
	};
};

JournalFolderService.prototype.getFolders = function(groupId, parentFolderId, status, start, end) {
	return {
		"/journalfolder/get-folders": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

JournalFolderService.prototype.getFoldersAndArticles = function(groupId, folderId, start, end, obc) {
	return {
		"/journalfolder/get-folders-and-articles": {
			"groupId": groupId,
			"folderId": folderId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

JournalFolderService.prototype.getFoldersAndArticles = function(groupId, folderId, status, start, end, obc) {
	return {
		"/journalfolder/get-folders-and-articles": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

JournalFolderService.prototype.getFoldersAndArticlesCount = function(groupId, folderId) {
	return {
		"/journalfolder/get-folders-and-articles-count": {
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

JournalFolderService.prototype.getFoldersAndArticlesCount = function(groupId, folderId, status) {
	return {
		"/journalfolder/get-folders-and-articles-count": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status
		}
	};
};

JournalFolderService.prototype.getFoldersAndArticlesCount = function(groupId, folderIds, status) {
	return {
		"/journalfolder/get-folders-and-articles-count": {
			"groupId": groupId,
			"folderIds": folderIds,
			"status": status
		}
	};
};

JournalFolderService.prototype.getFoldersCount = function(groupId, parentFolderId) {
	return {
		"/journalfolder/get-folders-count": {
			"groupId": groupId,
			"parentFolderId": parentFolderId
		}
	};
};

JournalFolderService.prototype.getFoldersCount = function(groupId, parentFolderId, status) {
	return {
		"/journalfolder/get-folders-count": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"status": status
		}
	};
};

JournalFolderService.prototype.getSubfolderIds = function(folderIds, groupId, folderId) {
	return {
		"/journalfolder/get-subfolder-ids": {
			"folderIds": folderIds,
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

JournalFolderService.prototype.getSubfolderIds = function(groupId, folderId, recurse) {
	return {
		"/journalfolder/get-subfolder-ids": {
			"groupId": groupId,
			"folderId": folderId,
			"recurse": recurse
		}
	};
};

JournalFolderService.prototype.moveFolder = function(folderId, parentFolderId, serviceContext) {
	return {
		"/journalfolder/move-folder": {
			"folderId": folderId,
			"parentFolderId": parentFolderId,
			"serviceContext": serviceContext
		}
	};
};

JournalFolderService.prototype.moveFolderFromTrash = function(folderId, parentFolderId, serviceContext) {
	return {
		"/journalfolder/move-folder-from-trash": {
			"folderId": folderId,
			"parentFolderId": parentFolderId,
			"serviceContext": serviceContext
		}
	};
};

JournalFolderService.prototype.moveFolderToTrash = function(folderId) {
	return {
		"/journalfolder/move-folder-to-trash": {
			"folderId": folderId
		}
	};
};

JournalFolderService.prototype.restoreFolderFromTrash = function(folderId) {
	return {
		"/journalfolder/restore-folder-from-trash": {
			"folderId": folderId
		}
	};
};

JournalFolderService.prototype.updateFolder = function(folderId, parentFolderId, name, description, mergeWithParentFolder, serviceContext) {
	return {
		"/journalfolder/update-folder": {
			"folderId": folderId,
			"parentFolderId": parentFolderId,
			"name": name,
			"description": description,
			"mergeWithParentFolder": mergeWithParentFolder,
			"serviceContext": serviceContext
		}
	};
};
