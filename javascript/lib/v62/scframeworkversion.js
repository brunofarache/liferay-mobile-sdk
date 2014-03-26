function SCFrameworkVersionService() {
}

SCFrameworkVersionService.prototype.addFrameworkVersion = function(name, url, active, priority, serviceContext) {
	return {
		"/scframeworkversion/add-framework-version": {
			"name": name,
			"url": url,
			"active": active,
			"priority": priority,
			"serviceContext": serviceContext
		}
	};
};

SCFrameworkVersionService.prototype.deleteFrameworkVersion = function(frameworkVersionId) {
	return {
		"/scframeworkversion/delete-framework-version": {
			"frameworkVersionId": frameworkVersionId
		}
	};
};

SCFrameworkVersionService.prototype.getFrameworkVersion = function(frameworkVersionId) {
	return {
		"/scframeworkversion/get-framework-version": {
			"frameworkVersionId": frameworkVersionId
		}
	};
};

SCFrameworkVersionService.prototype.getFrameworkVersions = function(groupId, active) {
	return {
		"/scframeworkversion/get-framework-versions": {
			"groupId": groupId,
			"active": active
		}
	};
};

SCFrameworkVersionService.prototype.getFrameworkVersions = function(groupId, active, start, end) {
	return {
		"/scframeworkversion/get-framework-versions": {
			"groupId": groupId,
			"active": active,
			"start": start,
			"end": end
		}
	};
};

SCFrameworkVersionService.prototype.updateFrameworkVersion = function(frameworkVersionId, name, url, active, priority) {
	return {
		"/scframeworkversion/update-framework-version": {
			"frameworkVersionId": frameworkVersionId,
			"name": name,
			"url": url,
			"active": active,
			"priority": priority
		}
	};
};

module.exports = SCFrameworkVersionService;