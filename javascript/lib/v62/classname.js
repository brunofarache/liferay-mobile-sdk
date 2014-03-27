function ClassNameService() {
}

ClassNameService.prototype.fetchClassName = function(value) {
	return {
		"/classname/fetch-class-name": {
			"value": value
		}
	};
};

ClassNameService.prototype.fetchClassNameId = function(clazz) {
	return {
		"/classname/fetch-class-name-id": {
			"clazz": clazz
		}
	};
};

ClassNameService.prototype.fetchClassNameId1 = function(value) {
	return {
		"/classname/fetch-class-name-id": {
			"value": value
		}
	};
};

module.exports = ClassNameService;