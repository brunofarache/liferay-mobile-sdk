function UserGroupRoleService() {
}

UserGroupRoleService.prototype.addUserGroupRoles = function(userId, groupId, roleIds) {
	return {
		"/usergrouprole/add-user-group-roles": {
			"userId": userId,
			"groupId": groupId,
			"roleIds": roleIds
		}
	};
};

UserGroupRoleService.prototype.addUserGroupRoles = function(userIds, groupId, roleId) {
	return {
		"/usergrouprole/add-user-group-roles": {
			"userIds": userIds,
			"groupId": groupId,
			"roleId": roleId
		}
	};
};

UserGroupRoleService.prototype.deleteUserGroupRoles = function(userId, groupId, roleIds) {
	return {
		"/usergrouprole/delete-user-group-roles": {
			"userId": userId,
			"groupId": groupId,
			"roleIds": roleIds
		}
	};
};

UserGroupRoleService.prototype.deleteUserGroupRoles = function(userIds, groupId, roleId) {
	return {
		"/usergrouprole/delete-user-group-roles": {
			"userIds": userIds,
			"groupId": groupId,
			"roleId": roleId
		}
	};
};

module.exports = UserGroupRoleService;