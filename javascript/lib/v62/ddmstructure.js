function DDMStructureService() {
}

DDMStructureService.prototype.addStructure = function(groupId, parentStructureId, classNameId, structureKey, nameMap, descriptionMap, xsd, storageType, type, serviceContext) {
	return {
		"/ddmstructure/add-structure": {
			"groupId": groupId,
			"parentStructureId": parentStructureId,
			"classNameId": classNameId,
			"structureKey": structureKey,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"xsd": xsd,
			"storageType": storageType,
			"type": type,
			"serviceContext": serviceContext
		}
	};
};

DDMStructureService.prototype.addStructure = function(userId, groupId, parentStructureKey, classNameId, structureKey, nameMap, descriptionMap, xsd, storageType, type, serviceContext) {
	return {
		"/ddmstructure/add-structure": {
			"userId": userId,
			"groupId": groupId,
			"parentStructureKey": parentStructureKey,
			"classNameId": classNameId,
			"structureKey": structureKey,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"xsd": xsd,
			"storageType": storageType,
			"type": type,
			"serviceContext": serviceContext
		}
	};
};

DDMStructureService.prototype.addStructure = function(userId, groupId, classNameId, nameMap, descriptionMap, xsd, serviceContext) {
	return {
		"/ddmstructure/add-structure": {
			"userId": userId,
			"groupId": groupId,
			"classNameId": classNameId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"xsd": xsd,
			"serviceContext": serviceContext
		}
	};
};

DDMStructureService.prototype.copyStructure = function(structureId, serviceContext) {
	return {
		"/ddmstructure/copy-structure": {
			"structureId": structureId,
			"serviceContext": serviceContext
		}
	};
};

DDMStructureService.prototype.copyStructure = function(structureId, nameMap, descriptionMap, serviceContext) {
	return {
		"/ddmstructure/copy-structure": {
			"structureId": structureId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"serviceContext": serviceContext
		}
	};
};

DDMStructureService.prototype.deleteStructure = function(structureId) {
	return {
		"/ddmstructure/delete-structure": {
			"structureId": structureId
		}
	};
};

DDMStructureService.prototype.fetchStructure = function(groupId, classNameId, structureKey) {
	return {
		"/ddmstructure/fetch-structure": {
			"groupId": groupId,
			"classNameId": classNameId,
			"structureKey": structureKey
		}
	};
};

DDMStructureService.prototype.getStructure = function(structureId) {
	return {
		"/ddmstructure/get-structure": {
			"structureId": structureId
		}
	};
};

DDMStructureService.prototype.getStructure = function(groupId, classNameId, structureKey) {
	return {
		"/ddmstructure/get-structure": {
			"groupId": groupId,
			"classNameId": classNameId,
			"structureKey": structureKey
		}
	};
};

DDMStructureService.prototype.getStructure = function(groupId, classNameId, structureKey, includeGlobalStructures) {
	return {
		"/ddmstructure/get-structure": {
			"groupId": groupId,
			"classNameId": classNameId,
			"structureKey": structureKey,
			"includeGlobalStructures": includeGlobalStructures
		}
	};
};

DDMStructureService.prototype.getStructures = function(groupId) {
	return {
		"/ddmstructure/get-structures": {
			"groupId": groupId
		}
	};
};

DDMStructureService.prototype.getStructures = function(groupIds) {
	return {
		"/ddmstructure/get-structures": {
			"groupIds": groupIds
		}
	};
};

DDMStructureService.prototype.search = function(companyId, groupIds, classNameIds, name, description, storageType, type, andOperator, start, end, orderByComparator) {
	return {
		"/ddmstructure/search": {
			"companyId": companyId,
			"groupIds": groupIds,
			"classNameIds": classNameIds,
			"name": name,
			"description": description,
			"storageType": storageType,
			"type": type,
			"andOperator": andOperator,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

DDMStructureService.prototype.search = function(companyId, groupIds, classNameIds, keywords, start, end, orderByComparator) {
	return {
		"/ddmstructure/search": {
			"companyId": companyId,
			"groupIds": groupIds,
			"classNameIds": classNameIds,
			"keywords": keywords,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

DDMStructureService.prototype.searchCount = function(companyId, groupIds, classNameIds, keywords) {
	return {
		"/ddmstructure/search-count": {
			"companyId": companyId,
			"groupIds": groupIds,
			"classNameIds": classNameIds,
			"keywords": keywords
		}
	};
};

DDMStructureService.prototype.searchCount = function(companyId, groupIds, classNameIds, name, description, storageType, type, andOperator) {
	return {
		"/ddmstructure/search-count": {
			"companyId": companyId,
			"groupIds": groupIds,
			"classNameIds": classNameIds,
			"name": name,
			"description": description,
			"storageType": storageType,
			"type": type,
			"andOperator": andOperator
		}
	};
};

DDMStructureService.prototype.updateStructure = function(structureId, parentStructureId, nameMap, descriptionMap, xsd, serviceContext) {
	return {
		"/ddmstructure/update-structure": {
			"structureId": structureId,
			"parentStructureId": parentStructureId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"xsd": xsd,
			"serviceContext": serviceContext
		}
	};
};

DDMStructureService.prototype.updateStructure = function(groupId, parentStructureId, classNameId, structureKey, nameMap, descriptionMap, xsd, serviceContext) {
	return {
		"/ddmstructure/update-structure": {
			"groupId": groupId,
			"parentStructureId": parentStructureId,
			"classNameId": classNameId,
			"structureKey": structureKey,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"xsd": xsd,
			"serviceContext": serviceContext
		}
	};
};

module.exports = DDMStructureService;