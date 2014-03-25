function DLFileShortcutService() {
}

DLFileShortcutService.prototype.addFileShortcut = function(groupId, folderId, toFileEntryId, serviceContext) {
	return {
		"/dlfileshortcut/add-file-shortcut": {
			"groupId": groupId,
			"folderId": folderId,
			"toFileEntryId": toFileEntryId,
			"serviceContext": serviceContext
		}
	};
};

DLFileShortcutService.prototype.deleteFileShortcut = function(fileShortcutId) {
	return {
		"/dlfileshortcut/delete-file-shortcut": {
			"fileShortcutId": fileShortcutId
		}
	};
};

DLFileShortcutService.prototype.getFileShortcut = function(fileShortcutId) {
	return {
		"/dlfileshortcut/get-file-shortcut": {
			"fileShortcutId": fileShortcutId
		}
	};
};

DLFileShortcutService.prototype.updateFileShortcut = function(fileShortcutId, folderId, toFileEntryId, serviceContext) {
	return {
		"/dlfileshortcut/update-file-shortcut": {
			"fileShortcutId": fileShortcutId,
			"folderId": folderId,
			"toFileEntryId": toFileEntryId,
			"serviceContext": serviceContext
		}
	};
};
