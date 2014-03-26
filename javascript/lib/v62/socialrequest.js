function SocialRequestService() {
}

SocialRequestService.prototype.updateRequest = function(requestId, status, themeDisplay) {
	return {
		"/socialrequest/update-request": {
			"requestId": requestId,
			"status": status,
			"themeDisplay": themeDisplay
		}
	};
};

module.exports = SocialRequestService;