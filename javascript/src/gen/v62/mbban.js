function MBBanService() {
}

MBBanService.prototype.addBan = function(banUserId, serviceContext) {
	return {
		"/mbban/add-ban": {
			"banUserId": banUserId,
			"serviceContext": serviceContext
		}
	};
};

MBBanService.prototype.deleteBan = function(banUserId, serviceContext) {
	return {
		"/mbban/delete-ban": {
			"banUserId": banUserId,
			"serviceContext": serviceContext
		}
	};
};
