function PermissionService() {
}

PermissionService.prototype.checkPermission = function(groupId, name, primKey) {
	return {
		"/permission/check-permission": {
			"groupId": groupId,
			"name": name,
			"primKey": primKey
		}
	};
};
