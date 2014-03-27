function ExpandoValueService() {
}

ExpandoValueService.prototype.addValue = function(companyId, className, tableName, columnName, classPK, data) {
	return {
		"/expandovalue/add-value": {
			"companyId": companyId,
			"className": className,
			"tableName": tableName,
			"columnName": columnName,
			"classPK": classPK,
			"data": data
		}
	};
};

ExpandoValueService.prototype.addValues = function(companyId, className, tableName, classPK, attributeValues) {
	return {
		"/expandovalue/add-values": {
			"companyId": companyId,
			"className": className,
			"tableName": tableName,
			"classPK": classPK,
			"attributeValues": attributeValues
		}
	};
};

ExpandoValueService.prototype.getData = function(companyId, className, tableName, columnName, classPK) {
	return {
		"/expandovalue/get-data": {
			"companyId": companyId,
			"className": className,
			"tableName": tableName,
			"columnName": columnName,
			"classPK": classPK
		}
	};
};

ExpandoValueService.prototype.getData1 = function(companyId, className, tableName, columnNames, classPK) {
	return {
		"/expandovalue/get-data": {
			"companyId": companyId,
			"className": className,
			"tableName": tableName,
			"columnNames": columnNames,
			"classPK": classPK
		}
	};
};

ExpandoValueService.prototype.getJsonData = function(companyId, className, tableName, columnName, classPK) {
	return {
		"/expandovalue/get-json-data": {
			"companyId": companyId,
			"className": className,
			"tableName": tableName,
			"columnName": columnName,
			"classPK": classPK
		}
	};
};

module.exports = ExpandoValueService;