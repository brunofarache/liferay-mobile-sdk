function AssetCategoryService() {
}

AssetCategoryService.prototype.addCategory = function(title, vocabularyId, serviceContext) {
	return {
		"/assetcategory/add-category": {
			"title": title,
			"vocabularyId": vocabularyId,
			"serviceContext": serviceContext
		}
	};
};

AssetCategoryService.prototype.addCategory = function(parentCategoryId, titleMap, descriptionMap, vocabularyId, categoryProperties, serviceContext) {
	return {
		"/assetcategory/add-category": {
			"parentCategoryId": parentCategoryId,
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"vocabularyId": vocabularyId,
			"categoryProperties": categoryProperties,
			"serviceContext": serviceContext
		}
	};
};

AssetCategoryService.prototype.deleteCategories = function(categoryIds) {
	return {
		"/assetcategory/delete-categories": {
			"categoryIds": categoryIds
		}
	};
};

AssetCategoryService.prototype.deleteCategories = function(categoryIds, serviceContext) {
	return {
		"/assetcategory/delete-categories": {
			"categoryIds": categoryIds,
			"serviceContext": serviceContext
		}
	};
};

AssetCategoryService.prototype.deleteCategory = function(categoryId) {
	return {
		"/assetcategory/delete-category": {
			"categoryId": categoryId
		}
	};
};

AssetCategoryService.prototype.getCategories = function(className, classPK) {
	return {
		"/assetcategory/get-categories": {
			"className": className,
			"classPK": classPK
		}
	};
};

AssetCategoryService.prototype.getCategory = function(categoryId) {
	return {
		"/assetcategory/get-category": {
			"categoryId": categoryId
		}
	};
};

AssetCategoryService.prototype.getChildCategories = function(parentCategoryId) {
	return {
		"/assetcategory/get-child-categories": {
			"parentCategoryId": parentCategoryId
		}
	};
};

AssetCategoryService.prototype.getChildCategories = function(parentCategoryId, start, end, obc) {
	return {
		"/assetcategory/get-child-categories": {
			"parentCategoryId": parentCategoryId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetCategoryService.prototype.getJsonSearch = function(groupId, name, vocabularyIds, start, end) {
	return {
		"/assetcategory/get-json-search": {
			"groupId": groupId,
			"name": name,
			"vocabularyIds": vocabularyIds,
			"start": start,
			"end": end
		}
	};
};

AssetCategoryService.prototype.getJsonVocabularyCategories = function(vocabularyId, start, end, obc) {
	return {
		"/assetcategory/get-json-vocabulary-categories": {
			"vocabularyId": vocabularyId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetCategoryService.prototype.getJsonVocabularyCategories = function(groupId, name, vocabularyId, start, end, obc) {
	return {
		"/assetcategory/get-json-vocabulary-categories": {
			"groupId": groupId,
			"name": name,
			"vocabularyId": vocabularyId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetCategoryService.prototype.getVocabularyCategories = function(vocabularyId, start, end, obc) {
	return {
		"/assetcategory/get-vocabulary-categories": {
			"vocabularyId": vocabularyId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetCategoryService.prototype.getVocabularyCategories = function(parentCategoryId, vocabularyId, start, end, obc) {
	return {
		"/assetcategory/get-vocabulary-categories": {
			"parentCategoryId": parentCategoryId,
			"vocabularyId": vocabularyId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetCategoryService.prototype.getVocabularyCategories = function(groupId, name, vocabularyId, start, end, obc) {
	return {
		"/assetcategory/get-vocabulary-categories": {
			"groupId": groupId,
			"name": name,
			"vocabularyId": vocabularyId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetCategoryService.prototype.getVocabularyCategoriesCount = function(groupId, vocabularyId) {
	return {
		"/assetcategory/get-vocabulary-categories-count": {
			"groupId": groupId,
			"vocabularyId": vocabularyId
		}
	};
};

AssetCategoryService.prototype.getVocabularyCategoriesCount = function(groupId, name, vocabularyId) {
	return {
		"/assetcategory/get-vocabulary-categories-count": {
			"groupId": groupId,
			"name": name,
			"vocabularyId": vocabularyId
		}
	};
};

AssetCategoryService.prototype.getVocabularyCategoriesDisplay = function(vocabularyId, start, end, obc) {
	return {
		"/assetcategory/get-vocabulary-categories-display": {
			"vocabularyId": vocabularyId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetCategoryService.prototype.getVocabularyCategoriesDisplay = function(groupId, name, vocabularyId, start, end, obc) {
	return {
		"/assetcategory/get-vocabulary-categories-display": {
			"groupId": groupId,
			"name": name,
			"vocabularyId": vocabularyId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetCategoryService.prototype.getVocabularyRootCategories = function(vocabularyId, start, end, obc) {
	return {
		"/assetcategory/get-vocabulary-root-categories": {
			"vocabularyId": vocabularyId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetCategoryService.prototype.getVocabularyRootCategories = function(groupId, vocabularyId, start, end, obc) {
	return {
		"/assetcategory/get-vocabulary-root-categories": {
			"groupId": groupId,
			"vocabularyId": vocabularyId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetCategoryService.prototype.getVocabularyRootCategoriesCount = function(groupId, vocabularyId) {
	return {
		"/assetcategory/get-vocabulary-root-categories-count": {
			"groupId": groupId,
			"vocabularyId": vocabularyId
		}
	};
};

AssetCategoryService.prototype.moveCategory = function(categoryId, parentCategoryId, vocabularyId, serviceContext) {
	return {
		"/assetcategory/move-category": {
			"categoryId": categoryId,
			"parentCategoryId": parentCategoryId,
			"vocabularyId": vocabularyId,
			"serviceContext": serviceContext
		}
	};
};

AssetCategoryService.prototype.search = function(groupId, name, categoryProperties, start, end) {
	return {
		"/assetcategory/search": {
			"groupId": groupId,
			"name": name,
			"categoryProperties": categoryProperties,
			"start": start,
			"end": end
		}
	};
};

AssetCategoryService.prototype.search = function(groupIds, name, vocabularyIds, start, end) {
	return {
		"/assetcategory/search": {
			"groupIds": groupIds,
			"name": name,
			"vocabularyIds": vocabularyIds,
			"start": start,
			"end": end
		}
	};
};

AssetCategoryService.prototype.search = function(groupId, keywords, vocabularyId, start, end, obc) {
	return {
		"/assetcategory/search": {
			"groupId": groupId,
			"keywords": keywords,
			"vocabularyId": vocabularyId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

AssetCategoryService.prototype.updateCategory = function(categoryId, parentCategoryId, titleMap, descriptionMap, vocabularyId, categoryProperties, serviceContext) {
	return {
		"/assetcategory/update-category": {
			"categoryId": categoryId,
			"parentCategoryId": parentCategoryId,
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"vocabularyId": vocabularyId,
			"categoryProperties": categoryProperties,
			"serviceContext": serviceContext
		}
	};
};
