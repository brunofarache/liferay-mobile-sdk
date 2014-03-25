function CompanyService() {
}

CompanyService.prototype.deleteLogo = function(companyId) {
	return {
		"/company/delete-logo": {
			"companyId": companyId
		}
	};
};

CompanyService.prototype.getCompanyById = function(companyId) {
	return {
		"/company/get-company-by-id": {
			"companyId": companyId
		}
	};
};

CompanyService.prototype.getCompanyByLogoId = function(logoId) {
	return {
		"/company/get-company-by-logo-id": {
			"logoId": logoId
		}
	};
};

CompanyService.prototype.getCompanyByMx = function(mx) {
	return {
		"/company/get-company-by-mx": {
			"mx": mx
		}
	};
};

CompanyService.prototype.getCompanyByVirtualHost = function(virtualHost) {
	return {
		"/company/get-company-by-virtual-host": {
			"virtualHost": virtualHost
		}
	};
};

CompanyService.prototype.getCompanyByWebId = function(webId) {
	return {
		"/company/get-company-by-web-id": {
			"webId": webId
		}
	};
};

CompanyService.prototype.updateCompany = function(companyId, virtualHost, mx, homeURL, name, legalName, legalId, legalType, sicCode, tickerSymbol, industry, type, size) {
	return {
		"/company/update-company": {
			"companyId": companyId,
			"virtualHost": virtualHost,
			"mx": mx,
			"homeURL": homeURL,
			"name": name,
			"legalName": legalName,
			"legalId": legalId,
			"legalType": legalType,
			"sicCode": sicCode,
			"tickerSymbol": tickerSymbol,
			"industry": industry,
			"type": type,
			"size": size
		}
	};
};

CompanyService.prototype.updateCompany = function(companyId, virtualHost, mx, maxUsers, active) {
	return {
		"/company/update-company": {
			"companyId": companyId,
			"virtualHost": virtualHost,
			"mx": mx,
			"maxUsers": maxUsers,
			"active": active
		}
	};
};

CompanyService.prototype.updateDisplay = function(companyId, languageId, timeZoneId) {
	return {
		"/company/update-display": {
			"companyId": companyId,
			"languageId": languageId,
			"timeZoneId": timeZoneId
		}
	};
};

CompanyService.prototype.updateLogo = function(companyId, bytes) {
	return {
		"/company/update-logo": {
			"companyId": companyId,
			"bytes": bytes
		}
	};
};
