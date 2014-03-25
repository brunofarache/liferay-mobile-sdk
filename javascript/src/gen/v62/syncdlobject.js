function SyncDLObjectService() {
}

SyncDLObjectService.prototype.addFileEntry = function(repositoryId, folderId, sourceFileName, mimeType, title, description, changeLog, file, checksum, serviceContext) {
	return {
		"/sync-web/syncdlobject/add-file-entry": {
			"repositoryId": repositoryId,
			"folderId": folderId,
			"sourceFileName": sourceFileName,
			"mimeType": mimeType,
			"title": title,
			"description": description,
			"changeLog": changeLog,
			"file": file,
			"checksum": checksum,
			"serviceContext": serviceContext
		}
	};
};

SyncDLObjectService.prototype.addFolder = function(repositoryId, parentFolderId, name, description, serviceContext) {
	return {
		"/sync-web/syncdlobject/add-folder": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId,
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

SyncDLObjectService.prototype.cancelCheckOut = function(fileEntryId) {
	return {
		"/sync-web/syncdlobject/cancel-check-out": {
			"fileEntryId": fileEntryId
		}
	};
};

SyncDLObjectService.prototype.checkInFileEntry = function(fileEntryId, majorVersion, changeLog, serviceContext) {
	return {
		"/sync-web/syncdlobject/check-in-file-entry": {
			"fileEntryId": fileEntryId,
			"majorVersion": majorVersion,
			"changeLog": changeLog,
			"serviceContext": serviceContext
		}
	};
};

SyncDLObjectService.prototype.checkOutFileEntry = function(fileEntryId, serviceContext) {
	return {
		"/sync-web/syncdlobject/check-out-file-entry": {
			"fileEntryId": fileEntryId,
			"serviceContext": serviceContext
		}
	};
};

SyncDLObjectService.prototype.checkOutFileEntry = function(fileEntryId, owner, expirationTime, serviceContext) {
	return {
		"/sync-web/syncdlobject/check-out-file-entry": {
			"fileEntryId": fileEntryId,
			"owner": owner,
			"expirationTime": expirationTime,
			"serviceContext": serviceContext
		}
	};
};

SyncDLObjectService.prototype.getAllSyncDlObjects = function(repositoryId, folderId) {
	return {
		"/sync-web/syncdlobject/get-all-sync-dl-objects": {
			"repositoryId": repositoryId,
			"folderId": folderId
		}
	};
};

SyncDLObjectService.prototype.getFileEntrySyncDlObject = function(groupId, folderId, title) {
	return {
		"/sync-web/syncdlobject/get-file-entry-sync-dl-object": {
			"groupId": groupId,
			"folderId": folderId,
			"title": title
		}
	};
};

SyncDLObjectService.prototype.getFileEntrySyncDlObjects = function(repositoryId, folderId) {
	return {
		"/sync-web/syncdlobject/get-file-entry-sync-dl-objects": {
			"repositoryId": repositoryId,
			"folderId": folderId
		}
	};
};

SyncDLObjectService.prototype.getFolderSyncDlObject = function(folderId) {
	return {
		"/sync-web/syncdlobject/get-folder-sync-dl-object": {
			"folderId": folderId
		}
	};
};

SyncDLObjectService.prototype.getFolderSyncDlObjects = function(repositoryId, parentFolderId) {
	return {
		"/sync-web/syncdlobject/get-folder-sync-dl-objects": {
			"repositoryId": repositoryId,
			"parentFolderId": parentFolderId
		}
	};
};

SyncDLObjectService.prototype.getGroup = function(groupId) {
	return {
		"/sync-web/syncdlobject/get-group": {
			"groupId": groupId
		}
	};
};

SyncDLObjectService.prototype.getLatestModifiedTime = function() {
	return {
		"/sync-web/syncdlobject/get-latest-modified-time": {
		}
	};
};

SyncDLObjectService.prototype.getSyncContext = function(uuid) {
	return {
		"/sync-web/syncdlobject/get-sync-context": {
			"uuid": uuid
		}
	};
};

SyncDLObjectService.prototype.getSyncDlObjectUpdate = function(companyId, repositoryId, lastAccessTime) {
	return {
		"/sync-web/syncdlobject/get-sync-dl-object-update": {
			"companyId": companyId,
			"repositoryId": repositoryId,
			"lastAccessTime": lastAccessTime
		}
	};
};

SyncDLObjectService.prototype.getUserSitesGroups = function() {
	return {
		"/sync-web/syncdlobject/get-user-sites-groups": {
		}
	};
};

SyncDLObjectService.prototype.moveFileEntry = function(fileEntryId, newFolderId, serviceContext) {
	return {
		"/sync-web/syncdlobject/move-file-entry": {
			"fileEntryId": fileEntryId,
			"newFolderId": newFolderId,
			"serviceContext": serviceContext
		}
	};
};

SyncDLObjectService.prototype.moveFileEntryToTrash = function(fileEntryId) {
	return {
		"/sync-web/syncdlobject/move-file-entry-to-trash": {
			"fileEntryId": fileEntryId
		}
	};
};

SyncDLObjectService.prototype.moveFolder = function(folderId, parentFolderId, serviceContext) {
	return {
		"/sync-web/syncdlobject/move-folder": {
			"folderId": folderId,
			"parentFolderId": parentFolderId,
			"serviceContext": serviceContext
		}
	};
};

SyncDLObjectService.prototype.moveFolderToTrash = function(folderId) {
	return {
		"/sync-web/syncdlobject/move-folder-to-trash": {
			"folderId": folderId
		}
	};
};

SyncDLObjectService.prototype.patchFileEntry = function(fileEntryId, sourceVersion, sourceFileName, mimeType, title, description, changeLog, majorVersion, deltaFile, checksum, serviceContext) {
	return {
		"/sync-web/syncdlobject/patch-file-entry": {
			"fileEntryId": fileEntryId,
			"sourceVersion": sourceVersion,
			"sourceFileName": sourceFileName,
			"mimeType": mimeType,
			"title": title,
			"description": description,
			"changeLog": changeLog,
			"majorVersion": majorVersion,
			"deltaFile": deltaFile,
			"checksum": checksum,
			"serviceContext": serviceContext
		}
	};
};

SyncDLObjectService.prototype.restoreFileEntryFromTrash = function(fileEntryId) {
	return {
		"/sync-web/syncdlobject/restore-file-entry-from-trash": {
			"fileEntryId": fileEntryId
		}
	};
};

SyncDLObjectService.prototype.restoreFolderFromTrash = function(folderId) {
	return {
		"/sync-web/syncdlobject/restore-folder-from-trash": {
			"folderId": folderId
		}
	};
};

SyncDLObjectService.prototype.updateFileEntry = function(fileEntryId, sourceFileName, mimeType, title, description, changeLog, majorVersion, file, checksum, serviceContext) {
	return {
		"/sync-web/syncdlobject/update-file-entry": {
			"fileEntryId": fileEntryId,
			"sourceFileName": sourceFileName,
			"mimeType": mimeType,
			"title": title,
			"description": description,
			"changeLog": changeLog,
			"majorVersion": majorVersion,
			"file": file,
			"checksum": checksum,
			"serviceContext": serviceContext
		}
	};
};

SyncDLObjectService.prototype.updateFolder = function(folderId, name, description, serviceContext) {
	return {
		"/sync-web/syncdlobject/update-folder": {
			"folderId": folderId,
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};
