function ResourceBlockService() {
}

ResourceBlockService.prototype.addCompanyScopePermission = function(scopeGroupId, companyId, name, roleId, actionId) {
	return {
		"/resourceblock/add-company-scope-permission": {
			"scopeGroupId": scopeGroupId,
			"companyId": companyId,
			"name": name,
			"roleId": roleId,
			"actionId": actionId
		}
	};
};

ResourceBlockService.prototype.addGroupScopePermission = function(scopeGroupId, companyId, groupId, name, roleId, actionId) {
	return {
		"/resourceblock/add-group-scope-permission": {
			"scopeGroupId": scopeGroupId,
			"companyId": companyId,
			"groupId": groupId,
			"name": name,
			"roleId": roleId,
			"actionId": actionId
		}
	};
};

ResourceBlockService.prototype.addIndividualScopePermission = function(companyId, groupId, name, primKey, roleId, actionId) {
	return {
		"/resourceblock/add-individual-scope-permission": {
			"companyId": companyId,
			"groupId": groupId,
			"name": name,
			"primKey": primKey,
			"roleId": roleId,
			"actionId": actionId
		}
	};
};

ResourceBlockService.prototype.removeAllGroupScopePermissions = function(scopeGroupId, companyId, name, roleId, actionId) {
	return {
		"/resourceblock/remove-all-group-scope-permissions": {
			"scopeGroupId": scopeGroupId,
			"companyId": companyId,
			"name": name,
			"roleId": roleId,
			"actionId": actionId
		}
	};
};

ResourceBlockService.prototype.removeCompanyScopePermission = function(scopeGroupId, companyId, name, roleId, actionId) {
	return {
		"/resourceblock/remove-company-scope-permission": {
			"scopeGroupId": scopeGroupId,
			"companyId": companyId,
			"name": name,
			"roleId": roleId,
			"actionId": actionId
		}
	};
};

ResourceBlockService.prototype.removeGroupScopePermission = function(scopeGroupId, companyId, groupId, name, roleId, actionId) {
	return {
		"/resourceblock/remove-group-scope-permission": {
			"scopeGroupId": scopeGroupId,
			"companyId": companyId,
			"groupId": groupId,
			"name": name,
			"roleId": roleId,
			"actionId": actionId
		}
	};
};

ResourceBlockService.prototype.removeIndividualScopePermission = function(companyId, groupId, name, primKey, roleId, actionId) {
	return {
		"/resourceblock/remove-individual-scope-permission": {
			"companyId": companyId,
			"groupId": groupId,
			"name": name,
			"primKey": primKey,
			"roleId": roleId,
			"actionId": actionId
		}
	};
};

ResourceBlockService.prototype.setCompanyScopePermissions = function(scopeGroupId, companyId, name, roleId, actionIds) {
	return {
		"/resourceblock/set-company-scope-permissions": {
			"scopeGroupId": scopeGroupId,
			"companyId": companyId,
			"name": name,
			"roleId": roleId,
			"actionIds": actionIds
		}
	};
};

ResourceBlockService.prototype.setGroupScopePermissions = function(scopeGroupId, companyId, groupId, name, roleId, actionIds) {
	return {
		"/resourceblock/set-group-scope-permissions": {
			"scopeGroupId": scopeGroupId,
			"companyId": companyId,
			"groupId": groupId,
			"name": name,
			"roleId": roleId,
			"actionIds": actionIds
		}
	};
};

ResourceBlockService.prototype.setIndividualScopePermissions = function(companyId, groupId, name, primKey, roleIdsToActionIds) {
	return {
		"/resourceblock/set-individual-scope-permissions": {
			"companyId": companyId,
			"groupId": groupId,
			"name": name,
			"primKey": primKey,
			"roleIdsToActionIds": roleIdsToActionIds
		}
	};
};

ResourceBlockService.prototype.setIndividualScopePermissions = function(companyId, groupId, name, primKey, roleId, actionIds) {
	return {
		"/resourceblock/set-individual-scope-permissions": {
			"companyId": companyId,
			"groupId": groupId,
			"name": name,
			"primKey": primKey,
			"roleId": roleId,
			"actionIds": actionIds
		}
	};
};
