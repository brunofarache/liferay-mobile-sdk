function AssetTagPropertyService() {
}

AssetTagPropertyService.prototype.addTagProperty = function(tagId, key, value) {
	return {
		"/assettagproperty/add-tag-property": {
			"tagId": tagId,
			"key": key,
			"value": value
		}
	};
};

AssetTagPropertyService.prototype.deleteTagProperty = function(tagPropertyId) {
	return {
		"/assettagproperty/delete-tag-property": {
			"tagPropertyId": tagPropertyId
		}
	};
};

AssetTagPropertyService.prototype.getTagProperties = function(tagId) {
	return {
		"/assettagproperty/get-tag-properties": {
			"tagId": tagId
		}
	};
};

AssetTagPropertyService.prototype.getTagPropertyValues = function(companyId, key) {
	return {
		"/assettagproperty/get-tag-property-values": {
			"companyId": companyId,
			"key": key
		}
	};
};

AssetTagPropertyService.prototype.updateTagProperty = function(tagPropertyId, key, value) {
	return {
		"/assettagproperty/update-tag-property": {
			"tagPropertyId": tagPropertyId,
			"key": key,
			"value": value
		}
	};
};
