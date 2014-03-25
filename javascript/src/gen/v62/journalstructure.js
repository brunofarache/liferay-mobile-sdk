function JournalStructureService() {
}

JournalStructureService.prototype.addStructure = function(groupId, structureId, autoStructureId, parentStructureId, nameMap, descriptionMap, xsd, serviceContext) {
	return {
		"/journalstructure/add-structure": {
			"groupId": groupId,
			"structureId": structureId,
			"autoStructureId": autoStructureId,
			"parentStructureId": parentStructureId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"xsd": xsd,
			"serviceContext": serviceContext
		}
	};
};

JournalStructureService.prototype.copyStructure = function(groupId, oldStructureId, newStructureId, autoStructureId) {
	return {
		"/journalstructure/copy-structure": {
			"groupId": groupId,
			"oldStructureId": oldStructureId,
			"newStructureId": newStructureId,
			"autoStructureId": autoStructureId
		}
	};
};

JournalStructureService.prototype.deleteStructure = function(groupId, structureId) {
	return {
		"/journalstructure/delete-structure": {
			"groupId": groupId,
			"structureId": structureId
		}
	};
};

JournalStructureService.prototype.getStructure = function(groupId, structureId) {
	return {
		"/journalstructure/get-structure": {
			"groupId": groupId,
			"structureId": structureId
		}
	};
};

JournalStructureService.prototype.getStructure = function(groupId, structureId, includeGlobalStructures) {
	return {
		"/journalstructure/get-structure": {
			"groupId": groupId,
			"structureId": structureId,
			"includeGlobalStructures": includeGlobalStructures
		}
	};
};

JournalStructureService.prototype.getStructures = function(groupId) {
	return {
		"/journalstructure/get-structures": {
			"groupId": groupId
		}
	};
};

JournalStructureService.prototype.getStructures = function(groupIds) {
	return {
		"/journalstructure/get-structures": {
			"groupIds": groupIds
		}
	};
};

JournalStructureService.prototype.search = function(companyId, groupIds, keywords, start, end, obc) {
	return {
		"/journalstructure/search": {
			"companyId": companyId,
			"groupIds": groupIds,
			"keywords": keywords,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

JournalStructureService.prototype.search = function(companyId, groupIds, structureId, name, description, andOperator, start, end, obc) {
	return {
		"/journalstructure/search": {
			"companyId": companyId,
			"groupIds": groupIds,
			"structureId": structureId,
			"name": name,
			"description": description,
			"andOperator": andOperator,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

JournalStructureService.prototype.searchCount = function(companyId, groupIds, keywords) {
	return {
		"/journalstructure/search-count": {
			"companyId": companyId,
			"groupIds": groupIds,
			"keywords": keywords
		}
	};
};

JournalStructureService.prototype.searchCount = function(companyId, groupIds, structureId, name, description, andOperator) {
	return {
		"/journalstructure/search-count": {
			"companyId": companyId,
			"groupIds": groupIds,
			"structureId": structureId,
			"name": name,
			"description": description,
			"andOperator": andOperator
		}
	};
};

JournalStructureService.prototype.updateStructure = function(groupId, structureId, parentStructureId, nameMap, descriptionMap, xsd, serviceContext) {
	return {
		"/journalstructure/update-structure": {
			"groupId": groupId,
			"structureId": structureId,
			"parentStructureId": parentStructureId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"xsd": xsd,
			"serviceContext": serviceContext
		}
	};
};
