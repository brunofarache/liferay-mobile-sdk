function RepositoryService() {
}

RepositoryService.prototype.addRepository = function(groupId, classNameId, parentFolderId, name, description, portletId, typeSettingsProperties, serviceContext) {
	return {
		"/repository/add-repository": {
			"groupId": groupId,
			"classNameId": classNameId,
			"parentFolderId": parentFolderId,
			"name": name,
			"description": description,
			"portletId": portletId,
			"typeSettingsProperties": typeSettingsProperties,
			"serviceContext": serviceContext
		}
	};
};

RepositoryService.prototype.checkRepository = function(repositoryId) {
	return {
		"/repository/check-repository": {
			"repositoryId": repositoryId
		}
	};
};

RepositoryService.prototype.deleteRepository = function(repositoryId) {
	return {
		"/repository/delete-repository": {
			"repositoryId": repositoryId
		}
	};
};

RepositoryService.prototype.getLocalRepositoryImpl = function(repositoryId) {
	return {
		"/repository/get-local-repository-impl": {
			"repositoryId": repositoryId
		}
	};
};

RepositoryService.prototype.getLocalRepositoryImpl = function(folderId, fileEntryId, fileVersionId) {
	return {
		"/repository/get-local-repository-impl": {
			"folderId": folderId,
			"fileEntryId": fileEntryId,
			"fileVersionId": fileVersionId
		}
	};
};

RepositoryService.prototype.getRepository = function(repositoryId) {
	return {
		"/repository/get-repository": {
			"repositoryId": repositoryId
		}
	};
};

RepositoryService.prototype.getRepositoryImpl = function(repositoryId) {
	return {
		"/repository/get-repository-impl": {
			"repositoryId": repositoryId
		}
	};
};

RepositoryService.prototype.getRepositoryImpl = function(folderId, fileEntryId, fileVersionId) {
	return {
		"/repository/get-repository-impl": {
			"folderId": folderId,
			"fileEntryId": fileEntryId,
			"fileVersionId": fileVersionId
		}
	};
};

RepositoryService.prototype.getSupportedConfigurations = function(classNameId) {
	return {
		"/repository/get-supported-configurations": {
			"classNameId": classNameId
		}
	};
};

RepositoryService.prototype.getSupportedParameters = function(classNameId, configuration) {
	return {
		"/repository/get-supported-parameters": {
			"classNameId": classNameId,
			"configuration": configuration
		}
	};
};

RepositoryService.prototype.getTypeSettingsProperties = function(repositoryId) {
	return {
		"/repository/get-type-settings-properties": {
			"repositoryId": repositoryId
		}
	};
};

RepositoryService.prototype.updateRepository = function(repositoryId, name, description) {
	return {
		"/repository/update-repository": {
			"repositoryId": repositoryId,
			"name": name,
			"description": description
		}
	};
};

module.exports = RepositoryService;