function DDLRecordSetService() {
}

DDLRecordSetService.prototype.addRecordSet = function(groupId, ddmStructureId, recordSetKey, nameMap, descriptionMap, minDisplayRows, scope, serviceContext) {
	return {
		"/ddlrecordset/add-record-set": {
			"groupId": groupId,
			"ddmStructureId": ddmStructureId,
			"recordSetKey": recordSetKey,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"minDisplayRows": minDisplayRows,
			"scope": scope,
			"serviceContext": serviceContext
		}
	};
};

DDLRecordSetService.prototype.deleteRecordSet = function(recordSetId) {
	return {
		"/ddlrecordset/delete-record-set": {
			"recordSetId": recordSetId
		}
	};
};

DDLRecordSetService.prototype.getRecordSet = function(recordSetId) {
	return {
		"/ddlrecordset/get-record-set": {
			"recordSetId": recordSetId
		}
	};
};

DDLRecordSetService.prototype.search = function(companyId, groupId, keywords, scope, start, end, orderByComparator) {
	return {
		"/ddlrecordset/search": {
			"companyId": companyId,
			"groupId": groupId,
			"keywords": keywords,
			"scope": scope,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

DDLRecordSetService.prototype.search = function(companyId, groupId, name, description, scope, andOperator, start, end, orderByComparator) {
	return {
		"/ddlrecordset/search": {
			"companyId": companyId,
			"groupId": groupId,
			"name": name,
			"description": description,
			"scope": scope,
			"andOperator": andOperator,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

DDLRecordSetService.prototype.searchCount = function(companyId, groupId, keywords, scope) {
	return {
		"/ddlrecordset/search-count": {
			"companyId": companyId,
			"groupId": groupId,
			"keywords": keywords,
			"scope": scope
		}
	};
};

DDLRecordSetService.prototype.searchCount = function(companyId, groupId, name, description, scope, andOperator) {
	return {
		"/ddlrecordset/search-count": {
			"companyId": companyId,
			"groupId": groupId,
			"name": name,
			"description": description,
			"scope": scope,
			"andOperator": andOperator
		}
	};
};

DDLRecordSetService.prototype.updateMinDisplayRows = function(recordSetId, minDisplayRows, serviceContext) {
	return {
		"/ddlrecordset/update-min-display-rows": {
			"recordSetId": recordSetId,
			"minDisplayRows": minDisplayRows,
			"serviceContext": serviceContext
		}
	};
};

DDLRecordSetService.prototype.updateRecordSet = function(recordSetId, ddmStructureId, nameMap, descriptionMap, minDisplayRows, serviceContext) {
	return {
		"/ddlrecordset/update-record-set": {
			"recordSetId": recordSetId,
			"ddmStructureId": ddmStructureId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"minDisplayRows": minDisplayRows,
			"serviceContext": serviceContext
		}
	};
};

DDLRecordSetService.prototype.updateRecordSet = function(groupId, ddmStructureId, recordSetKey, nameMap, descriptionMap, minDisplayRows, serviceContext) {
	return {
		"/ddlrecordset/update-record-set": {
			"groupId": groupId,
			"ddmStructureId": ddmStructureId,
			"recordSetKey": recordSetKey,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"minDisplayRows": minDisplayRows,
			"serviceContext": serviceContext
		}
	};
};

module.exports = DDLRecordSetService;