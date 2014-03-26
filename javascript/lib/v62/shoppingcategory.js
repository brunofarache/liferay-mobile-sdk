function ShoppingCategoryService() {
}

ShoppingCategoryService.prototype.addCategory = function(parentCategoryId, name, description, serviceContext) {
	return {
		"/shoppingcategory/add-category": {
			"parentCategoryId": parentCategoryId,
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

ShoppingCategoryService.prototype.deleteCategory = function(categoryId) {
	return {
		"/shoppingcategory/delete-category": {
			"categoryId": categoryId
		}
	};
};

ShoppingCategoryService.prototype.getCategories = function(groupId) {
	return {
		"/shoppingcategory/get-categories": {
			"groupId": groupId
		}
	};
};

ShoppingCategoryService.prototype.getCategories = function(groupId, parentCategoryId, start, end) {
	return {
		"/shoppingcategory/get-categories": {
			"groupId": groupId,
			"parentCategoryId": parentCategoryId,
			"start": start,
			"end": end
		}
	};
};

ShoppingCategoryService.prototype.getCategoriesCount = function(groupId, parentCategoryId) {
	return {
		"/shoppingcategory/get-categories-count": {
			"groupId": groupId,
			"parentCategoryId": parentCategoryId
		}
	};
};

ShoppingCategoryService.prototype.getCategory = function(categoryId) {
	return {
		"/shoppingcategory/get-category": {
			"categoryId": categoryId
		}
	};
};

ShoppingCategoryService.prototype.getSubcategoryIds = function(categoryIds, groupId, categoryId) {
	return {
		"/shoppingcategory/get-subcategory-ids": {
			"categoryIds": categoryIds,
			"groupId": groupId,
			"categoryId": categoryId
		}
	};
};

ShoppingCategoryService.prototype.updateCategory = function(categoryId, parentCategoryId, name, description, mergeWithParentCategory, serviceContext) {
	return {
		"/shoppingcategory/update-category": {
			"categoryId": categoryId,
			"parentCategoryId": parentCategoryId,
			"name": name,
			"description": description,
			"mergeWithParentCategory": mergeWithParentCategory,
			"serviceContext": serviceContext
		}
	};
};

module.exports = ShoppingCategoryService;