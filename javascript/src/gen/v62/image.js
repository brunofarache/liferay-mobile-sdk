function ImageService() {
}

ImageService.prototype.getImage = function(imageId) {
	return {
		"/image/get-image": {
			"imageId": imageId
		}
	};
};
