function AssetVocabularyService() {
}

AssetVocabularyService.prototype.addVocabulary = function(title, serviceContext) {
	return {
		"/assetvocabulary/add-vocabulary": {
			"title": title,
			"serviceContext": serviceContext
		}
	};
};

AssetVocabularyService.prototype.addVocabulary = function(titleMap, descriptionMap, settings, serviceContext) {
	return {
		"/assetvocabulary/add-vocabulary": {
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"settings": settings,
			"serviceContext": serviceContext
		}
	};
};

AssetVocabularyService.prototype.addVocabulary = function(title, titleMap, descriptionMap, settings, serviceContext) {
	return {
		"/assetvocabulary/add-vocabulary": {
			"title": title,
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"settings": settings,
			"serviceContext": serviceContext
		}
	};
};

AssetVocabularyService.prototype.deleteVocabularies = function(vocabularyIds) {
	return {
		"/assetvocabulary/delete-vocabularies": {
			"vocabularyIds": vocabularyIds
		}
	};
};

AssetVocabularyService.prototype.deleteVocabularies = function(vocabularyIds, serviceContext) {
	return {
		"/assetvocabulary/delete-vocabularies": {
			"vocabularyIds": vocabularyIds,
			"serviceContext": serviceContext
		}
	};
};

AssetVocabularyService.prototype.deleteVocabulary = function(vocabularyId) {
	return {
		"/assetvocabulary/delete-vocabulary": {
			"vocabularyId": vocabularyId
		}
	};
};

AssetVocabularyService.prototype.getCompanyVocabularies = function(companyId) {
	return {
		"/assetvocabulary/get-company-vocabularies": {
			"companyId": companyId
		}
	};
};

AssetVocabularyService.prototype.getGroupVocabularies = function(groupId) {
	return {
		"/assetvocabulary/get-group-vocabularies": {
			"groupId": groupId
		}
	};
};

AssetVocabularyService.prototype.getGroupVocabularies = function(groupId, createDefaultVocabulary) {
	return {
		"/assetvocabulary/get-group-vocabularies": {
			"groupId": groupId,
			"createDefaultVocabulary": createDefaultVocabulary
		}
	};
};

AssetVocabularyService.prototype.getGroupVocabularies = function(groupId, start, end, obc) {
	return {
		"/assetvocabulary/get-group-vocabularies": {
			"groupId": groupId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetVocabularyService.prototype.getGroupVocabularies = function(groupId, name, start, end, obc) {
	return {
		"/assetvocabulary/get-group-vocabularies": {
			"groupId": groupId,
			"name": name,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetVocabularyService.prototype.getGroupVocabulariesCount = function(groupId) {
	return {
		"/assetvocabulary/get-group-vocabularies-count": {
			"groupId": groupId
		}
	};
};

AssetVocabularyService.prototype.getGroupVocabulariesCount = function(groupId, name) {
	return {
		"/assetvocabulary/get-group-vocabularies-count": {
			"groupId": groupId,
			"name": name
		}
	};
};

AssetVocabularyService.prototype.getGroupVocabulariesDisplay = function(groupId, name, start, end, obc) {
	return {
		"/assetvocabulary/get-group-vocabularies-display": {
			"groupId": groupId,
			"name": name,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetVocabularyService.prototype.getGroupVocabulariesDisplay = function(groupId, name, start, end, addDefaultVocabulary, obc) {
	return {
		"/assetvocabulary/get-group-vocabularies-display": {
			"groupId": groupId,
			"name": name,
			"start": start,
			"end": end,
			"addDefaultVocabulary": addDefaultVocabulary,
			"obc": obc
		}
	};
};

AssetVocabularyService.prototype.getGroupsVocabularies = function(groupIds) {
	return {
		"/assetvocabulary/get-groups-vocabularies": {
			"groupIds": groupIds
		}
	};
};

AssetVocabularyService.prototype.getGroupsVocabularies = function(groupIds, className) {
	return {
		"/assetvocabulary/get-groups-vocabularies": {
			"groupIds": groupIds,
			"className": className
		}
	};
};

AssetVocabularyService.prototype.getJsonGroupVocabularies = function(groupId, name, start, end, obc) {
	return {
		"/assetvocabulary/get-json-group-vocabularies": {
			"groupId": groupId,
			"name": name,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetVocabularyService.prototype.getVocabularies = function(vocabularyIds) {
	return {
		"/assetvocabulary/get-vocabularies": {
			"vocabularyIds": vocabularyIds
		}
	};
};

AssetVocabularyService.prototype.getVocabulary = function(vocabularyId) {
	return {
		"/assetvocabulary/get-vocabulary": {
			"vocabularyId": vocabularyId
		}
	};
};

AssetVocabularyService.prototype.updateVocabulary = function(vocabularyId, titleMap, descriptionMap, settings, serviceContext) {
	return {
		"/assetvocabulary/update-vocabulary": {
			"vocabularyId": vocabularyId,
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"settings": settings,
			"serviceContext": serviceContext
		}
	};
};

AssetVocabularyService.prototype.updateVocabulary = function(vocabularyId, title, titleMap, descriptionMap, settings, serviceContext) {
	return {
		"/assetvocabulary/update-vocabulary": {
			"vocabularyId": vocabularyId,
			"title": title,
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"settings": settings,
			"serviceContext": serviceContext
		}
	};
};
