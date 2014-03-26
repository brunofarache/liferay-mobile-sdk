function MBCategoryService() {
}

MBCategoryService.prototype.addCategory = function(parentCategoryId, name, description, displayStyle, emailAddress, inProtocol, inServerName, inServerPort, inUseSSL, inUserName, inPassword, inReadInterval, outEmailAddress, outCustom, outServerName, outServerPort, outUseSSL, outUserName, outPassword, mailingListActive, allowAnonymousEmail, serviceContext) {
	return {
		"/mbcategory/add-category": {
			"parentCategoryId": parentCategoryId,
			"name": name,
			"description": description,
			"displayStyle": displayStyle,
			"emailAddress": emailAddress,
			"inProtocol": inProtocol,
			"inServerName": inServerName,
			"inServerPort": inServerPort,
			"inUseSSL": inUseSSL,
			"inUserName": inUserName,
			"inPassword": inPassword,
			"inReadInterval": inReadInterval,
			"outEmailAddress": outEmailAddress,
			"outCustom": outCustom,
			"outServerName": outServerName,
			"outServerPort": outServerPort,
			"outUseSSL": outUseSSL,
			"outUserName": outUserName,
			"outPassword": outPassword,
			"mailingListActive": mailingListActive,
			"allowAnonymousEmail": allowAnonymousEmail,
			"serviceContext": serviceContext
		}
	};
};

