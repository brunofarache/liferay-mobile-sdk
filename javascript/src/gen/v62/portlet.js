function PortletService() {
}

PortletService.prototype.getWarPortlets = function() {
	return {
		"/portlet/get-war-portlets": {
		}
	};
};

PortletService.prototype.updatePortlet = function(companyId, portletId, roles, active) {
	return {
		"/portlet/update-portlet": {
			"companyId": companyId,
			"portletId": portletId,
			"roles": roles,
			"active": active
		}
	};
};
