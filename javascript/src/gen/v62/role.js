function RoleService() {
}

RoleService.prototype.addRole = function(name, titleMap, descriptionMap, type) {
	return {
		"/role/add-role": {
			"name": name,
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"type": type
		}
	};
};

RoleService.prototype.addRole = function(className, classPK, name, titleMap, descriptionMap, type, subtype, serviceContext) {
	return {
		"/role/add-role": {
			"className": className,
			"classPK": classPK,
			"name": name,
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"type": type,
			"subtype": subtype,
			"serviceContext": serviceContext
		}
	};
};

RoleService.prototype.addUserRoles = function(userId, roleIds) {
	return {
		"/role/add-user-roles": {
			"userId": userId,
			"roleIds": roleIds
		}
	};
};

RoleService.prototype.deleteRole = function(roleId) {
	return {
		"/role/delete-role": {
			"roleId": roleId
		}
	};
};

RoleService.prototype.getGroupRoles = function(groupId) {
	return {
		"/role/get-group-roles": {
			"groupId": groupId
		}
	};
};

RoleService.prototype.getRole = function(roleId) {
	return {
		"/role/get-role": {
			"roleId": roleId
		}
	};
};

RoleService.prototype.getRole = function(companyId, name) {
	return {
		"/role/get-role": {
			"companyId": companyId,
			"name": name
		}
	};
};

RoleService.prototype.getUserGroupGroupRoles = function(userId, groupId) {
	return {
		"/role/get-user-group-group-roles": {
			"userId": userId,
			"groupId": groupId
		}
	};
};

RoleService.prototype.getUserGroupRoles = function(userId, groupId) {
	return {
		"/role/get-user-group-roles": {
			"userId": userId,
			"groupId": groupId
		}
	};
};

RoleService.prototype.getUserRelatedRoles = function(userId, groups) {
	return {
		"/role/get-user-related-roles": {
			"userId": userId,
			"groups": groups
		}
	};
};

RoleService.prototype.getUserRoles = function(userId) {
	return {
		"/role/get-user-roles": {
			"userId": userId
		}
	};
};

RoleService.prototype.hasUserRole = function(userId, companyId, name, inherited) {
	return {
		"/role/has-user-role": {
			"userId": userId,
			"companyId": companyId,
			"name": name,
			"inherited": inherited
		}
	};
};

RoleService.prototype.hasUserRoles = function(userId, companyId, names, inherited) {
	return {
		"/role/has-user-roles": {
			"userId": userId,
			"companyId": companyId,
			"names": names,
			"inherited": inherited
		}
	};
};

RoleService.prototype.unsetUserRoles = function(userId, roleIds) {
	return {
		"/role/unset-user-roles": {
			"userId": userId,
			"roleIds": roleIds
		}
	};
};

RoleService.prototype.updateRole = function(roleId, name, titleMap, descriptionMap, subtype, serviceContext) {
	return {
		"/role/update-role": {
			"roleId": roleId,
			"name": name,
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"subtype": subtype,
			"serviceContext": serviceContext
		}
	};
};
