function OrganizationService() {
}

OrganizationService.prototype.addGroupOrganizations = function(groupId, organizationIds) {
	return {
		"/organization/add-group-organizations": {
			"groupId": groupId,
			"organizationIds": organizationIds
		}
	};
};

OrganizationService.prototype.addOrganization = function(parentOrganizationId, name, type, recursable, regionId, countryId, statusId, comments, site, serviceContext) {
	return {
		"/organization/add-organization": {
			"parentOrganizationId": parentOrganizationId,
			"name": name,
			"type": type,
			"recursable": recursable,
			"regionId": regionId,
			"countryId": countryId,
			"statusId": statusId,
			"comments": comments,
			"site": site,
			"serviceContext": serviceContext
		}
	};
};

OrganizationService.prototype.addOrganization = function(parentOrganizationId, name, type, regionId, countryId, statusId, comments, site, addresses, emailAddresses, orgLabors, phones, websites, serviceContext) {
	return {
		"/organization/add-organization": {
			"parentOrganizationId": parentOrganizationId,
			"name": name,
			"type": type,
			"regionId": regionId,
			"countryId": countryId,
			"statusId": statusId,
			"comments": comments,
			"site": site,
			"addresses": addresses,
			"emailAddresses": emailAddresses,
			"orgLabors": orgLabors,
			"phones": phones,
			"websites": websites,
			"serviceContext": serviceContext
		}
	};
};

OrganizationService.prototype.addOrganization = function(parentOrganizationId, name, type, recursable, regionId, countryId, statusId, comments, site, addresses, emailAddresses, orgLabors, phones, websites, serviceContext) {
	return {
		"/organization/add-organization": {
			"parentOrganizationId": parentOrganizationId,
			"name": name,
			"type": type,
			"recursable": recursable,
			"regionId": regionId,
			"countryId": countryId,
			"statusId": statusId,
			"comments": comments,
			"site": site,
			"addresses": addresses,
			"emailAddresses": emailAddresses,
			"orgLabors": orgLabors,
			"phones": phones,
			"websites": websites,
			"serviceContext": serviceContext
		}
	};
};

OrganizationService.prototype.addOrganization = function(parentOrganizationId, name, type, regionId, countryId, statusId, comments, site, serviceContext) {
	return {
		"/organization/add-organization": {
			"parentOrganizationId": parentOrganizationId,
			"name": name,
			"type": type,
			"regionId": regionId,
			"countryId": countryId,
			"statusId": statusId,
			"comments": comments,
			"site": site,
			"serviceContext": serviceContext
		}
	};
};

OrganizationService.prototype.addPasswordPolicyOrganizations = function(passwordPolicyId, organizationIds) {
	return {
		"/organization/add-password-policy-organizations": {
			"passwordPolicyId": passwordPolicyId,
			"organizationIds": organizationIds
		}
	};
};

OrganizationService.prototype.deleteLogo = function(organizationId) {
	return {
		"/organization/delete-logo": {
			"organizationId": organizationId
		}
	};
};

OrganizationService.prototype.deleteOrganization = function(organizationId) {
	return {
		"/organization/delete-organization": {
			"organizationId": organizationId
		}
	};
};

OrganizationService.prototype.getManageableOrganizations = function(actionId, max) {
	return {
		"/organization/get-manageable-organizations": {
			"actionId": actionId,
			"max": max
		}
	};
};

OrganizationService.prototype.getOrganization = function(organizationId) {
	return {
		"/organization/get-organization": {
			"organizationId": organizationId
		}
	};
};

OrganizationService.prototype.getOrganizationId = function(companyId, name) {
	return {
		"/organization/get-organization-id": {
			"companyId": companyId,
			"name": name
		}
	};
};

OrganizationService.prototype.getOrganizations = function(companyId, parentOrganizationId) {
	return {
		"/organization/get-organizations": {
			"companyId": companyId,
			"parentOrganizationId": parentOrganizationId
		}
	};
};