MBCategoryService.prototype.addCategory = function(userId, parentCategoryId, name, description, serviceContext) {
	return {
		"/mbcategory/add-category": {
			"userId": userId,
			"parentCategoryId": parentCategoryId,
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

MBCategoryService.prototype.deleteCategory = function(categoryId, includeTrashedEntries) {
	return {
		"/mbcategory/delete-category": {
			"categoryId": categoryId,
			"includeTrashedEntries": includeTrashedEntries
		}
	};
};

MBCategoryService.prototype.deleteCategory = function(groupId, categoryId) {
	return {
		"/mbcategory/delete-category": {
			"groupId": groupId,
			"categoryId": categoryId
		}
	};
};

MBCategoryService.prototype.getCategories = function(groupId) {
	return {
		"/mbcategory/get-categories": {
			"groupId": groupId
		}
	};
};

MBCategoryService.prototype.getCategories = function(groupId, status) {
	return {
		"/mbcategory/get-categories": {
			"groupId": groupId,
			"status": status
		}
	};
};

MBCategoryService.prototype.getCategories = function(groupId, parentCategoryId, start, end) {
	return {
		"/mbcategory/get-categories": {
			"groupId": groupId,
			"parentCategoryId": parentCategoryId,
			"start": start,
			"end": end
		}
	};
};

MBCategoryService.prototype.getCategories = function(groupId, parentCategoryIds, start, end) {
	return {
		"/mbcategory/get-categories": {
			"groupId": groupId,
			"parentCategoryIds": parentCategoryIds,
			"start": start,
			"end": end
		}
	};
};

MBCategoryService.prototype.getCategories = function(groupId, parentCategoryId, status, start, end) {
	return {
		"/mbcategory/get-categories": {
			"groupId": groupId,
			"parentCategoryId": parentCategoryId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

MBCategoryService.prototype.getCategories = function(groupId, parentCategoryIds, status, start, end) {
	return {
		"/mbcategory/get-categories": {
			"groupId": groupId,
			"parentCategoryIds": parentCategoryIds,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

MBCategoryService.prototype.getCategoriesCount = function(groupId, parentCategoryId) {
	return {
		"/mbcategory/get-categories-count": {
			"groupId": groupId,
			"parentCategoryId": parentCategoryId
		}
	};
};

MBCategoryService.prototype.getCategoriesCount = function(groupId, parentCategoryIds) {
	return {
		"/mbcategory/get-categories-count": {
			"groupId": groupId,
			"parentCategoryIds": parentCategoryIds
		}
	};
};

MBCategoryService.prototype.getCategoriesCount = function(groupId, parentCategoryId, status) {
	return {
		"/mbcategory/get-categories-count": {
			"groupId": groupId,
			"parentCategoryId": parentCategoryId,
			"status": status
		}
	};
};

MBCategoryService.prototype.getCategoriesCount = function(groupId, parentCategoryIds, status) {
	return {
		"/mbcategory/get-categories-count": {
			"groupId": groupId,
			"parentCategoryIds": parentCategoryIds,
			"status": status
		}
	};
};

MBCategoryService.prototype.getCategory = function(categoryId) {
	return {
		"/mbcategory/get-category": {
			"categoryId": categoryId
		}
	};
};

MBCategoryService.prototype.getCategoryIds = function(groupId, categoryId) {
	return {
		"/mbcategory/get-category-ids": {
			"groupId": groupId,
			"categoryId": categoryId
		}
	};
};

MBCategoryService.prototype.getSubcategoryIds = function(categoryIds, groupId, categoryId) {
	return {
		"/mbcategory/get-subcategory-ids": {
			"categoryIds": categoryIds,
			"groupId": groupId,
			"categoryId": categoryId
		}
	};
};

MBCategoryService.prototype.getSubscribedCategories = function(groupId, userId, start, end) {
	return {
		"/mbcategory/get-subscribed-categories": {
			"groupId": groupId,
			"userId": userId,
			"start": start,
			"end": end
		}
	};
};

MBCategoryService.prototype.getSubscribedCategoriesCount = function(groupId, userId) {
	return {
		"/mbcategory/get-subscribed-categories-count": {
			"groupId": groupId,
			"userId": userId
		}
	};
};

MBCategoryService.prototype.moveCategory = function(categoryId, parentCategoryId, mergeWithParentCategory) {
	return {
		"/mbcategory/move-category": {
			"categoryId": categoryId,
			"parentCategoryId": parentCategoryId,
			"mergeWithParentCategory": mergeWithParentCategory
		}
	};
};

MBCategoryService.prototype.moveCategoryFromTrash = function(categoryId, newCategoryId) {
	return {
		"/mbcategory/move-category-from-trash": {
			"categoryId": categoryId,
			"newCategoryId": newCategoryId
		}
	};
};

MBCategoryService.prototype.moveCategoryToTrash = function(categoryId) {
	return {
		"/mbcategory/move-category-to-trash": {
			"categoryId": categoryId
		}
	};
};

MBCategoryService.prototype.restoreCategoryFromTrash = function(categoryId) {
	return {
		"/mbcategory/restore-category-from-trash": {
			"categoryId": categoryId
		}
	};
};

MBCategoryService.prototype.subscribeCategory = function(groupId, categoryId) {
	return {
		"/mbcategory/subscribe-category": {
			"groupId": groupId,
			"categoryId": categoryId
		}
	};
};

MBCategoryService.prototype.unsubscribeCategory = function(groupId, categoryId) {
	return {
		"/mbcategory/unsubscribe-category": {
			"groupId": groupId,
			"categoryId": categoryId
		}
	};
};

MBCategoryService.prototype.updateCategory = function(categoryId, parentCategoryId, name, description, displayStyle, emailAddress, inProtocol, inServerName, inServerPort, inUseSSL, inUserName, inPassword, inReadInterval, outEmailAddress, outCustom, outServerName, outServerPort, outUseSSL, outUserName, outPassword, mailingListActive, allowAnonymousEmail, mergeWithParentCategory, serviceContext) {
	return {
		"/mbcategory/update-category": {
			"categoryId": categoryId,
			"parentCategoryId": parentCategoryId,
			"name": name,
			"description": description,
			"displayStyle": displayStyle,
			"emailAddress": emailAddress,
			"inProtocol": inProtocol,
			"inServerName": inServerName,
			"inServerPort": inServerPort,
			"inUseSSL": inUseSSL,
			"inUserName": inUserName,
			"inPassword": inPassword,
			"inReadInterval": inReadInterval,
			"outEmailAddress": outEmailAddress,
			"outCustom": outCustom,
			"outServerName": outServerName,
			"outServerPort": outServerPort,
			"outUseSSL": outUseSSL,
			"outUserName": outUserName,
			"outPassword": outPassword,
			"mailingListActive": mailingListActive,
			"allowAnonymousEmail": allowAnonymousEmail,
			"mergeWithParentCategory": mergeWithParentCategory,
			"serviceContext": serviceContext
		}
	};
};

module.exports = MBCategoryService;