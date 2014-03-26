function SCProductEntryService() {
}

SCProductEntryService.prototype.addProductEntry = function(name, type, tags, shortDescription, longDescription, pageURL, author, repoGroupId, repoArtifactId, licenseIds, thumbnails, fullImages, serviceContext) {
	return {
		"/scproductentry/add-product-entry": {
			"name": name,
			"type": type,
			"tags": tags,
			"shortDescription": shortDescription,
			"longDescription": longDescription,
			"pageURL": pageURL,
			"author": author,
			"repoGroupId": repoGroupId,
			"repoArtifactId": repoArtifactId,
			"licenseIds": licenseIds,
			"thumbnails": thumbnails,
			"fullImages": fullImages,
			"serviceContext": serviceContext
		}
	};
};

SCProductEntryService.prototype.deleteProductEntry = function(productEntryId) {
	return {
		"/scproductentry/delete-product-entry": {
			"productEntryId": productEntryId
		}
	};
};

SCProductEntryService.prototype.getProductEntry = function(productEntryId) {
	return {
		"/scproductentry/get-product-entry": {
			"productEntryId": productEntryId
		}
	};
};

SCProductEntryService.prototype.updateProductEntry = function(productEntryId, name, type, tags, shortDescription, longDescription, pageURL, author, repoGroupId, repoArtifactId, licenseIds, thumbnails, fullImages) {
	return {
		"/scproductentry/update-product-entry": {
			"productEntryId": productEntryId,
			"name": name,
			"type": type,
			"tags": tags,
			"shortDescription": shortDescription,
			"longDescription": longDescription,
			"pageURL": pageURL,
			"author": author,
			"repoGroupId": repoGroupId,
			"repoArtifactId": repoArtifactId,
			"licenseIds": licenseIds,
			"thumbnails": thumbnails,
			"fullImages": fullImages
		}
	};
};

module.exports = SCProductEntryService;