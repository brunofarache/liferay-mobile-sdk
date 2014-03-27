function DDMTemplateService() {
}

DDMTemplateService.prototype.addTemplate = function(groupId, classNameId, classPK, nameMap, descriptionMap, type, mode, language, script, serviceContext) {
	return {
		"/ddmtemplate/add-template": {
			"groupId": groupId,
			"classNameId": classNameId,
			"classPK": classPK,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"type": type,
			"mode": mode,
			"language": language,
			"script": script,
			"serviceContext": serviceContext
		}
	};
};

DDMTemplateService.prototype.addTemplate = function(groupId, classNameId, classPK, templateKey, nameMap, descriptionMap, type, mode, language, script, cacheable, smallImage, smallImageURL, smallImageFile, serviceContext) {
	return {
		"/ddmtemplate/add-template": {
			"groupId": groupId,
			"classNameId": classNameId,
			"classPK": classPK,
			"templateKey": templateKey,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"type": type,
			"mode": mode,
			"language": language,
			"script": script,
			"cacheable": cacheable,
			"smallImage": smallImage,
			"smallImageURL": smallImageURL,
			"smallImageFile": smallImageFile,
			"serviceContext": serviceContext
		}
	};
};

DDMTemplateService.prototype.copyTemplate = function(templateId, serviceContext) {
	return {
		"/ddmtemplate/copy-template": {
			"templateId": templateId,
			"serviceContext": serviceContext
		}
	};
};

DDMTemplateService.prototype.copyTemplate = function(templateId, nameMap, descriptionMap, serviceContext) {
	return {
		"/ddmtemplate/copy-template": {
			"templateId": templateId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"serviceContext": serviceContext
		}
	};
};

DDMTemplateService.prototype.copyTemplates = function(classNameId, classPK, newClassPK, type, serviceContext) {
	return {
		"/ddmtemplate/copy-templates": {
			"classNameId": classNameId,
			"classPK": classPK,
			"newClassPK": newClassPK,
			"type": type,
			"serviceContext": serviceContext
		}
	};
};

DDMTemplateService.prototype.deleteTemplate = function(templateId) {
	return {
		"/ddmtemplate/delete-template": {
			"templateId": templateId
		}
	};
};

DDMTemplateService.prototype.fetchTemplate = function(groupId, classNameId, templateKey) {
	return {
		"/ddmtemplate/fetch-template": {
			"groupId": groupId,
			"classNameId": classNameId,
			"templateKey": templateKey
		}
	};
};

DDMTemplateService.prototype.getTemplate = function(templateId) {
	return {
		"/ddmtemplate/get-template": {
			"templateId": templateId
		}
	};
};

DDMTemplateService.prototype.getTemplate = function(groupId, classNameId, templateKey) {
	return {
		"/ddmtemplate/get-template": {
			"groupId": groupId,
			"classNameId": classNameId,
			"templateKey": templateKey
		}
	};
};

DDMTemplateService.prototype.getTemplate = function(groupId, classNameId, templateKey, includeGlobalTemplates) {
	return {
		"/ddmtemplate/get-template": {
			"groupId": groupId,
			"classNameId": classNameId,
			"templateKey": templateKey,
			"includeGlobalTemplates": includeGlobalTemplates
		}
	};
};

DDMTemplateService.prototype.getTemplates = function(groupId, classNameId) {
	return {
		"/ddmtemplate/get-templates": {
			"groupId": groupId,
			"classNameId": classNameId
		}
	};
};

DDMTemplateService.prototype.getTemplates = function(groupId, classNameId, classPK) {
	return {
		"/ddmtemplate/get-templates": {
			"groupId": groupId,
			"classNameId": classNameId,
			"classPK": classPK
		}
	};
};

DDMTemplateService.prototype.getTemplates = function(groupId, classNameId, classPK, type) {
	return {
		"/ddmtemplate/get-templates": {
			"groupId": groupId,
			"classNameId": classNameId,
			"classPK": classPK,
			"type": type
		}
	};
};

DDMTemplateService.prototype.getTemplates = function(groupId, classNameId, classPK, type, mode) {
	return {
		"/ddmtemplate/get-templates": {
			"groupId": groupId,
			"classNameId": classNameId,
			"classPK": classPK,
			"type": type,
			"mode": mode
		}
	};
};

DDMTemplateService.prototype.getTemplatesByClassPk = function(groupId, classPK) {
	return {
		"/ddmtemplate/get-templates-by-class-pk": {
			"groupId": groupId,
			"classPK": classPK
		}
	};
};

