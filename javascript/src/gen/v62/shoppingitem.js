function ShoppingItemService() {
}

ShoppingItemService.prototype.addBookItems = function(groupId, categoryId, isbns) {
	return {
		"/shoppingitem/add-book-items": {
			"groupId": groupId,
			"categoryId": categoryId,
			"isbns": isbns
		}
	};
};

ShoppingItemService.prototype.addItem = function(groupId, categoryId, sku, name, description, properties, fieldsQuantities, requiresShipping, stockQuantity, featured, sale, smallImage, smallImageURL, smallFile, mediumImage, mediumImageURL, mediumFile, largeImage, largeImageURL, largeFile, itemFields, itemPrices, serviceContext) {
	return {
		"/shoppingitem/add-item": {
			"groupId": groupId,
			"categoryId": categoryId,
			"sku": sku,
			"name": name,
			"description": description,
			"properties": properties,
			"fieldsQuantities": fieldsQuantities,
			"requiresShipping": requiresShipping,
			"stockQuantity": stockQuantity,
			"featured": featured,
			"sale": sale,
			"smallImage": smallImage,
			"smallImageURL": smallImageURL,
			"smallFile": smallFile,
			"mediumImage": mediumImage,
			"mediumImageURL": mediumImageURL,
			"mediumFile": mediumFile,
			"largeImage": largeImage,
			"largeImageURL": largeImageURL,
			"largeFile": largeFile,
			"itemFields": itemFields,
			"itemPrices": itemPrices,
			"serviceContext": serviceContext
		}
	};
};

ShoppingItemService.prototype.deleteItem = function(itemId) {
	return {
		"/shoppingitem/delete-item": {
			"itemId": itemId
		}
	};
};

ShoppingItemService.prototype.getCategoriesItemsCount = function(groupId, categoryIds) {
	return {
		"/shoppingitem/get-categories-items-count": {
			"groupId": groupId,
			"categoryIds": categoryIds
		}
	};
};

ShoppingItemService.prototype.getItem = function(itemId) {
	return {
		"/shoppingitem/get-item": {
			"itemId": itemId
		}
	};
};

ShoppingItemService.prototype.getItems = function(groupId, categoryId) {
	return {
		"/shoppingitem/get-items": {
			"groupId": groupId,
			"categoryId": categoryId
		}
	};
};

ShoppingItemService.prototype.getItems = function(groupId, categoryId, start, end, obc) {
	return {
		"/shoppingitem/get-items": {
			"groupId": groupId,
			"categoryId": categoryId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

ShoppingItemService.prototype.getItemsCount = function(groupId, categoryId) {
	return {
		"/shoppingitem/get-items-count": {
			"groupId": groupId,
			"categoryId": categoryId
		}
	};
};

ShoppingItemService.prototype.getItemsPrevAndNext = function(itemId, obc) {
	return {
		"/shoppingitem/get-items-prev-and-next": {
			"itemId": itemId,
			"obc": obc
		}
	};
};

ShoppingItemService.prototype.updateItem = function(itemId, groupId, categoryId, sku, name, description, properties, fieldsQuantities, requiresShipping, stockQuantity, featured, sale, smallImage, smallImageURL, smallFile, mediumImage, mediumImageURL, mediumFile, largeImage, largeImageURL, largeFile, itemFields, itemPrices, serviceContext) {
	return {
		"/shoppingitem/update-item": {
			"itemId": itemId,
			"groupId": groupId,
			"categoryId": categoryId,
			"sku": sku,
			"name": name,
			"description": description,
			"properties": properties,
			"fieldsQuantities": fieldsQuantities,
			"requiresShipping": requiresShipping,
			"stockQuantity": stockQuantity,
			"featured": featured,
			"sale": sale,
			"smallImage": smallImage,
			"smallImageURL": smallImageURL,
			"smallFile": smallFile,
			"mediumImage": mediumImage,
			"mediumImageURL": mediumImageURL,
			"mediumFile": mediumFile,
			"largeImage": largeImage,
			"largeImageURL": largeImageURL,
			"largeFile": largeFile,
			"itemFields": itemFields,
			"itemPrices": itemPrices,
			"serviceContext": serviceContext
		}
	};
};
