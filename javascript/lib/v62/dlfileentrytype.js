function DLFileEntryTypeService() {
}

DLFileEntryTypeService.prototype.addFileEntryType = function(groupId, name, description, ddmStructureIds, serviceContext) {
	return {
		"/dlfileentrytype/add-file-entry-type": {
			"groupId": groupId,
			"name": name,
			"description": description,
			"ddmStructureIds": ddmStructureIds,
			"serviceContext": serviceContext
		}
	};
};

DLFileEntryTypeService.prototype.addFileEntryType = function(groupId, fileEntryTypeKey, nameMap, descriptionMap, ddmStructureIds, serviceContext) {
	return {
		"/dlfileentrytype/add-file-entry-type": {
			"groupId": groupId,
			"fileEntryTypeKey": fileEntryTypeKey,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"ddmStructureIds": ddmStructureIds,
			"serviceContext": serviceContext
		}
	};
};

DLFileEntryTypeService.prototype.deleteFileEntryType = function(fileEntryTypeId) {
	return {
		"/dlfileentrytype/delete-file-entry-type": {
			"fileEntryTypeId": fileEntryTypeId
		}
	};
};

DLFileEntryTypeService.prototype.getFileEntryType = function(fileEntryTypeId) {
	return {
		"/dlfileentrytype/get-file-entry-type": {
			"fileEntryTypeId": fileEntryTypeId
		}
	};
};

DLFileEntryTypeService.prototype.getFileEntryTypes = function(groupIds) {
	return {
		"/dlfileentrytype/get-file-entry-types": {
			"groupIds": groupIds
		}
	};
};

DLFileEntryTypeService.prototype.getFileEntryTypes = function(groupIds, start, end) {
	return {
		"/dlfileentrytype/get-file-entry-types": {
			"groupIds": groupIds,
			"start": start,
			"end": end
		}
	};
};

DLFileEntryTypeService.prototype.getFileEntryTypesCount = function(groupIds) {
	return {
		"/dlfileentrytype/get-file-entry-types-count": {
			"groupIds": groupIds
		}
	};
};

DLFileEntryTypeService.prototype.getFolderFileEntryTypes = function(groupIds, folderId, inherited) {
	return {
		"/dlfileentrytype/get-folder-file-entry-types": {
			"groupIds": groupIds,
			"folderId": folderId,
			"inherited": inherited
		}
	};
};

DLFileEntryTypeService.prototype.search = function(companyId, groupIds, keywords, includeBasicFileEntryType, start, end, orderByComparator) {
	return {
		"/dlfileentrytype/search": {
			"companyId": companyId,
			"groupIds": groupIds,
			"keywords": keywords,
			"includeBasicFileEntryType": includeBasicFileEntryType,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

DLFileEntryTypeService.prototype.searchCount = function(companyId, groupIds, keywords, includeBasicFileEntryType) {
	return {
		"/dlfileentrytype/search-count": {
			"companyId": companyId,
			"groupIds": groupIds,
			"keywords": keywords,
			"includeBasicFileEntryType": includeBasicFileEntryType
		}
	};
};

DLFileEntryTypeService.prototype.updateFileEntryType = function(fileEntryTypeId, name, description, ddmStructureIds, serviceContext) {
	return {
		"/dlfileentrytype/update-file-entry-type": {
			"fileEntryTypeId": fileEntryTypeId,
			"name": name,
			"description": description,
			"ddmStructureIds": ddmStructureIds,
			"serviceContext": serviceContext
		}
	};
};

DLFileEntryTypeService.prototype.updateFileEntryType1 = function(fileEntryTypeId, nameMap, descriptionMap, ddmStructureIds, serviceContext) {
	return {
		"/dlfileentrytype/update-file-entry-type": {
			"fileEntryTypeId": fileEntryTypeId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"ddmStructureIds": ddmStructureIds,
			"serviceContext": serviceContext
		}
	};
};

module.exports = DLFileEntryTypeService;