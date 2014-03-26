function StagingService() {
}

StagingService.prototype.cleanUpStagingRequest = function(stagingRequestId) {
	return {
		"/staging/clean-up-staging-request": {
			"stagingRequestId": stagingRequestId
		}
	};
};

StagingService.prototype.createStagingRequest = function(groupId, checksum) {
	return {
		"/staging/create-staging-request": {
			"groupId": groupId,
			"checksum": checksum
		}
	};
};

StagingService.prototype.publishStagingRequest = function(stagingRequestId, privateLayout, parameterMap) {
	return {
		"/staging/publish-staging-request": {
			"stagingRequestId": stagingRequestId,
			"privateLayout": privateLayout,
			"parameterMap": parameterMap
		}
	};
};

StagingService.prototype.updateStagingRequest = function(stagingRequestId, fileName, bytes) {
	return {
		"/staging/update-staging-request": {
			"stagingRequestId": stagingRequestId,
			"fileName": fileName,
			"bytes": bytes
		}
	};
};

StagingService.prototype.validateStagingRequest = function(stagingRequestId, privateLayout, parameterMap) {
	return {
		"/staging/validate-staging-request": {
			"stagingRequestId": stagingRequestId,
			"privateLayout": privateLayout,
			"parameterMap": parameterMap
		}
	};
};

module.exports = StagingService;