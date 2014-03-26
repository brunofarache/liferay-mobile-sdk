function GroupService() {
}

GroupService.prototype.addGroup = function(parentGroupId, liveGroupId, name, description, type, manualMembership, membershipRestriction, friendlyURL, site, active, serviceContext) {
	return {
		"/group/add-group": {
			"parentGroupId": parentGroupId,
			"liveGroupId": liveGroupId,
			"name": name,
			"description": description,
			"type": type,
			"manualMembership": manualMembership,
			"membershipRestriction": membershipRestriction,
			"friendlyURL": friendlyURL,
			"site": site,
			"active": active,
			"serviceContext": serviceContext
		}
	};
};

GroupService.prototype.addGroup = function(name, description, type, friendlyURL, site, active, serviceContext) {
	return {
		"/group/add-group": {
			"name": name,
			"description": description,
			"type": type,
			"friendlyURL": friendlyURL,
			"site": site,
			"active": active,
			"serviceContext": serviceContext
		}
	};
};

GroupService.prototype.addGroup = function(parentGroupId, name, description, type, friendlyURL, site, active, serviceContext) {
	return {
		"/group/add-group": {
			"parentGroupId": parentGroupId,
			"name": name,
			"description": description,
			"type": type,
			"friendlyURL": friendlyURL,
			"site": site,
			"active": active,
			"serviceContext": serviceContext
		}
	};
};

GroupService.prototype.addRoleGroups = function(roleId, groupIds) {
	return {
		"/group/add-role-groups": {
			"roleId": roleId,
			"groupIds": groupIds
		}
	};
};

GroupService.prototype.checkRemoteStagingGroup = function(groupId) {
	return {
		"/group/check-remote-staging-group": {
			"groupId": groupId
		}
	};
};

GroupService.prototype.deleteGroup = function(groupId) {
	return {
		"/group/delete-group": {
			"groupId": groupId
		}
	};
};

GroupService.prototype.disableStaging = function(groupId) {
	return {
		"/group/disable-staging": {
			"groupId": groupId
		}
	};
};

GroupService.prototype.enableStaging = function(groupId) {
	return {
		"/group/enable-staging": {
			"groupId": groupId
		}
	};
};

GroupService.prototype.getCompanyGroup = function(companyId) {
	return {
		"/group/get-company-group": {
			"companyId": companyId
		}
	};
};

GroupService.prototype.getGroup = function(groupId) {
	return {
		"/group/get-group": {
			"groupId": groupId
		}
	};
};

GroupService.prototype.getGroup = function(companyId, name) {
	return {
		"/group/get-group": {
			"companyId": companyId,
			"name": name
		}
	};
};

GroupService.prototype.getGroups = function(companyId, parentGroupId, site) {
	return {
		"/group/get-groups": {
			"companyId": companyId,
			"parentGroupId": parentGroupId,
			"site": site
		}
	};
};

GroupService.prototype.getManageableSiteGroups = function(portlets, max) {
	return {
		"/group/get-manageable-site-groups": {
			"portlets": portlets,
			"max": max
		}
	};
};

GroupService.prototype.getManageableSites = function(portlets, max) {
	return {
		"/group/get-manageable-sites": {
			"portlets": portlets,
			"max": max
		}
	};
};

GroupService.prototype.getOrganizationsGroups = function(organizations) {
	return {
		"/group/get-organizations-groups": {
			"organizations": organizations
		}
	};
};

GroupService.prototype.getUserGroup = function(companyId, userId) {
	return {
		"/group/get-user-group": {
			"companyId": companyId,
			"userId": userId
		}
	};
};

GroupService.prototype.getUserGroupsGroups = function(userGroups) {
	return {
		"/group/get-user-groups-groups": {
			"userGroups": userGroups
		}
	};
};

GroupService.prototype.getUserOrganizationsGroups = function(userId, start, end) {
	return {
		"/group/get-user-organizations-groups": {
			"userId": userId,
			"start": start,
			"end": end
		}
	};
};

