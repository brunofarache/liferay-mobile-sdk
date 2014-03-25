function LayoutPrototypeService() {
}

LayoutPrototypeService.prototype.addLayoutPrototype = function(nameMap, description, active) {
	return {
		"/layoutprototype/add-layout-prototype": {
			"nameMap": nameMap,
			"description": description,
			"active": active
		}
	};
};

LayoutPrototypeService.prototype.addLayoutPrototype = function(nameMap, description, active, serviceContext) {
	return {
		"/layoutprototype/add-layout-prototype": {
			"nameMap": nameMap,
			"description": description,
			"active": active,
			"serviceContext": serviceContext
		}
	};
};

LayoutPrototypeService.prototype.deleteLayoutPrototype = function(layoutPrototypeId) {
	return {
		"/layoutprototype/delete-layout-prototype": {
			"layoutPrototypeId": layoutPrototypeId
		}
	};
};

LayoutPrototypeService.prototype.getLayoutPrototype = function(layoutPrototypeId) {
	return {
		"/layoutprototype/get-layout-prototype": {
			"layoutPrototypeId": layoutPrototypeId
		}
	};
};

LayoutPrototypeService.prototype.search = function(companyId, active, obc) {
	return {
		"/layoutprototype/search": {
			"companyId": companyId,
			"active": active,
			"obc": obc
		}
	};
};

LayoutPrototypeService.prototype.updateLayoutPrototype = function(layoutPrototypeId, nameMap, description, active) {
	return {
		"/layoutprototype/update-layout-prototype": {
			"layoutPrototypeId": layoutPrototypeId,
			"nameMap": nameMap,
			"description": description,
			"active": active
		}
	};
};

LayoutPrototypeService.prototype.updateLayoutPrototype = function(layoutPrototypeId, nameMap, description, active, serviceContext) {
	return {
		"/layoutprototype/update-layout-prototype": {
			"layoutPrototypeId": layoutPrototypeId,
			"nameMap": nameMap,
			"description": description,
			"active": active,
			"serviceContext": serviceContext
		}
	};
};
