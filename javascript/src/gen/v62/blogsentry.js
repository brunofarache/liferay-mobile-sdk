function BlogsEntryService() {
}

BlogsEntryService.prototype.deleteEntry = function(entryId) {
	return {
		"/blogsentry/delete-entry": {
			"entryId": entryId
		}
	};
};

BlogsEntryService.prototype.getCompanyEntries = function(companyId, displayDate, status, max) {
	return {
		"/blogsentry/get-company-entries": {
			"companyId": companyId,
			"displayDate": displayDate,
			"status": status,
			"max": max
		}
	};
};

BlogsEntryService.prototype.getCompanyEntriesRss = function(companyId, displayDate, status, max, type, version, displayStyle, feedURL, entryURL, themeDisplay) {
	return {
		"/blogsentry/get-company-entries-rss": {
			"companyId": companyId,
			"displayDate": displayDate,
			"status": status,
			"max": max,
			"type": type,
			"version": version,
			"displayStyle": displayStyle,
			"feedURL": feedURL,
			"entryURL": entryURL,
			"themeDisplay": themeDisplay
		}
	};
};

BlogsEntryService.prototype.getEntry = function(entryId) {
	return {
		"/blogsentry/get-entry": {
			"entryId": entryId
		}
	};
};

BlogsEntryService.prototype.getEntry = function(groupId, urlTitle) {
	return {
		"/blogsentry/get-entry": {
			"groupId": groupId,
			"urlTitle": urlTitle
		}
	};
};

BlogsEntryService.prototype.getGroupEntries = function(groupId, status, max) {
	return {
		"/blogsentry/get-group-entries": {
			"groupId": groupId,
			"status": status,
			"max": max
		}
	};
};

BlogsEntryService.prototype.getGroupEntries = function(groupId, displayDate, status, max) {
	return {
		"/blogsentry/get-group-entries": {
			"groupId": groupId,
			"displayDate": displayDate,
			"status": status,
			"max": max
		}
	};
};

BlogsEntryService.prototype.getGroupEntries = function(groupId, status, start, end) {
	return {
		"/blogsentry/get-group-entries": {
			"groupId": groupId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

BlogsEntryService.prototype.getGroupEntries = function(groupId, displayDate, status, start, end) {
	return {
		"/blogsentry/get-group-entries": {
			"groupId": groupId,
			"displayDate": displayDate,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

BlogsEntryService.prototype.getGroupEntriesCount = function(groupId, status) {
	return {
		"/blogsentry/get-group-entries-count": {
			"groupId": groupId,
			"status": status
		}
	};
};

BlogsEntryService.prototype.getGroupEntriesCount = function(groupId, displayDate, status) {
	return {
		"/blogsentry/get-group-entries-count": {
			"groupId": groupId,
			"displayDate": displayDate,
			"status": status
		}
	};
};

BlogsEntryService.prototype.getGroupEntriesRss = function(groupId, displayDate, status, max, type, version, displayStyle, feedURL, entryURL, themeDisplay) {
	return {
		"/blogsentry/get-group-entries-rss": {
			"groupId": groupId,
			"displayDate": displayDate,
			"status": status,
			"max": max,
			"type": type,
			"version": version,
			"displayStyle": displayStyle,
			"feedURL": feedURL,
			"entryURL": entryURL,
			"themeDisplay": themeDisplay
		}
	};
};

BlogsEntryService.prototype.getGroupsEntries = function(companyId, groupId, displayDate, status, max) {
	return {
		"/blogsentry/get-groups-entries": {
			"companyId": companyId,
			"groupId": groupId,
			"displayDate": displayDate,
			"status": status,
			"max": max
		}
	};
};

BlogsEntryService.prototype.getOrganizationEntries = function(organizationId, displayDate, status, max) {
	return {
		"/blogsentry/get-organization-entries": {
			"organizationId": organizationId,
			"displayDate": displayDate,
			"status": status,
			"max": max
		}
	};
};

BlogsEntryService.prototype.getOrganizationEntriesRss = function(organizationId, displayDate, status, max, type, version, displayStyle, feedURL, entryURL, themeDisplay) {
	return {
		"/blogsentry/get-organization-entries-rss": {
			"organizationId": organizationId,
			"displayDate": displayDate,
			"status": status,
			"max": max,
			"type": type,
			"version": version,
			"displayStyle": displayStyle,
			"feedURL": feedURL,
			"entryURL": entryURL,
			"themeDisplay": themeDisplay
		}
	};
};

BlogsEntryService.prototype.moveEntryToTrash = function(entryId) {
	return {
		"/blogsentry/move-entry-to-trash": {
			"entryId": entryId
		}
	};
};

BlogsEntryService.prototype.restoreEntryFromTrash = function(entryId) {
	return {
		"/blogsentry/restore-entry-from-trash": {
			"entryId": entryId
		}
	};
};

BlogsEntryService.prototype.subscribe = function(groupId) {
	return {
		"/blogsentry/subscribe": {
			"groupId": groupId
		}
	};
};

BlogsEntryService.prototype.unsubscribe = function(groupId) {
	return {
		"/blogsentry/unsubscribe": {
			"groupId": groupId
		}
	};
};
