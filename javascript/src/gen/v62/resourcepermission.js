function ResourcePermissionService() {
}

ResourcePermissionService.prototype.addResourcePermission = function(groupId, companyId, name, scope, primKey, roleId, actionId) {
	return {
		"/resourcepermission/add-resource-permission": {
			"groupId": groupId,
			"companyId": companyId,
			"name": name,
			"scope": scope,
			"primKey": primKey,
			"roleId": roleId,
			"actionId": actionId
		}
	};
};

ResourcePermissionService.prototype.removeResourcePermission = function(groupId, companyId, name, scope, primKey, roleId, actionId) {
	return {
		"/resourcepermission/remove-resource-permission": {
			"groupId": groupId,
			"companyId": companyId,
			"name": name,
			"scope": scope,
			"primKey": primKey,
			"roleId": roleId,
			"actionId": actionId
		}
	};
};

ResourcePermissionService.prototype.removeResourcePermissions = function(groupId, companyId, name, scope, roleId, actionId) {
	return {
		"/resourcepermission/remove-resource-permissions": {
			"groupId": groupId,
			"companyId": companyId,
			"name": name,
			"scope": scope,
			"roleId": roleId,
			"actionId": actionId
		}
	};
};

ResourcePermissionService.prototype.setIndividualResourcePermissions = function(groupId, companyId, name, primKey, roleIdsToActionIds) {
	return {
		"/resourcepermission/set-individual-resource-permissions": {
			"groupId": groupId,
			"companyId": companyId,
			"name": name,
			"primKey": primKey,
			"roleIdsToActionIds": roleIdsToActionIds
		}
	};
};

ResourcePermissionService.prototype.setIndividualResourcePermissions = function(groupId, companyId, name, primKey, roleId, actionIds) {
	return {
		"/resourcepermission/set-individual-resource-permissions": {
			"groupId": groupId,
			"companyId": companyId,
			"name": name,
			"primKey": primKey,
			"roleId": roleId,
			"actionIds": actionIds
		}
	};
};
