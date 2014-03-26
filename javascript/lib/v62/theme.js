function ThemeService() {
}

ThemeService.prototype.getThemes = function(companyId) {
	return {
		"/theme/get-themes": {
			"companyId": companyId
		}
	};
};

ThemeService.prototype.getWarThemes = function() {
	return {
		"/theme/get-war-themes": {
		}
	};
};

module.exports = ThemeService;