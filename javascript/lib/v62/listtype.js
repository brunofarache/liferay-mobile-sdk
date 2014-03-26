function ListTypeService() {
}

ListTypeService.prototype.getListType = function(listTypeId) {
	return {
		"/listtype/get-list-type": {
			"listTypeId": listTypeId
		}
	};
};

ListTypeService.prototype.getListTypes = function(type) {
	return {
		"/listtype/get-list-types": {
			"type": type
		}
	};
};

ListTypeService.prototype.validate = function(listTypeId, type) {
	return {
		"/listtype/validate": {
			"listTypeId": listTypeId,
			"type": type
		}
	};
};

ListTypeService.prototype.validate = function(listTypeId, classNameId, type) {
	return {
		"/listtype/validate": {
			"listTypeId": listTypeId,
			"classNameId": classNameId,
			"type": type
		}
	};
};

module.exports = ListTypeService;