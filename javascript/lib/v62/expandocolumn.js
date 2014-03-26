function ExpandoColumnService() {
}

ExpandoColumnService.prototype.addColumn = function(tableId, name, type) {
	return {
		"/expandocolumn/add-column": {
			"tableId": tableId,
			"name": name,
			"type": type
		}
	};
};

ExpandoColumnService.prototype.addColumn = function(tableId, name, type, defaultData) {
	return {
		"/expandocolumn/add-column": {
			"tableId": tableId,
			"name": name,
			"type": type,
			"defaultData": defaultData
		}
	};
};

ExpandoColumnService.prototype.deleteColumn = function(columnId) {
	return {
		"/expandocolumn/delete-column": {
			"columnId": columnId
		}
	};
};

ExpandoColumnService.prototype.updateColumn = function(columnId, name, type) {
	return {
		"/expandocolumn/update-column": {
			"columnId": columnId,
			"name": name,
			"type": type
		}
	};
};

ExpandoColumnService.prototype.updateColumn = function(columnId, name, type, defaultData) {
	return {
		"/expandocolumn/update-column": {
			"columnId": columnId,
			"name": name,
			"type": type,
			"defaultData": defaultData
		}
	};
};

ExpandoColumnService.prototype.updateTypeSettings = function(columnId, typeSettings) {
	return {
		"/expandocolumn/update-type-settings": {
			"columnId": columnId,
			"typeSettings": typeSettings
		}
	};
};

module.exports = ExpandoColumnService;