function WebsiteService() {
}

WebsiteService.prototype.addWebsite = function(className, classPK, url, typeId, primary) {
	return {
		"/website/add-website": {
			"className": className,
			"classPK": classPK,
			"url": url,
			"typeId": typeId,
			"primary": primary
		}
	};
};

WebsiteService.prototype.addWebsite = function(className, classPK, url, typeId, primary, serviceContext) {
	return {
		"/website/add-website": {
			"className": className,
			"classPK": classPK,
			"url": url,
			"typeId": typeId,
			"primary": primary,
			"serviceContext": serviceContext
		}
	};
};

WebsiteService.prototype.deleteWebsite = function(websiteId) {
	return {
		"/website/delete-website": {
			"websiteId": websiteId
		}
	};
};

WebsiteService.prototype.getWebsite = function(websiteId) {
	return {
		"/website/get-website": {
			"websiteId": websiteId
		}
	};
};

WebsiteService.prototype.getWebsites = function(className, classPK) {
	return {
		"/website/get-websites": {
			"className": className,
			"classPK": classPK
		}
	};
};

WebsiteService.prototype.updateWebsite = function(websiteId, url, typeId, primary) {
	return {
		"/website/update-website": {
			"websiteId": websiteId,
			"url": url,
			"typeId": typeId,
			"primary": primary
		}
	};
};
