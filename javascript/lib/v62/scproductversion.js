function SCProductVersionService() {
}

SCProductVersionService.prototype.addProductVersion = function(productEntryId, version, changeLog, downloadPageURL, directDownloadURL, testDirectDownloadURL, repoStoreArtifact, frameworkVersionIds, serviceContext) {
	return {
		"/scproductversion/add-product-version": {
			"productEntryId": productEntryId,
			"version": version,
			"changeLog": changeLog,
			"downloadPageURL": downloadPageURL,
			"directDownloadURL": directDownloadURL,
			"testDirectDownloadURL": testDirectDownloadURL,
			"repoStoreArtifact": repoStoreArtifact,
			"frameworkVersionIds": frameworkVersionIds,
			"serviceContext": serviceContext
		}
	};
};

SCProductVersionService.prototype.deleteProductVersion = function(productVersionId) {
	return {
		"/scproductversion/delete-product-version": {
			"productVersionId": productVersionId
		}
	};
};

SCProductVersionService.prototype.getProductVersion = function(productVersionId) {
	return {
		"/scproductversion/get-product-version": {
			"productVersionId": productVersionId
		}
	};
};

SCProductVersionService.prototype.getProductVersions = function(productEntryId, start, end) {
	return {
		"/scproductversion/get-product-versions": {
			"productEntryId": productEntryId,
			"start": start,
			"end": end
		}
	};
};

SCProductVersionService.prototype.getProductVersionsCount = function(productEntryId) {
	return {
		"/scproductversion/get-product-versions-count": {
			"productEntryId": productEntryId
		}
	};
};

SCProductVersionService.prototype.updateProductVersion = function(productVersionId, version, changeLog, downloadPageURL, directDownloadURL, testDirectDownloadURL, repoStoreArtifact, frameworkVersionIds) {
	return {
		"/scproductversion/update-product-version": {
			"productVersionId": productVersionId,
			"version": version,
			"changeLog": changeLog,
			"downloadPageURL": downloadPageURL,
			"directDownloadURL": directDownloadURL,
			"testDirectDownloadURL": testDirectDownloadURL,
			"repoStoreArtifact": repoStoreArtifact,
			"frameworkVersionIds": frameworkVersionIds
		}
	};
};

module.exports = SCProductVersionService;