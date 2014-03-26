function OrgLaborService() {
}

OrgLaborService.prototype.addOrgLabor = function(organizationId, typeId, sunOpen, sunClose, monOpen, monClose, tueOpen, tueClose, wedOpen, wedClose, thuOpen, thuClose, friOpen, friClose, satOpen, satClose) {
	return {
		"/orglabor/add-org-labor": {
			"organizationId": organizationId,
			"typeId": typeId,
			"sunOpen": sunOpen,
			"sunClose": sunClose,
			"monOpen": monOpen,
			"monClose": monClose,
			"tueOpen": tueOpen,
			"tueClose": tueClose,
			"wedOpen": wedOpen,
			"wedClose": wedClose,
			"thuOpen": thuOpen,
			"thuClose": thuClose,
			"friOpen": friOpen,
			"friClose": friClose,
			"satOpen": satOpen,
			"satClose": satClose
		}
	};
};

OrgLaborService.prototype.deleteOrgLabor = function(orgLaborId) {
	return {
		"/orglabor/delete-org-labor": {
			"orgLaborId": orgLaborId
		}
	};
};

OrgLaborService.prototype.getOrgLabor = function(orgLaborId) {
	return {
		"/orglabor/get-org-labor": {
			"orgLaborId": orgLaborId
		}
	};
};

OrgLaborService.prototype.getOrgLabors = function(organizationId) {
	return {
		"/orglabor/get-org-labors": {
			"organizationId": organizationId
		}
	};
};

OrgLaborService.prototype.updateOrgLabor = function(orgLaborId, typeId, sunOpen, sunClose, monOpen, monClose, tueOpen, tueClose, wedOpen, wedClose, thuOpen, thuClose, friOpen, friClose, satOpen, satClose) {
	return {
		"/orglabor/update-org-labor": {
			"orgLaborId": orgLaborId,
			"typeId": typeId,
			"sunOpen": sunOpen,
			"sunClose": sunClose,
			"monOpen": monOpen,
			"monClose": monClose,
			"tueOpen": tueOpen,
			"tueClose": tueClose,
			"wedOpen": wedOpen,
			"wedClose": wedClose,
			"thuOpen": thuOpen,
			"thuClose": thuClose,
			"friOpen": friOpen,
			"friClose": friClose,
			"satOpen": satOpen,
			"satClose": satClose
		}
	};
};

module.exports = OrgLaborService;