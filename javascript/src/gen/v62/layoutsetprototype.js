function LayoutSetPrototypeService() {
}

LayoutSetPrototypeService.prototype.addLayoutSetPrototype = function(nameMap, description, active, layoutsUpdateable, serviceContext) {
	return {
		"/layoutsetprototype/add-layout-set-prototype": {
			"nameMap": nameMap,
			"description": description,
			"active": active,
			"layoutsUpdateable": layoutsUpdateable,
			"serviceContext": serviceContext
		}
	};
};

LayoutSetPrototypeService.prototype.deleteLayoutSetPrototype = function(layoutSetPrototypeId) {
	return {
		"/layoutsetprototype/delete-layout-set-prototype": {
			"layoutSetPrototypeId": layoutSetPrototypeId
		}
	};
};

LayoutSetPrototypeService.prototype.getLayoutSetPrototype = function(layoutSetPrototypeId) {
	return {
		"/layoutsetprototype/get-layout-set-prototype": {
			"layoutSetPrototypeId": layoutSetPrototypeId
		}
	};
};

LayoutSetPrototypeService.prototype.search = function(companyId, active, obc) {
	return {
		"/layoutsetprototype/search": {
			"companyId": companyId,
			"active": active,
			"obc": obc
		}
	};
};

LayoutSetPrototypeService.prototype.updateLayoutSetPrototype = function(layoutSetPrototypeId, settings) {
	return {
		"/layoutsetprototype/update-layout-set-prototype": {
			"layoutSetPrototypeId": layoutSetPrototypeId,
			"settings": settings
		}
	};
};

LayoutSetPrototypeService.prototype.updateLayoutSetPrototype = function(layoutSetPrototypeId, nameMap, description, active, layoutsUpdateable, serviceContext) {
	return {
		"/layoutsetprototype/update-layout-set-prototype": {
			"layoutSetPrototypeId": layoutSetPrototypeId,
			"nameMap": nameMap,
			"description": description,
			"active": active,
			"layoutsUpdateable": layoutsUpdateable,
			"serviceContext": serviceContext
		}
	};
};
