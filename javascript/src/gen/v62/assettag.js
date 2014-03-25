function AssetTagService() {
}

AssetTagService.prototype.addTag = function(name, tagProperties, serviceContext) {
	return {
		"/assettag/add-tag": {
			"name": name,
			"tagProperties": tagProperties,
			"serviceContext": serviceContext
		}
	};
};

AssetTagService.prototype.deleteTag = function(tagId) {
	return {
		"/assettag/delete-tag": {
			"tagId": tagId
		}
	};
};

AssetTagService.prototype.deleteTags = function(tagIds) {
	return {
		"/assettag/delete-tags": {
			"tagIds": tagIds
		}
	};
};

AssetTagService.prototype.getGroupTags = function(groupId) {
	return {
		"/assettag/get-group-tags": {
			"groupId": groupId
		}
	};
};

AssetTagService.prototype.getGroupTags = function(groupId, start, end, obc) {
	return {
		"/assettag/get-group-tags": {
			"groupId": groupId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetTagService.prototype.getGroupTagsCount = function(groupId) {
	return {
		"/assettag/get-group-tags-count": {
			"groupId": groupId
		}
	};
};

AssetTagService.prototype.getGroupTagsDisplay = function(groupId, name, start, end) {
	return {
		"/assettag/get-group-tags-display": {
			"groupId": groupId,
			"name": name,
			"start": start,
			"end": end
		}
	};
};

AssetTagService.prototype.getGroupsTags = function(groupIds) {
	return {
		"/assettag/get-groups-tags": {
			"groupIds": groupIds
		}
	};
};

AssetTagService.prototype.getJsonGroupTags = function(groupId, name, start, end) {
	return {
		"/assettag/get-json-group-tags": {
			"groupId": groupId,
			"name": name,
			"start": start,
			"end": end
		}
	};
};

AssetTagService.prototype.getTag = function(tagId) {
	return {
		"/assettag/get-tag": {
			"tagId": tagId
		}
	};
};

AssetTagService.prototype.getTags = function(className, classPK) {
	return {
		"/assettag/get-tags": {
			"className": className,
			"classPK": classPK
		}
	};
};

AssetTagService.prototype.getTags = function(groupId, classNameId, name) {
	return {
		"/assettag/get-tags": {
			"groupId": groupId,
			"classNameId": classNameId,
			"name": name
		}
	};
};

AssetTagService.prototype.getTags = function(groupId, name, tagProperties, start, end) {
	return {
		"/assettag/get-tags": {
			"groupId": groupId,
			"name": name,
			"tagProperties": tagProperties,
			"start": start,
			"end": end
		}
	};
};

AssetTagService.prototype.getTags = function(groupIds, name, tagProperties, start, end) {
	return {
		"/assettag/get-tags": {
			"groupIds": groupIds,
			"name": name,
			"tagProperties": tagProperties,
			"start": start,
			"end": end
		}
	};
};

AssetTagService.prototype.getTags = function(groupId, classNameId, name, start, end, obc) {
	return {
		"/assettag/get-tags": {
			"groupId": groupId,
			"classNameId": classNameId,
			"name": name,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetTagService.prototype.getTagsCount = function(groupId, name) {
	return {
		"/assettag/get-tags-count": {
			"groupId": groupId,
			"name": name
		}
	};
};

AssetTagService.prototype.getTagsCount = function(groupId, classNameId, name) {
	return {
		"/assettag/get-tags-count": {
			"groupId": groupId,
			"classNameId": classNameId,
			"name": name
		}
	};
};

AssetTagService.prototype.getTagsCount = function(groupId, name, tagProperties) {
	return {
		"/assettag/get-tags-count": {
			"groupId": groupId,
			"name": name,
			"tagProperties": tagProperties
		}
	};
};

AssetTagService.prototype.mergeTags = function(fromTagId, toTagId, overrideProperties) {
	return {
		"/assettag/merge-tags": {
			"fromTagId": fromTagId,
			"toTagId": toTagId,
			"overrideProperties": overrideProperties
		}
	};
};

AssetTagService.prototype.mergeTags = function(fromTagIds, toTagId, overrideProperties) {
	return {
		"/assettag/merge-tags": {
			"fromTagIds": fromTagIds,
			"toTagId": toTagId,
			"overrideProperties": overrideProperties
		}
	};
};

AssetTagService.prototype.search = function(groupId, name, tagProperties, start, end) {
	return {
		"/assettag/search": {
			"groupId": groupId,
			"name": name,
			"tagProperties": tagProperties,
			"start": start,
			"end": end
		}
	};
};

AssetTagService.prototype.search = function(groupIds, name, tagProperties, start, end) {
	return {
		"/assettag/search": {
			"groupIds": groupIds,
			"name": name,
			"tagProperties": tagProperties,
			"start": start,
			"end": end
		}
	};
};

AssetTagService.prototype.updateTag = function(tagId, name, tagProperties, serviceContext) {
	return {
		"/assettag/update-tag": {
			"tagId": tagId,
			"name": name,
			"tagProperties": tagProperties,
			"serviceContext": serviceContext
		}
	};
};