GroupService.prototype.getUserPlaces = function(classNames, max) {
	return {
		"/group/get-user-places": {
			"classNames": classNames,
			"max": max
		}
	};
};

GroupService.prototype.getUserPlaces = function(userId, classNames, max) {
	return {
		"/group/get-user-places": {
			"userId": userId,
			"classNames": classNames,
			"max": max
		}
	};
};

GroupService.prototype.getUserPlaces = function(userId, classNames, includeControlPanel, max) {
	return {
		"/group/get-user-places": {
			"userId": userId,
			"classNames": classNames,
			"includeControlPanel": includeControlPanel,
			"max": max
		}
	};
};

GroupService.prototype.getUserPlacesCount = function() {
	return {
		"/group/get-user-places-count": {
		}
	};
};

GroupService.prototype.getUserSites = function() {
	return {
		"/group/get-user-sites": {
		}
	};
};

GroupService.prototype.getUserSitesGroups = function() {
	return {
		"/group/get-user-sites-groups": {
		}
	};
};

GroupService.prototype.getUserSitesGroups = function(classNames, max) {
	return {
		"/group/get-user-sites-groups": {
			"classNames": classNames,
			"max": max
		}
	};
};

GroupService.prototype.getUserSitesGroups = function(userId, classNames, max) {
	return {
		"/group/get-user-sites-groups": {
			"userId": userId,
			"classNames": classNames,
			"max": max
		}
	};
};

GroupService.prototype.getUserSitesGroups = function(userId, classNames, includeControlPanel, max) {
	return {
		"/group/get-user-sites-groups": {
			"userId": userId,
			"classNames": classNames,
			"includeControlPanel": includeControlPanel,
			"max": max
		}
	};
};

GroupService.prototype.getUserSitesGroupsCount = function() {
	return {
		"/group/get-user-sites-groups-count": {
		}
	};
};

GroupService.prototype.hasUserGroup = function(userId, groupId) {
	return {
		"/group/has-user-group": {
			"userId": userId,
			"groupId": groupId
		}
	};
};

GroupService.prototype.search = function(companyId, name, description, params, start, end) {
	return {
		"/group/search": {
			"companyId": companyId,
			"name": name,
			"description": description,
			"params": params,
			"start": start,
			"end": end
		}
	};
};

GroupService.prototype.searchCount = function(companyId, name, description, params) {
	return {
		"/group/search-count": {
			"companyId": companyId,
			"name": name,
			"description": description,
			"params": params
		}
	};
};

GroupService.prototype.setRoleGroups = function(roleId, groupIds) {
	return {
		"/group/set-role-groups": {
			"roleId": roleId,
			"groupIds": groupIds
		}
	};
};

GroupService.prototype.unsetRoleGroups = function(roleId, groupIds) {
	return {
		"/group/unset-role-groups": {
			"roleId": roleId,
			"groupIds": groupIds
		}
	};
};

GroupService.prototype.updateFriendlyUrl = function(groupId, friendlyURL) {
	return {
		"/group/update-friendly-url": {
			"groupId": groupId,
			"friendlyURL": friendlyURL
		}
	};
};

GroupService.prototype.updateGroup = function(groupId, parentGroupId, name, description, type, manualMembership, membershipRestriction, friendlyURL, active, serviceContext) {
	return {
		"/group/update-group": {
			"groupId": groupId,
			"parentGroupId": parentGroupId,
			"name": name,
			"description": description,
			"type": type,
			"manualMembership": manualMembership,
			"membershipRestriction": membershipRestriction,
			"friendlyURL": friendlyURL,
			"active": active,
			"serviceContext": serviceContext
		}
	};
};

GroupService.prototype.updateGroup = function(groupId, typeSettings) {
	return {
		"/group/update-group": {
			"groupId": groupId,
			"typeSettings": typeSettings
		}
	};
};

GroupService.prototype.updateStagedPortlets = function(groupId, stagedPortletIds) {
	return {
		"/group/update-staged-portlets": {
			"groupId": groupId,
			"stagedPortletIds": stagedPortletIds
		}
	};
};

module.exports = GroupService;