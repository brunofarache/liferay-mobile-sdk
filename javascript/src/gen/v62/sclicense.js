function SCLicenseService() {
}

SCLicenseService.prototype.addLicense = function(name, url, openSource, active, recommended) {
	return {
		"/sclicense/add-license": {
			"name": name,
			"url": url,
			"openSource": openSource,
			"active": active,
			"recommended": recommended
		}
	};
};

SCLicenseService.prototype.deleteLicense = function(licenseId) {
	return {
		"/sclicense/delete-license": {
			"licenseId": licenseId
		}
	};
};

SCLicenseService.prototype.getLicense = function(licenseId) {
	return {
		"/sclicense/get-license": {
			"licenseId": licenseId
		}
	};
};

SCLicenseService.prototype.updateLicense = function(licenseId, name, url, openSource, active, recommended) {
	return {
		"/sclicense/update-license": {
			"licenseId": licenseId,
			"name": name,
			"url": url,
			"openSource": openSource,
			"active": active,
			"recommended": recommended
		}
	};
};
