function DLFolderService() {
}

DLFolderService.prototype.addFolder = function(groupId, repositoryId, mountPoint, parentFolderId, name, description, serviceContext) {
	return {
		"/dlfolder/add-folder": {
			"groupId": groupId,
			"repositoryId": repositoryId,
			"mountPoint": mountPoint,
			"parentFolderId": parentFolderId,
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

DLFolderService.prototype.deleteFolder = function(folderId) {
	return {
		"/dlfolder/delete-folder": {
			"folderId": folderId
		}
	};
};

DLFolderService.prototype.deleteFolder = function(folderId, includeTrashedEntries) {
	return {
		"/dlfolder/delete-folder": {
			"folderId": folderId,
			"includeTrashedEntries": includeTrashedEntries
		}
	};
};

DLFolderService.prototype.deleteFolder = function(groupId, parentFolderId, name) {
	return {
		"/dlfolder/delete-folder": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"name": name
		}
	};
};

DLFolderService.prototype.getFileEntriesAndFileShortcuts = function(groupId, folderId, status, start, end) {
	return {
		"/dlfolder/get-file-entries-and-file-shortcuts": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

DLFolderService.prototype.getFileEntriesAndFileShortcutsCount = function(groupId, folderId, status) {
	return {
		"/dlfolder/get-file-entries-and-file-shortcuts-count": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status
		}
	};
};

DLFolderService.prototype.getFileEntriesAndFileShortcutsCount = function(groupId, folderId, status, mimeTypes) {
	return {
		"/dlfolder/get-file-entries-and-file-shortcuts-count": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status,
			"mimeTypes": mimeTypes
		}
	};
};

DLFolderService.prototype.getFolder = function(folderId) {
	return {
		"/dlfolder/get-folder": {
			"folderId": folderId
		}
	};
};

DLFolderService.prototype.getFolder = function(groupId, parentFolderId, name) {
	return {
		"/dlfolder/get-folder": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"name": name
		}
	};
};

DLFolderService.prototype.getFolderIds = function(groupId, folderId) {
	return {
		"/dlfolder/get-folder-ids": {
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

DLFolderService.prototype.getFolders = function(groupId, parentFolderId, start, end, obc) {
	return {
		"/dlfolder/get-folders": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLFolderService.prototype.getFolders = function(groupId, parentFolderId, status, includeMountfolders, start, end, obc) {
	return {
		"/dlfolder/get-folders": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"status": status,
			"includeMountfolders": includeMountfolders,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLFolderService.prototype.getFoldersAndFileEntriesAndFileShortcuts = function(groupId, folderId, status, includeMountFolders, start, end, obc) {
	return {
		"/dlfolder/get-folders-and-file-entries-and-file-shortcuts": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status,
			"includeMountFolders": includeMountFolders,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLFolderService.prototype.getFoldersAndFileEntriesAndFileShortcuts = function(groupId, folderId, status, mimeTypes, includeMountFolders, start, end, obc) {
	return {
		"/dlfolder/get-folders-and-file-entries-and-file-shortcuts": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status,
			"mimeTypes": mimeTypes,
			"includeMountFolders": includeMountFolders,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLFolderService.prototype.getFoldersAndFileEntriesAndFileShortcutsCount = function(groupId, folderId, status, includeMountFolders) {
	return {
		"/dlfolder/get-folders-and-file-entries-and-file-shortcuts-count": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status,
			"includeMountFolders": includeMountFolders
		}
	};
};

DLFolderService.prototype.getFoldersAndFileEntriesAndFileShortcutsCount = function(groupId, folderId, status, mimeTypes, includeMountFolders) {
	return {
		"/dlfolder/get-folders-and-file-entries-and-file-shortcuts-count": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status,
			"mimeTypes": mimeTypes,
			"includeMountFolders": includeMountFolders
		}
	};
};

DLFolderService.prototype.getFoldersCount = function(groupId, parentFolderId) {
	return {
		"/dlfolder/get-folders-count": {
			"groupId": groupId,
			"parentFolderId": parentFolderId
		}
	};
};

DLFolderService.prototype.getFoldersCount = function(groupId, parentFolderId, status, includeMountfolders) {
	return {
		"/dlfolder/get-folders-count": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"status": status,
			"includeMountfolders": includeMountfolders
		}
	};
};

DLFolderService.prototype.getMountFolders = function(groupId, parentFolderId, start, end, obc) {
	return {
		"/dlfolder/get-mount-folders": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLFolderService.prototype.getMountFoldersCount = function(groupId, parentFolderId) {
	return {
		"/dlfolder/get-mount-folders-count": {
			"groupId": groupId,
			"parentFolderId": parentFolderId
		}
	};
};

DLFolderService.prototype.getSubfolderIds = function(folderIds, groupId, folderId) {
	return {
		"/dlfolder/get-subfolder-ids": {
			"folderIds": folderIds,
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

DLFolderService.prototype.getSubfolderIds = function(groupId, folderId, recurse) {
	return {
		"/dlfolder/get-subfolder-ids": {
			"groupId": groupId,
			"folderId": folderId,
			"recurse": recurse
		}
	};
};

DLFolderService.prototype.hasFolderLock = function(folderId) {
	return {
		"/dlfolder/has-folder-lock": {
			"folderId": folderId
		}
	};
};

DLFolderService.prototype.hasInheritableLock = function(folderId) {
	return {
		"/dlfolder/has-inheritable-lock": {
			"folderId": folderId
		}
	};
};

DLFolderService.prototype.isFolderLocked = function(folderId) {
	return {
		"/dlfolder/is-folder-locked": {
			"folderId": folderId
		}
	};
};

DLFolderService.prototype.lockFolder = function(folderId) {
	return {
		"/dlfolder/lock-folder": {
			"folderId": folderId
		}
	};
};

DLFolderService.prototype.lockFolder = function(folderId, owner, inheritable, expirationTime) {
	return {
		"/dlfolder/lock-folder": {
			"folderId": folderId,
			"owner": owner,
			"inheritable": inheritable,
			"expirationTime": expirationTime
		}
	};
};

DLFolderService.prototype.moveFolder = function(folderId, parentFolderId, serviceContext) {
	return {
		"/dlfolder/move-folder": {
			"folderId": folderId,
			"parentFolderId": parentFolderId,
			"serviceContext": serviceContext
		}
	};
};

DLFolderService.prototype.refreshFolderLock = function(lockUuid, companyId, expirationTime) {
	return {
		"/dlfolder/refresh-folder-lock": {
			"lockUuid": lockUuid,
			"companyId": companyId,
			"expirationTime": expirationTime
		}
	};
};

DLFolderService.prototype.unlockFolder = function(folderId, lockUuid) {
	return {
		"/dlfolder/unlock-folder": {
			"folderId": folderId,
			"lockUuid": lockUuid
		}
	};
};

DLFolderService.prototype.unlockFolder = function(groupId, parentFolderId, name, lockUuid) {
	return {
		"/dlfolder/unlock-folder": {
			"groupId": groupId,
			"parentFolderId": parentFolderId,
			"name": name,
			"lockUuid": lockUuid
		}
	};
};

DLFolderService.prototype.updateFolder = function(folderId, name, description, defaultFileEntryTypeId, fileEntryTypeIds, overrideFileEntryTypes, serviceContext) {
	return {
		"/dlfolder/update-folder": {
			"folderId": folderId,
			"name": name,
			"description": description,
			"defaultFileEntryTypeId": defaultFileEntryTypeId,
			"fileEntryTypeIds": fileEntryTypeIds,
			"overrideFileEntryTypes": overrideFileEntryTypes,
			"serviceContext": serviceContext
		}
	};
};

DLFolderService.prototype.verifyInheritableLock = function(folderId, lockUuid) {
	return {
		"/dlfolder/verify-inheritable-lock": {
			"folderId": folderId,
			"lockUuid": lockUuid
		}
	};
};
