function DDLRecordService() {
}

DDLRecordService.prototype.addRecord1 = function(groupId, recordSetId, displayIndex, fieldsMap, serviceContext) {
	return {
		"/ddlrecord/add-record": {
			"groupId": groupId,
			"recordSetId": recordSetId,
			"displayIndex": displayIndex,
			"fieldsMap": fieldsMap,
			"serviceContext": serviceContext
		}
	};
};

DDLRecordService.prototype.deleteRecordLocale = function(recordId, locale, serviceContext) {
	return {
		"/ddlrecord/delete-record-locale": {
			"recordId": recordId,
			"locale": locale,
			"serviceContext": serviceContext
		}
	};
};

DDLRecordService.prototype.getRecord = function(recordId) {
	return {
		"/ddlrecord/get-record": {
			"recordId": recordId
		}
	};
};

DDLRecordService.prototype.updateRecord = function(recordId, displayIndex, fieldsMap, mergeFields, serviceContext) {
	return {
		"/ddlrecord/update-record": {
			"recordId": recordId,
			"displayIndex": displayIndex,
			"fieldsMap": fieldsMap,
			"mergeFields": mergeFields,
			"serviceContext": serviceContext
		}
	};
};

DDLRecordService.prototype.updateRecord = function(recordId, majorVersion, displayIndex, fields, mergeFields, serviceContext) {
	return {
		"/ddlrecord/update-record": {
			"recordId": recordId,
			"majorVersion": majorVersion,
			"displayIndex": displayIndex,
			"fields": fields,
			"mergeFields": mergeFields,
			"serviceContext": serviceContext
		}
	};
};

module.exports = DDLRecordService;