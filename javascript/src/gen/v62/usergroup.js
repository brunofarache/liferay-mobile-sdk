function UserGroupService() {
}

UserGroupService.prototype.addGroupUserGroups = function(groupId, userGroupIds) {
	return {
		"/usergroup/add-group-user-groups": {
			"groupId": groupId,
			"userGroupIds": userGroupIds
		}
	};
};

UserGroupService.prototype.addTeamUserGroups = function(teamId, userGroupIds) {
	return {
		"/usergroup/add-team-user-groups": {
			"teamId": teamId,
			"userGroupIds": userGroupIds
		}
	};
};

UserGroupService.prototype.addUserGroup = function(name, description) {
	return {
		"/usergroup/add-user-group": {
			"name": name,
			"description": description
		}
	};
};

UserGroupService.prototype.addUserGroup = function(name, description, serviceContext) {
	return {
		"/usergroup/add-user-group": {
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

UserGroupService.prototype.deleteUserGroup = function(userGroupId) {
	return {
		"/usergroup/delete-user-group": {
			"userGroupId": userGroupId
		}
	};
};

UserGroupService.prototype.getUserGroup = function(name) {
	return {
		"/usergroup/get-user-group": {
			"name": name
		}
	};
};

UserGroupService.prototype.getUserGroup = function(userGroupId) {
	return {
		"/usergroup/get-user-group": {
			"userGroupId": userGroupId
		}
	};
};

UserGroupService.prototype.getUserUserGroups = function(userId) {
	return {
		"/usergroup/get-user-user-groups": {
			"userId": userId
		}
	};
};

UserGroupService.prototype.unsetGroupUserGroups = function(groupId, userGroupIds) {
	return {
		"/usergroup/unset-group-user-groups": {
			"groupId": groupId,
			"userGroupIds": userGroupIds
		}
	};
};

UserGroupService.prototype.unsetTeamUserGroups = function(teamId, userGroupIds) {
	return {
		"/usergroup/unset-team-user-groups": {
			"teamId": teamId,
			"userGroupIds": userGroupIds
		}
	};
};

UserGroupService.prototype.updateUserGroup = function(userGroupId, name, description) {
	return {
		"/usergroup/update-user-group": {
			"userGroupId": userGroupId,
			"name": name,
			"description": description
		}
	};
};

UserGroupService.prototype.updateUserGroup = function(userGroupId, name, description, serviceContext) {
	return {
		"/usergroup/update-user-group": {
			"userGroupId": userGroupId,
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};
