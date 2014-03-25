function JournalTemplateService() {
}

JournalTemplateService.prototype.addTemplate = function(groupId, templateId, autoTemplateId, structureId, nameMap, descriptionMap, xsl, formatXsl, langType, cacheable, serviceContext) {
	return {
		"/journaltemplate/add-template": {
			"groupId": groupId,
			"templateId": templateId,
			"autoTemplateId": autoTemplateId,
			"structureId": structureId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"xsl": xsl,
			"formatXsl": formatXsl,
			"langType": langType,
			"cacheable": cacheable,
			"serviceContext": serviceContext
		}
	};
};

JournalTemplateService.prototype.addTemplate = function(groupId, templateId, autoTemplateId, structureId, nameMap, descriptionMap, xsl, formatXsl, langType, cacheable, smallImage, smallImageURL, smallFile, serviceContext) {
	return {
		"/journaltemplate/add-template": {
			"groupId": groupId,
			"templateId": templateId,
			"autoTemplateId": autoTemplateId,
			"structureId": structureId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"xsl": xsl,
			"formatXsl": formatXsl,
			"langType": langType,
			"cacheable": cacheable,
			"smallImage": smallImage,
			"smallImageURL": smallImageURL,
			"smallFile": smallFile,
			"serviceContext": serviceContext
		}
	};
};

JournalTemplateService.prototype.copyTemplate = function(groupId, oldTemplateId, newTemplateId, autoTemplateId) {
	return {
		"/journaltemplate/copy-template": {
			"groupId": groupId,
			"oldTemplateId": oldTemplateId,
			"newTemplateId": newTemplateId,
			"autoTemplateId": autoTemplateId
		}
	};
};

JournalTemplateService.prototype.deleteTemplate = function(groupId, templateId) {
	return {
		"/journaltemplate/delete-template": {
			"groupId": groupId,
			"templateId": templateId
		}
	};
};

JournalTemplateService.prototype.getStructureTemplates = function(groupId, structureId) {
	return {
		"/journaltemplate/get-structure-templates": {
			"groupId": groupId,
			"structureId": structureId
		}
	};
};

JournalTemplateService.prototype.getTemplate = function(groupId, templateId) {
	return {
		"/journaltemplate/get-template": {
			"groupId": groupId,
			"templateId": templateId
		}
	};
};

JournalTemplateService.prototype.getTemplate = function(groupId, templateId, includeGlobalTemplates) {
	return {
		"/journaltemplate/get-template": {
			"groupId": groupId,
			"templateId": templateId,
			"includeGlobalTemplates": includeGlobalTemplates
		}
	};
};

JournalTemplateService.prototype.search = function(companyId, groupIds, templateId, structureId, structureIdComparator, name, description, andOperator, start, end, obc) {
	return {
		"/journaltemplate/search": {
			"companyId": companyId,
			"groupIds": groupIds,
			"templateId": templateId,
			"structureId": structureId,
			"structureIdComparator": structureIdComparator,
			"name": name,
			"description": description,
			"andOperator": andOperator,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

JournalTemplateService.prototype.search = function(companyId, groupIds, keywords, structureId, structureIdComparator, start, end, obc) {
	return {
		"/journaltemplate/search": {
			"companyId": companyId,
			"groupIds": groupIds,
			"keywords": keywords,
			"structureId": structureId,
			"structureIdComparator": structureIdComparator,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

JournalTemplateService.prototype.searchCount = function(companyId, groupIds, keywords, structureId, structureIdComparator) {
	return {
		"/journaltemplate/search-count": {
			"companyId": companyId,
			"groupIds": groupIds,
			"keywords": keywords,
			"structureId": structureId,
			"structureIdComparator": structureIdComparator
		}
	};
};

JournalTemplateService.prototype.searchCount = function(companyId, groupIds, templateId, structureId, structureIdComparator, name, description, andOperator) {
	return {
		"/journaltemplate/search-count": {
			"companyId": companyId,
			"groupIds": groupIds,
			"templateId": templateId,
			"structureId": structureId,
			"structureIdComparator": structureIdComparator,
			"name": name,
			"description": description,
			"andOperator": andOperator
		}
	};
};

JournalTemplateService.prototype.updateTemplate = function(groupId, templateId, structureId, nameMap, descriptionMap, xsl, formatXsl, langType, cacheable, serviceContext) {
	return {
		"/journaltemplate/update-template": {
			"groupId": groupId,
			"templateId": templateId,
			"structureId": structureId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"xsl": xsl,
			"formatXsl": formatXsl,
			"langType": langType,
			"cacheable": cacheable,
			"serviceContext": serviceContext
		}
	};
};

JournalTemplateService.prototype.updateTemplate = function(groupId, templateId, structureId, nameMap, descriptionMap, xsl, formatXsl, langType, cacheable, smallImage, smallImageURL, smallFile, serviceContext) {
	return {
		"/journaltemplate/update-template": {
			"groupId": groupId,
			"templateId": templateId,
			"structureId": structureId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"xsl": xsl,
			"formatXsl": formatXsl,
			"langType": langType,
			"cacheable": cacheable,
			"smallImage": smallImage,
			"smallImageURL": smallImageURL,
			"smallFile": smallFile,
			"serviceContext": serviceContext
		}
	};
};
