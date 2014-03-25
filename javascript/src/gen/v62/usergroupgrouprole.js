function UserGroupGroupRoleService() {
}

UserGroupGroupRoleService.prototype.addUserGroupGroupRoles = function(userGroupId, groupId, roleIds) {
	return {
		"/usergroupgrouprole/add-user-group-group-roles": {
			"userGroupId": userGroupId,
			"groupId": groupId,
			"roleIds": roleIds
		}
	};
};

UserGroupGroupRoleService.prototype.addUserGroupGroupRoles = function(userGroupIds, groupId, roleId) {
	return {
		"/usergroupgrouprole/add-user-group-group-roles": {
			"userGroupIds": userGroupIds,
			"groupId": groupId,
			"roleId": roleId
		}
	};
};

UserGroupGroupRoleService.prototype.deleteUserGroupGroupRoles = function(userGroupId, groupId, roleIds) {
	return {
		"/usergroupgrouprole/delete-user-group-group-roles": {
			"userGroupId": userGroupId,
			"groupId": groupId,
			"roleIds": roleIds
		}
	};
};

UserGroupGroupRoleService.prototype.deleteUserGroupGroupRoles = function(userGroupIds, groupId, roleId) {
	return {
		"/usergroupgrouprole/delete-user-group-group-roles": {
			"userGroupIds": userGroupIds,
			"groupId": groupId,
			"roleId": roleId
		}
	};
};
