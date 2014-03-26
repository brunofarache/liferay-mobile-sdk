function DLFileEntryService() {
}

DLFileEntryService.prototype.cancelCheckOut = function(fileEntryId) {
	return {
		"/dlfileentry/cancel-check-out": {
			"fileEntryId": fileEntryId
		}
	};
};

DLFileEntryService.prototype.checkInFileEntry = function(fileEntryId, lockUuid) {
	return {
		"/dlfileentry/check-in-file-entry": {
			"fileEntryId": fileEntryId,
			"lockUuid": lockUuid
		}
	};
};

DLFileEntryService.prototype.checkInFileEntry = function(fileEntryId, lockUuid, serviceContext) {
	return {
		"/dlfileentry/check-in-file-entry": {
			"fileEntryId": fileEntryId,
			"lockUuid": lockUuid,
			"serviceContext": serviceContext
		}
	};
};

DLFileEntryService.prototype.checkInFileEntry = function(fileEntryId, major, changeLog, serviceContext) {
	return {
		"/dlfileentry/check-in-file-entry": {
			"fileEntryId": fileEntryId,
			"major": major,
			"changeLog": changeLog,
			"serviceContext": serviceContext
		}
	};
};

DLFileEntryService.prototype.checkOutFileEntry = function(fileEntryId) {
	return {
		"/dlfileentry/check-out-file-entry": {
			"fileEntryId": fileEntryId
		}
	};
};

DLFileEntryService.prototype.checkOutFileEntry = function(fileEntryId, serviceContext) {
	return {
		"/dlfileentry/check-out-file-entry": {
			"fileEntryId": fileEntryId,
			"serviceContext": serviceContext
		}
	};
};

DLFileEntryService.prototype.checkOutFileEntry = function(fileEntryId, owner, expirationTime) {
	return {
		"/dlfileentry/check-out-file-entry": {
			"fileEntryId": fileEntryId,
			"owner": owner,
			"expirationTime": expirationTime
		}
	};
};

DLFileEntryService.prototype.checkOutFileEntry = function(fileEntryId, owner, expirationTime, serviceContext) {
	return {
		"/dlfileentry/check-out-file-entry": {
			"fileEntryId": fileEntryId,
			"owner": owner,
			"expirationTime": expirationTime,
			"serviceContext": serviceContext
		}
	};
};

DLFileEntryService.prototype.copyFileEntry = function(groupId, repositoryId, fileEntryId, destFolderId, serviceContext) {
	return {
		"/dlfileentry/copy-file-entry": {
			"groupId": groupId,
			"repositoryId": repositoryId,
			"fileEntryId": fileEntryId,
			"destFolderId": destFolderId,
			"serviceContext": serviceContext
		}
	};
};

DLFileEntryService.prototype.deleteFileEntry = function(fileEntryId) {
	return {
		"/dlfileentry/delete-file-entry": {
			"fileEntryId": fileEntryId
		}
	};
};

DLFileEntryService.prototype.deleteFileEntry = function(groupId, folderId, title) {
	return {
		"/dlfileentry/delete-file-entry": {
			"groupId": groupId,
			"folderId": folderId,
			"title": title
		}
	};
};

DLFileEntryService.prototype.deleteFileVersion = function(fileEntryId, version) {
	return {
		"/dlfileentry/delete-file-version": {
			"fileEntryId": fileEntryId,
			"version": version
		}
	};
};

DLFileEntryService.prototype.fetchFileEntryByImageId = function(imageId) {
	return {
		"/dlfileentry/fetch-file-entry-by-image-id": {
			"imageId": imageId
		}
	};
};

