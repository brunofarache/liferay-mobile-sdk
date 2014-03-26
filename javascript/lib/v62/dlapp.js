function DLAppService() {
}

DLAppService.prototype.addFileEntry = function(repositoryId, folderId, sourceFileName, mimeType, title, description, changeLog, bytes, serviceContext) {
	return {
		"/dlapp/add-file-entry": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"sourceFileName": sourceFileName,
			"mimeType": mimeType,
			"title": title,
			"description": description,
			"changeLog": changeLog,
			"bytes": bytes,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.addFileEntry = function(repositoryId, folderId, sourceFileName, mimeType, title, description, changeLog, file, serviceContext) {
	return {
		"/dlapp/add-file-entry": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"sourceFileName": sourceFileName,
			"mimeType": mimeType,
			"title": title,
			"description": description,
			"changeLog": changeLog,
			"file": file,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.addFileShortcut = function(repositoryId, folderId, toFileEntryId, serviceContext) {
	return {
		"/dlapp/add-file-shortcut": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"toFileEntryId": toFileEntryId,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.addFolder = function(repositoryId, parentFolderId, name, description, serviceContext) {
	return {
		"/dlapp/add-folder": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.addTempFileEntry = function(groupId, folderId, fileName, tempFolderName, file, mimeType) {
	return {
		"/dlapp/add-temp-file-entry": {
			"groupId": groupId,
			"folderId": folderId,
			"fileName": fileName,
			"tempFolderName": tempFolderName,
			"file": file,
			"mimeType": mimeType
		}
	};
};

DLAppService.prototype.cancelCheckOut = function(fileEntryId) {
	return {
		"/dlapp/cancel-check-out": {
			"fileEntryId": fileEntryId
		}
	};
};

DLAppService.prototype.checkInFileEntry = function(fileEntryId, lockUuid) {
	return {
		"/dlapp/check-in-file-entry": {
			"fileEntryId": fileEntryId,
			"lockUuid": lockUuid
		}
	};
};

DLAppService.prototype.checkInFileEntry = function(fileEntryId, lockUuid, serviceContext) {
	return {
		"/dlapp/check-in-file-entry": {
			"fileEntryId": fileEntryId,
			"lockUuid": lockUuid,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.checkInFileEntry = function(fileEntryId, majorVersion, changeLog, serviceContext) {
	return {
		"/dlapp/check-in-file-entry": {
			"fileEntryId": fileEntryId,
			"majorVersion": majorVersion,
			"changeLog": changeLog,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.checkOutFileEntry = function(fileEntryId, serviceContext) {
	return {
		"/dlapp/check-out-file-entry": {
			"fileEntryId": fileEntryId,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.checkOutFileEntry = function(fileEntryId, owner, expirationTime, serviceContext) {
	return {
		"/dlapp/check-out-file-entry": {
			"fileEntryId": fileEntryId,
			"owner": owner,
			"expirationTime": expirationTime,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.copyFolder = function(repositoryId, sourceFolderId, parentFolderId, name, description, serviceContext) {
	return {
		"/dlapp/copy-folder": {
			"repositoryId": repositoryId,
			"sourceFolderId": sourceFolderId,
			"parentFolderId": parentFolderId,
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.deleteFileEntry = function(fileEntryId) {
	return {
		"/dlapp/delete-file-entry": {
			"fileEntryId": fileEntryId
		}
	};
};

DLAppService.prototype.deleteFileEntryByTitle = function(repositoryId, folderId, title) {
	return {
		"/dlapp/delete-file-entry-by-title": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"title": title
		}
	};
};

DLAppService.prototype.deleteFileShortcut = function(fileShortcutId) {
	return {
		"/dlapp/delete-file-shortcut": {
			"fileShortcutId": fileShortcutId
		}
	};
};

DLAppService.prototype.deleteFileVersion = function(fileEntryId, version) {
	return {
		"/dlapp/delete-file-version": {
			"fileEntryId": fileEntryId,
			"version": version
		}
	};
};

DLAppService.prototype.deleteFolder = function(folderId) {
	return {
		"/dlapp/delete-folder": {
			"folderId": folderId
		}
	};
};

DLAppService.prototype.deleteFolder = function(repositoryId, parentFolderId, name) {
	return {
		"/dlapp/delete-folder": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"name": name
		}
	};
};

DLAppService.prototype.deleteTempFileEntry = function(groupId, folderId, fileName, tempFolderName) {
	return {
		"/dlapp/delete-temp-file-entry": {
			"groupId": groupId,
			"folderId": folderId,
			"fileName": fileName,
			"tempFolderName": tempFolderName
		}
	};
};

DLAppService.prototype.getFileEntries = function(repositoryId, folderId) {
	return {
		"/dlapp/get-file-entries": {
			"repositoryId": repositoryId,
			"folderId": folderId
		}
	};
};

DLAppService.prototype.getFileEntries = function(repositoryId, folderId, fileEntryTypeId) {
	return {
		"/dlapp/get-file-entries": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"fileEntryTypeId": fileEntryTypeId
		}
	};
};

DLAppService.prototype.getFileEntries = function(repositoryId, folderId, mimeTypes) {
	return {
		"/dlapp/get-file-entries": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"mimeTypes": mimeTypes
		}
	};
};

DLAppService.prototype.getFileEntries = function(repositoryId, folderId, start, end) {
	return {
		"/dlapp/get-file-entries": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"start": start,
			"end": end
		}
	};
};

DLAppService.prototype.getFileEntries = function(repositoryId, folderId, fileEntryTypeId, start, end) {
	return {
		"/dlapp/get-file-entries": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"fileEntryTypeId": fileEntryTypeId,
			"start": start,
			"end": end
		}
	};
};

DLAppService.prototype.getFileEntries = function(repositoryId, folderId, start, end, obc) {
	return {
		"/dlapp/get-file-entries": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLAppService.prototype.getFileEntries = function(repositoryId, folderId, fileEntryTypeId, start, end, obc) {
	return {
		"/dlapp/get-file-entries": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"fileEntryTypeId": fileEntryTypeId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLAppService.prototype.getFileEntriesAndFileShortcuts = function(repositoryId, folderId, status, start, end) {
	return {
		"/dlapp/get-file-entries-and-file-shortcuts": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

DLAppService.prototype.getFileEntriesAndFileShortcutsCount = function(repositoryId, folderId, status) {
	return {
		"/dlapp/get-file-entries-and-file-shortcuts-count": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"status": status
		}
	};
};

DLAppService.prototype.getFileEntriesAndFileShortcutsCount = function(repositoryId, folderId, status, mimeTypes) {
	return {
		"/dlapp/get-file-entries-and-file-shortcuts-count": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"status": status,
			"mimeTypes": mimeTypes
		}
	};
};

DLAppService.prototype.getFileEntriesCount = function(repositoryId, folderId) {
	return {
		"/dlapp/get-file-entries-count": {
			"repositoryId": repositoryId,
			"folderId": folderId
		}
	};
};

DLAppService.prototype.getFileEntriesCount = function(repositoryId, folderId, fileEntryTypeId) {
	return {
		"/dlapp/get-file-entries-count": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"fileEntryTypeId": fileEntryTypeId
		}
	};
};

DLAppService.prototype.getFileEntry = function(fileEntryId) {
	return {
		"/dlapp/get-file-entry": {
			"fileEntryId": fileEntryId
		}
	};
};

DLAppService.prototype.getFileEntry = function(groupId, folderId, title) {
	return {
		"/dlapp/get-file-entry": {
			"groupId": groupId,
			"folderId": folderId,
			"title": title
		}
	};
};

DLAppService.prototype.getFileEntryByUuidAndGroupId = function(uuid, groupId) {
	return {
		"/dlapp/get-file-entry-by-uuid-and-group-id": {
			"uuid": uuid,
			"groupId": groupId
		}
	};
};

DLAppService.prototype.getFileShortcut = function(fileShortcutId) {
	return {
		"/dlapp/get-file-shortcut": {
			"fileShortcutId": fileShortcutId
		}
	};
};

DLAppService.prototype.getFolder = function(folderId) {
	return {
		"/dlapp/get-folder": {
			"folderId": folderId
		}
	};
};

DLAppService.prototype.getFolder = function(repositoryId, parentFolderId, name) {
	return {
		"/dlapp/get-folder": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"name": name
		}
	};
};

DLAppService.prototype.getFolders = function(repositoryId, parentFolderId) {
	return {
		"/dlapp/get-folders": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId
		}
	};
};

DLAppService.prototype.getFolders = function(repositoryId, parentFolderId, includeMountFolders) {
	return {
		"/dlapp/get-folders": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"includeMountFolders": includeMountFolders
		}
	};
};

DLAppService.prototype.getFolders = function(repositoryId, parentFolderId, start, end) {
	return {
		"/dlapp/get-folders": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"start": start,
			"end": end
		}
	};
};

DLAppService.prototype.getFolders = function(repositoryId, parentFolderId, includeMountFolders, start, end) {
	return {
		"/dlapp/get-folders": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"includeMountFolders": includeMountFolders,
			"start": start,
			"end": end
		}
	};
};

DLAppService.prototype.getFolders = function(repositoryId, parentFolderId, start, end, obc) {
	return {
		"/dlapp/get-folders": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLAppService.prototype.getFolders = function(repositoryId, parentFolderId, includeMountFolders, start, end, obc) {
	return {
		"/dlapp/get-folders": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"includeMountFolders": includeMountFolders,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLAppService.prototype.getFolders = function(repositoryId, parentFolderId, status, includeMountFolders, start, end, obc) {
	return {
		"/dlapp/get-folders": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"status": status,
			"includeMountFolders": includeMountFolders,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLAppService.prototype.getFoldersAndFileEntriesAndFileShortcuts = function(repositoryId, folderId, status, includeMountFolders, start, end) {
	return {
		"/dlapp/get-folders-and-file-entries-and-file-shortcuts": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"status": status,
			"includeMountFolders": includeMountFolders,
			"start": start,
			"end": end
		}
	};
};

DLAppService.prototype.getFoldersAndFileEntriesAndFileShortcuts = function(repositoryId, folderId, status, includeMountFolders, start, end, obc) {
	return {
		"/dlapp/get-folders-and-file-entries-and-file-shortcuts": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"status": status,
			"includeMountFolders": includeMountFolders,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLAppService.prototype.getFoldersAndFileEntriesAndFileShortcuts = function(repositoryId, folderId, status, mimeTypes, includeMountFolders, start, end, obc) {
	return {
		"/dlapp/get-folders-and-file-entries-and-file-shortcuts": {
			"repositoryId": repositoryId,
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

DLAppService.prototype.getFoldersAndFileEntriesAndFileShortcutsCount = function(repositoryId, folderId, status, includeMountFolders) {
	return {
		"/dlapp/get-folders-and-file-entries-and-file-shortcuts-count": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"status": status,
			"includeMountFolders": includeMountFolders
		}
	};
};

DLAppService.prototype.getFoldersAndFileEntriesAndFileShortcutsCount = function(repositoryId, folderId, status, mimeTypes, includeMountFolders) {
	return {
		"/dlapp/get-folders-and-file-entries-and-file-shortcuts-count": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"status": status,
			"mimeTypes": mimeTypes,
			"includeMountFolders": includeMountFolders
		}
	};
};

DLAppService.prototype.getFoldersCount = function(repositoryId, parentFolderId) {
	return {
		"/dlapp/get-folders-count": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId
		}
	};
};

DLAppService.prototype.getFoldersCount = function(repositoryId, parentFolderId, includeMountFolders) {
	return {
		"/dlapp/get-folders-count": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"includeMountFolders": includeMountFolders
		}
	};
};

DLAppService.prototype.getFoldersCount = function(repositoryId, parentFolderId, status, includeMountFolders) {
	return {
		"/dlapp/get-folders-count": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"status": status,
			"includeMountFolders": includeMountFolders
		}
	};
};

DLAppService.prototype.getFoldersFileEntriesCount = function(repositoryId, folderIds, status) {
	return {
		"/dlapp/get-folders-file-entries-count": {
			"repositoryId": repositoryId,
			"folderIds": folderIds,
			"status": status
		}
	};
};

DLAppService.prototype.getGroupFileEntries = function(groupId, userId, start, end) {
	return {
		"/dlapp/get-group-file-entries": {
			"groupId": groupId,
			"userId": userId,
			"start": start,
			"end": end
		}
	};
};

DLAppService.prototype.getGroupFileEntries = function(groupId, userId, rootFolderId, start, end) {
	return {
		"/dlapp/get-group-file-entries": {
			"groupId": groupId,
			"userId": userId,
			"rootFolderId": rootFolderId,
			"start": start,
			"end": end
		}
	};
};

DLAppService.prototype.getGroupFileEntries = function(groupId, userId, start, end, obc) {
	return {
		"/dlapp/get-group-file-entries": {
			"groupId": groupId,
			"userId": userId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLAppService.prototype.getGroupFileEntries = function(groupId, userId, rootFolderId, start, end, obc) {
	return {
		"/dlapp/get-group-file-entries": {
			"groupId": groupId,
			"userId": userId,
			"rootFolderId": rootFolderId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLAppService.prototype.getGroupFileEntries = function(groupId, userId, rootFolderId, mimeTypes, status, start, end, obc) {
	return {
		"/dlapp/get-group-file-entries": {
			"groupId": groupId,
			"userId": userId,
			"rootFolderId": rootFolderId,
			"mimeTypes": mimeTypes,
			"status": status,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLAppService.prototype.getGroupFileEntriesCount = function(groupId, userId) {
	return {
		"/dlapp/get-group-file-entries-count": {
			"groupId": groupId,
			"userId": userId
		}
	};
};

DLAppService.prototype.getGroupFileEntriesCount = function(groupId, userId, rootFolderId) {
	return {
		"/dlapp/get-group-file-entries-count": {
			"groupId": groupId,
			"userId": userId,
			"rootFolderId": rootFolderId
		}
	};
};

DLAppService.prototype.getGroupFileEntriesCount = function(groupId, userId, rootFolderId, mimeTypes, status) {
	return {
		"/dlapp/get-group-file-entries-count": {
			"groupId": groupId,
			"userId": userId,
			"rootFolderId": rootFolderId,
			"mimeTypes": mimeTypes,
			"status": status
		}
	};
};

DLAppService.prototype.getMountFolders = function(repositoryId, parentFolderId) {
	return {
		"/dlapp/get-mount-folders": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId
		}
	};
};

DLAppService.prototype.getMountFolders = function(repositoryId, parentFolderId, start, end) {
	return {
		"/dlapp/get-mount-folders": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"start": start,
			"end": end
		}
	};
};

DLAppService.prototype.getMountFolders = function(repositoryId, parentFolderId, start, end, obc) {
	return {
		"/dlapp/get-mount-folders": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLAppService.prototype.getMountFoldersCount = function(repositoryId, parentFolderId) {
	return {
		"/dlapp/get-mount-folders-count": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId
		}
	};
};

DLAppService.prototype.getSubfolderIds = function(repositoryId, folderId) {
	return {
		"/dlapp/get-subfolder-ids": {
			"repositoryId": repositoryId,
			"folderId": folderId
		}
	};
};

DLAppService.prototype.getSubfolderIds = function(repositoryId, folderId, recurse) {
	return {
		"/dlapp/get-subfolder-ids": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"recurse": recurse
		}
	};
};

DLAppService.prototype.getSubfolderIds = function(repositoryId, folderIds, folderId) {
	return {
		"/dlapp/get-subfolder-ids": {
			"repositoryId": repositoryId,
			"folderIds": folderIds,
			"folderId": folderId
		}
	};
};

DLAppService.prototype.getTempFileEntryNames = function(groupId, folderId, tempFolderName) {
	return {
		"/dlapp/get-temp-file-entry-names": {
			"groupId": groupId,
			"folderId": folderId,
			"tempFolderName": tempFolderName
		}
	};
};

DLAppService.prototype.lockFileEntry = function(fileEntryId) {
	return {
		"/dlapp/lock-file-entry": {
			"fileEntryId": fileEntryId
		}
	};
};

DLAppService.prototype.lockFileEntry = function(fileEntryId, owner, expirationTime) {
	return {
		"/dlapp/lock-file-entry": {
			"fileEntryId": fileEntryId,
			"owner": owner,
			"expirationTime": expirationTime
		}
	};
};

DLAppService.prototype.lockFolder = function(repositoryId, folderId) {
	return {
		"/dlapp/lock-folder": {
			"repositoryId": repositoryId,
			"folderId": folderId
		}
	};
};

DLAppService.prototype.lockFolder = function(repositoryId, folderId, owner, inheritable, expirationTime) {
	return {
		"/dlapp/lock-folder": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"owner": owner,
			"inheritable": inheritable,
			"expirationTime": expirationTime
		}
	};
};

DLAppService.prototype.moveFileEntry = function(fileEntryId, newFolderId, serviceContext) {
	return {
		"/dlapp/move-file-entry": {
			"fileEntryId": fileEntryId,
			"newFolderId": newFolderId,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.moveFileEntryFromTrash = function(fileEntryId, newFolderId, serviceContext) {
	return {
		"/dlapp/move-file-entry-from-trash": {
			"fileEntryId": fileEntryId,
			"newFolderId": newFolderId,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.moveFileEntryToTrash = function(fileEntryId) {
	return {
		"/dlapp/move-file-entry-to-trash": {
			"fileEntryId": fileEntryId
		}
	};
};

DLAppService.prototype.moveFileShortcutFromTrash = function(fileShortcutId, newFolderId, serviceContext) {
	return {
		"/dlapp/move-file-shortcut-from-trash": {
			"fileShortcutId": fileShortcutId,
			"newFolderId": newFolderId,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.moveFileShortcutToTrash = function(fileShortcutId) {
	return {
		"/dlapp/move-file-shortcut-to-trash": {
			"fileShortcutId": fileShortcutId
		}
	};
};

DLAppService.prototype.moveFolder = function(folderId, parentFolderId, serviceContext) {
	return {
		"/dlapp/move-folder": {
			"folderId": folderId,
			"parentFolderId": parentFolderId,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.moveFolderFromTrash = function(folderId, parentFolderId, serviceContext) {
	return {
		"/dlapp/move-folder-from-trash": {
			"folderId": folderId,
			"parentFolderId": parentFolderId,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.moveFolderToTrash = function(folderId) {
	return {
		"/dlapp/move-folder-to-trash": {
			"folderId": folderId
		}
	};
};

DLAppService.prototype.refreshFileEntryLock = function(lockUuid, companyId, expirationTime) {
	return {
		"/dlapp/refresh-file-entry-lock": {
			"lockUuid": lockUuid,
			"companyId": companyId,
			"expirationTime": expirationTime
		}
	};
};

DLAppService.prototype.refreshFolderLock = function(lockUuid, companyId, expirationTime) {
	return {
		"/dlapp/refresh-folder-lock": {
			"lockUuid": lockUuid,
			"companyId": companyId,
			"expirationTime": expirationTime
		}
	};
};

DLAppService.prototype.restoreFileEntryFromTrash = function(fileEntryId) {
	return {
		"/dlapp/restore-file-entry-from-trash": {
			"fileEntryId": fileEntryId
		}
	};
};

DLAppService.prototype.restoreFileShortcutFromTrash = function(fileShortcutId) {
	return {
		"/dlapp/restore-file-shortcut-from-trash": {
			"fileShortcutId": fileShortcutId
		}
	};
};

DLAppService.prototype.restoreFolderFromTrash = function(folderId) {
	return {
		"/dlapp/restore-folder-from-trash": {
			"folderId": folderId
		}
	};
};

DLAppService.prototype.revertFileEntry = function(fileEntryId, version, serviceContext) {
	return {
		"/dlapp/revert-file-entry": {
			"fileEntryId": fileEntryId,
			"version": version,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.search = function(repositoryId, searchContext) {
	return {
		"/dlapp/search": {
			"repositoryId": repositoryId,
			"searchContext": searchContext
		}
	};
};

DLAppService.prototype.search = function(repositoryId, searchContext, query) {
	return {
		"/dlapp/search": {
			"repositoryId": repositoryId,
			"searchContext": searchContext,
			"query": query
		}
	};
};

DLAppService.prototype.search = function(repositoryId, creatorUserId, status, start, end) {
	return {
		"/dlapp/search": {
			"repositoryId": repositoryId,
			"creatorUserId": creatorUserId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

DLAppService.prototype.search = function(repositoryId, creatorUserId, folderId, mimeTypes, status, start, end) {
	return {
		"/dlapp/search": {
			"repositoryId": repositoryId,
			"creatorUserId": creatorUserId,
			"folderId": folderId,
			"mimeTypes": mimeTypes,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

DLAppService.prototype.subscribeFileEntryType = function(groupId, fileEntryTypeId) {
	return {
		"/dlapp/subscribe-file-entry-type": {
			"groupId": groupId,
			"fileEntryTypeId": fileEntryTypeId
		}
	};
};

DLAppService.prototype.subscribeFolder = function(groupId, folderId) {
	return {
		"/dlapp/subscribe-folder": {
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

DLAppService.prototype.unlockFileEntry = function(fileEntryId) {
	return {
		"/dlapp/unlock-file-entry": {
			"fileEntryId": fileEntryId
		}
	};
};

DLAppService.prototype.unlockFileEntry = function(fileEntryId, lockUuid) {
	return {
		"/dlapp/unlock-file-entry": {
			"fileEntryId": fileEntryId,
			"lockUuid": lockUuid
		}
	};
};

DLAppService.prototype.unlockFolder = function(repositoryId, folderId, lockUuid) {
	return {
		"/dlapp/unlock-folder": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"lockUuid": lockUuid
		}
	};
};

DLAppService.prototype.unlockFolder = function(repositoryId, parentFolderId, name, lockUuid) {
	return {
		"/dlapp/unlock-folder": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"name": name,
			"lockUuid": lockUuid
		}
	};
};

DLAppService.prototype.unsubscribeFileEntryType = function(groupId, fileEntryTypeId) {
	return {
		"/dlapp/unsubscribe-file-entry-type": {
			"groupId": groupId,
			"fileEntryTypeId": fileEntryTypeId
		}
	};
};

DLAppService.prototype.unsubscribeFolder = function(groupId, folderId) {
	return {
		"/dlapp/unsubscribe-folder": {
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

DLAppService.prototype.updateFileEntry = function(fileEntryId, sourceFileName, mimeType, title, description, changeLog, majorVersion, bytes, serviceContext) {
	return {
		"/dlapp/update-file-entry": {
			"fileEntryId": fileEntryId,
			"sourceFileName": sourceFileName,
			"mimeType": mimeType,
			"title": title,
			"description": description,
			"changeLog": changeLog,
			"majorVersion": majorVersion,
			"bytes": bytes,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.updateFileEntry = function(fileEntryId, sourceFileName, mimeType, title, description, changeLog, majorVersion, file, serviceContext) {
	return {
		"/dlapp/update-file-entry": {
			"fileEntryId": fileEntryId,
			"sourceFileName": sourceFileName,
			"mimeType": mimeType,
			"title": title,
			"description": description,
			"changeLog": changeLog,
			"majorVersion": majorVersion,
			"file": file,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.updateFileEntryAndCheckIn = function(fileEntryId, sourceFileName, mimeType, title, description, changeLog, majorVersion, file, serviceContext) {
	return {
		"/dlapp/update-file-entry-and-check-in": {
			"fileEntryId": fileEntryId,
			"sourceFileName": sourceFileName,
			"mimeType": mimeType,
			"title": title,
			"description": description,
			"changeLog": changeLog,
			"majorVersion": majorVersion,
			"file": file,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.updateFileShortcut = function(fileShortcutId, folderId, toFileEntryId, serviceContext) {
	return {
		"/dlapp/update-file-shortcut": {
			"fileShortcutId": fileShortcutId,
			"folderId": folderId,
			"toFileEntryId": toFileEntryId,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.updateFolder = function(folderId, name, description, serviceContext) {
	return {
		"/dlapp/update-folder": {
			"folderId": folderId,
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

DLAppService.prototype.verifyFileEntryCheckOut = function(repositoryId, fileEntryId, lockUuid) {
	return {
		"/dlapp/verify-file-entry-check-out": {
			"repositoryId": repositoryId,
			"fileEntryId": fileEntryId,
			"lockUuid": lockUuid
		}
	};
};

DLAppService.prototype.verifyFileEntryLock = function(repositoryId, fileEntryId, lockUuid) {
	return {
		"/dlapp/verify-file-entry-lock": {
			"repositoryId": repositoryId,
			"fileEntryId": fileEntryId,
			"lockUuid": lockUuid
		}
	};
};

DLAppService.prototype.verifyInheritableLock = function(repositoryId, folderId, lockUuid) {
	return {
		"/dlapp/verify-inheritable-lock": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"lockUuid": lockUuid
		}
	};
};

module.exports = DLAppService;