function AssetCategoryPropertyService() {
}

AssetCategoryPropertyService.prototype.addCategoryProperty = function(entryId, key, value) {
	return {
		"/assetcategoryproperty/add-category-property": {
			"entryId": entryId,
			"key": key,
			"value": value
		}
	};
};

AssetCategoryPropertyService.prototype.deleteCategoryProperty = function(categoryPropertyId) {
	return {
		"/assetcategoryproperty/delete-category-property": {
			"categoryPropertyId": categoryPropertyId
		}
	};
};

AssetCategoryPropertyService.prototype.getCategoryProperties = function(entryId) {
	return {
		"/assetcategoryproperty/get-category-properties": {
			"entryId": entryId
		}
	};
};

AssetCategoryPropertyService.prototype.getCategoryPropertyValues = function(companyId, key) {
	return {
		"/assetcategoryproperty/get-category-property-values": {
			"companyId": companyId,
			"key": key
		}
	};
};

AssetCategoryPropertyService.prototype.updateCategoryProperty = function(categoryPropertyId, key, value) {
	return {
		"/assetcategoryproperty/update-category-property": {
			"categoryPropertyId": categoryPropertyId,
			"key": key,
			"value": value
		}
	};
};
