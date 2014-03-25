function DLFileVersionService() {
}

DLFileVersionService.prototype.getFileVersion = function(fileVersionId) {
	return {
		"/dlfileversion/get-file-version": {
			"fileVersionId": fileVersionId
		}
	};
};

DLFileVersionService.prototype.getFileVersions = function(fileEntryId, status) {
	return {
		"/dlfileversion/get-file-versions": {
			"fileEntryId": fileEntryId,
			"status": status
		}
	};
};

DLFileVersionService.prototype.getFileVersionsCount = function(fileEntryId, status) {
	return {
		"/dlfileversion/get-file-versions-count": {
			"fileEntryId": fileEntryId,
			"status": status
		}
	};
};

DLFileVersionService.prototype.getLatestFileVersion = function(fileEntryId) {
	return {
		"/dlfileversion/get-latest-file-version": {
			"fileEntryId": fileEntryId
		}
	};
};