DDMTemplateService.prototype.getTemplatesByStructureClassNameId = function(groupId, structureClassNameId, start, end, orderByComparator) {
	return {
		"/ddmtemplate/get-templates-by-structure-class-name-id": {
			"groupId": groupId,
			"structureClassNameId": structureClassNameId,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

DDMTemplateService.prototype.getTemplatesByStructureClassNameIdCount = function(groupId, structureClassNameId) {
	return {
		"/ddmtemplate/get-templates-by-structure-class-name-id-count": {
			"groupId": groupId,
			"structureClassNameId": structureClassNameId
		}
	};
};

DDMTemplateService.prototype.search = function(companyId, groupId, classNameId, classPK, keywords, type, mode, start, end, orderByComparator) {
	return {
		"/ddmtemplate/search": {
			"companyId": companyId,
			"groupId": groupId,
			"classNameId": classNameId,
			"classPK": classPK,
			"keywords": keywords,
			"type": type,
			"mode": mode,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

DDMTemplateService.prototype.search1 = function(companyId, groupIds, classNameIds, classPKs, keywords, type, mode, start, end, orderByComparator) {
	return {
		"/ddmtemplate/search": {
			"companyId": companyId,
			"groupIds": groupIds,
			"classNameIds": classNameIds,
			"classPKs": classPKs,
			"keywords": keywords,
			"type": type,
			"mode": mode,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

DDMTemplateService.prototype.search = function(companyId, groupId, classNameId, classPK, name, description, type, mode, language, andOperator, start, end, orderByComparator) {
	return {
		"/ddmtemplate/search": {
			"companyId": companyId,
			"groupId": groupId,
			"classNameId": classNameId,
			"classPK": classPK,
			"name": name,
			"description": description,
			"type": type,
			"mode": mode,
			"language": language,
			"andOperator": andOperator,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

DDMTemplateService.prototype.search1 = function(companyId, groupIds, classNameIds, classPKs, name, description, type, mode, language, andOperator, start, end, orderByComparator) {
	return {
		"/ddmtemplate/search": {
			"companyId": companyId,
			"groupIds": groupIds,
			"classNameIds": classNameIds,
			"classPKs": classPKs,
			"name": name,
			"description": description,
			"type": type,
			"mode": mode,
			"language": language,
			"andOperator": andOperator,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

DDMTemplateService.prototype.searchCount = function(companyId, groupId, classNameId, classPK, name, description, type, mode, language, andOperator) {
	return {
		"/ddmtemplate/search-count": {
			"companyId": companyId,
			"groupId": groupId,
			"classNameId": classNameId,
			"classPK": classPK,
			"name": name,
			"description": description,
			"type": type,
			"mode": mode,
			"language": language,
			"andOperator": andOperator
		}
	};
};

DDMTemplateService.prototype.searchCount1 = function(companyId, groupIds, classNameIds, classPKs, name, description, type, mode, language, andOperator) {
	return {
		"/ddmtemplate/search-count": {
			"companyId": companyId,
			"groupIds": groupIds,
			"classNameIds": classNameIds,
			"classPKs": classPKs,
			"name": name,
			"description": description,
			"type": type,
			"mode": mode,
			"language": language,
			"andOperator": andOperator
		}
	};
};

DDMTemplateService.prototype.searchCount = function(companyId, groupId, classNameId, classPK, keywords, type, mode) {
	return {
		"/ddmtemplate/search-count": {
			"companyId": companyId,
			"groupId": groupId,
			"classNameId": classNameId,
			"classPK": classPK,
			"keywords": keywords,
			"type": type,
			"mode": mode
		}
	};
};

DDMTemplateService.prototype.searchCount1 = function(companyId, groupIds, classNameIds, classPKs, keywords, type, mode) {
	return {
		"/ddmtemplate/search-count": {
			"companyId": companyId,
			"groupIds": groupIds,
			"classNameIds": classNameIds,
			"classPKs": classPKs,
			"keywords": keywords,
			"type": type,
			"mode": mode
		}
	};
};

DDMTemplateService.prototype.updateTemplate = function(templateId, classPK, nameMap, descriptionMap, type, mode, language, script, cacheable, smallImage, smallImageURL, smallImageFile, serviceContext) {
	return {
		"/ddmtemplate/update-template": {
			"templateId": templateId,
			"classPK": classPK,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"type": type,
			"mode": mode,
			"language": language,
			"script": script,
			"cacheable": cacheable,
			"smallImage": smallImage,
			"smallImageURL": smallImageURL,
			"smallImageFile": smallImageFile,
			"serviceContext": serviceContext
		}
	};
};

module.exports = DDMTemplateService;