DLFileEntryService.prototype.getFileEntries = function(groupId, folderId, start, end, obc) {
	return {
		"/dlfileentry/get-file-entries": {
			"groupId": groupId,
			"folderId": folderId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLFileEntryService.prototype.getFileEntries = function(groupId, folderId, fileEntryTypeId, start, end, obc) {
	return {
		"/dlfileentry/get-file-entries": {
			"groupId": groupId,
			"folderId": folderId,
			"fileEntryTypeId": fileEntryTypeId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLFileEntryService.prototype.getFileEntries = function(groupId, folderId, mimeTypes, start, end, obc) {
	return {
		"/dlfileentry/get-file-entries": {
			"groupId": groupId,
			"folderId": folderId,
			"mimeTypes": mimeTypes,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLFileEntryService.prototype.getFileEntries = function(groupId, folderId, status, start, end, obc) {
	return {
		"/dlfileentry/get-file-entries": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLFileEntryService.prototype.getFileEntriesCount = function(groupId, folderId) {
	return {
		"/dlfileentry/get-file-entries-count": {
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

DLFileEntryService.prototype.getFileEntriesCount = function(groupId, folderId, fileEntryTypeId) {
	return {
		"/dlfileentry/get-file-entries-count": {
			"groupId": groupId,
			"folderId": folderId,
			"fileEntryTypeId": fileEntryTypeId
		}
	};
};

DLFileEntryService.prototype.getFileEntriesCount = function(groupId, folderId, mimeTypes) {
	return {
		"/dlfileentry/get-file-entries-count": {
			"groupId": groupId,
			"folderId": folderId,
			"mimeTypes": mimeTypes
		}
	};
};

DLFileEntryService.prototype.getFileEntriesCount = function(groupId, folderId, status) {
	return {
		"/dlfileentry/get-file-entries-count": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status
		}
	};
};

DLFileEntryService.prototype.getFileEntry = function(fileEntryId) {
	return {
		"/dlfileentry/get-file-entry": {
			"fileEntryId": fileEntryId
		}
	};
};

DLFileEntryService.prototype.getFileEntry = function(groupId, folderId, title) {
	return {
		"/dlfileentry/get-file-entry": {
			"groupId": groupId,
			"folderId": folderId,
			"title": title
		}
	};
};

DLFileEntryService.prototype.getFileEntryByUuidAndGroupId = function(uuid, groupId) {
	return {
		"/dlfileentry/get-file-entry-by-uuid-and-group-id": {
			"uuid": uuid,
			"groupId": groupId
		}
	};
};

DLFileEntryService.prototype.getFileEntryLock = function(fileEntryId) {
	return {
		"/dlfileentry/get-file-entry-lock": {
			"fileEntryId": fileEntryId
		}
	};
};

DLFileEntryService.prototype.getFoldersFileEntriesCount = function(groupId, folderIds, status) {
	return {
		"/dlfileentry/get-folders-file-entries-count": {
			"groupId": groupId,
			"folderIds": folderIds,
			"status": status
		}
	};
};

DLFileEntryService.prototype.getGroupFileEntries = function(groupId, userId, rootFolderId, start, end, obc) {
	return {
		"/dlfileentry/get-group-file-entries": {
			"groupId": groupId,
			"userId": userId,
			"rootFolderId": rootFolderId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

DLFileEntryService.prototype.getGroupFileEntries = function(groupId, userId, rootFolderId, mimeTypes, status, start, end, obc) {
	return {
		"/dlfileentry/get-group-file-entries": {
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

DLFileEntryService.prototype.getGroupFileEntriesCount = function(groupId, userId, rootFolderId) {
	return {
		"/dlfileentry/get-group-file-entries-count": {
			"groupId": groupId,
			"userId": userId,
			"rootFolderId": rootFolderId
		}
	};
};

DLFileEntryService.prototype.getGroupFileEntriesCount = function(groupId, userId, rootFolderId, mimeTypes, status) {
	return {
		"/dlfileentry/get-group-file-entries-count": {
			"groupId": groupId,
			"userId": userId,
			"rootFolderId": rootFolderId,
			"mimeTypes": mimeTypes,
			"status": status
		}
	};
};

DLFileEntryService.prototype.hasFileEntryLock = function(fileEntryId) {
	return {
		"/dlfileentry/has-file-entry-lock": {
			"fileEntryId": fileEntryId
		}
	};
};

DLFileEntryService.prototype.isFileEntryCheckedOut = function(fileEntryId) {
	return {
		"/dlfileentry/is-file-entry-checked-out": {
			"fileEntryId": fileEntryId
		}
	};
};

DLFileEntryService.prototype.moveFileEntry = function(fileEntryId, newFolderId, serviceContext) {
	return {
		"/dlfileentry/move-file-entry": {
			"fileEntryId": fileEntryId,
			"newFolderId": newFolderId,
			"serviceContext": serviceContext
		}
	};
};

DLFileEntryService.prototype.refreshFileEntryLock = function(lockUuid, companyId, expirationTime) {
	return {
		"/dlfileentry/refresh-file-entry-lock": {
			"lockUuid": lockUuid,
			"companyId": companyId,
			"expirationTime": expirationTime
		}
	};
};

DLFileEntryService.prototype.revertFileEntry = function(fileEntryId, version, serviceContext) {
	return {
		"/dlfileentry/revert-file-entry": {
			"fileEntryId": fileEntryId,
			"version": version,
			"serviceContext": serviceContext
		}
	};
};

DLFileEntryService.prototype.search = function(groupId, creatorUserId, status, start, end) {
	return {
		"/dlfileentry/search": {
			"groupId": groupId,
			"creatorUserId": creatorUserId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

DLFileEntryService.prototype.search = function(groupId, creatorUserId, folderId, mimeTypes, status, start, end) {
	return {
		"/dlfileentry/search": {
			"groupId": groupId,
			"creatorUserId": creatorUserId,
			"folderId": folderId,
			"mimeTypes": mimeTypes,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

DLFileEntryService.prototype.verifyFileEntryCheckOut = function(fileEntryId, lockUuid) {
	return {
		"/dlfileentry/verify-file-entry-check-out": {
			"fileEntryId": fileEntryId,
			"lockUuid": lockUuid
		}
	};
};

DLFileEntryService.prototype.verifyFileEntryLock = function(fileEntryId, lockUuid) {
	return {
		"/dlfileentry/verify-file-entry-lock": {
			"fileEntryId": fileEntryId,
			"lockUuid": lockUuid
		}
	};
};

module.exports = DLFileEntryService;