OrganizationService.prototype.getOrganizations = function(companyId, parentOrganizationId, start, end) {
	return {
		"/organization/get-organizations": {
			"companyId": companyId,
			"parentOrganizationId": parentOrganizationId,
			"start": start,
			"end": end
		}
	};
};

OrganizationService.prototype.getOrganizationsCount = function(companyId, parentOrganizationId) {
	return {
		"/organization/get-organizations-count": {
			"companyId": companyId,
			"parentOrganizationId": parentOrganizationId
		}
	};
};

OrganizationService.prototype.getUserOrganizations = function(userId) {
	return {
		"/organization/get-user-organizations": {
			"userId": userId
		}
	};
};

OrganizationService.prototype.setGroupOrganizations = function(groupId, organizationIds) {
	return {
		"/organization/set-group-organizations": {
			"groupId": groupId,
			"organizationIds": organizationIds
		}
	};
};

OrganizationService.prototype.unsetGroupOrganizations = function(groupId, organizationIds) {
	return {
		"/organization/unset-group-organizations": {
			"groupId": groupId,
			"organizationIds": organizationIds
		}
	};
};

OrganizationService.prototype.unsetPasswordPolicyOrganizations = function(passwordPolicyId, organizationIds) {
	return {
		"/organization/unset-password-policy-organizations": {
			"passwordPolicyId": passwordPolicyId,
			"organizationIds": organizationIds
		}
	};
};

OrganizationService.prototype.updateOrganization = function(organizationId, parentOrganizationId, name, type, regionId, countryId, statusId, comments, site, serviceContext) {
	return {
		"/organization/update-organization": {
			"organizationId": organizationId,
			"parentOrganizationId": parentOrganizationId,
			"name": name,
			"type": type,
			"regionId": regionId,
			"countryId": countryId,
			"statusId": statusId,
			"comments": comments,
			"site": site,
			"serviceContext": serviceContext
		}
	};
};

OrganizationService.prototype.updateOrganization = function(organizationId, parentOrganizationId, name, type, recursable, regionId, countryId, statusId, comments, site, serviceContext) {
	return {
		"/organization/update-organization": {
			"organizationId": organizationId,
			"parentOrganizationId": parentOrganizationId,
			"name": name,
			"type": type,
			"recursable": recursable,
			"regionId": regionId,
			"countryId": countryId,
			"statusId": statusId,
			"comments": comments,
			"site": site,
			"serviceContext": serviceContext
		}
	};
};

OrganizationService.prototype.updateOrganization = function(organizationId, parentOrganizationId, name, type, regionId, countryId, statusId, comments, site, addresses, emailAddresses, orgLabors, phones, websites, serviceContext) {
	return {
		"/organization/update-organization": {
			"organizationId": organizationId,
			"parentOrganizationId": parentOrganizationId,
			"name": name,
			"type": type,
			"regionId": regionId,
			"countryId": countryId,
			"statusId": statusId,
			"comments": comments,
			"site": site,
			"addresses": addresses,
			"emailAddresses": emailAddresses,
			"orgLabors": orgLabors,
			"phones": phones,
			"websites": websites,
			"serviceContext": serviceContext
		}
	};
};

OrganizationService.prototype.updateOrganization = function(organizationId, parentOrganizationId, name, type, recursable, regionId, countryId, statusId, comments, site, addresses, emailAddresses, orgLabors, phones, websites, serviceContext) {
	return {
		"/organization/update-organization": {
			"organizationId": organizationId,
			"parentOrganizationId": parentOrganizationId,
			"name": name,
			"type": type,
			"recursable": recursable,
			"regionId": regionId,
			"countryId": countryId,
			"statusId": statusId,
			"comments": comments,
			"site": site,
			"addresses": addresses,
			"emailAddresses": emailAddresses,
			"orgLabors": orgLabors,
			"phones": phones,
			"websites": websites,
			"serviceContext": serviceContext
		}
	};
};
