function PortletPreferencesService() {
}

PortletPreferencesService.prototype.deleteArchivedPreferences = function(portletItemId) {
	return {
		"/portletpreferences/delete-archived-preferences": {
			"portletItemId": portletItemId
		}
	};
};

PortletPreferencesService.prototype.restoreArchivedPreferences = function(groupId, layout, portletId, portletItem, preferences) {
	return {
		"/portletpreferences/restore-archived-preferences": {
			"groupId": groupId,
			"layout": layout,
			"portletId": portletId,
			"portletItem": portletItem,
			"preferences": preferences
		}
	};
};

PortletPreferencesService.prototype.restoreArchivedPreferences = function(groupId, layout, portletId, portletItemId, preferences) {
	return {
		"/portletpreferences/restore-archived-preferences": {
			"groupId": groupId,
			"layout": layout,
			"portletId": portletId,
			"portletItemId": portletItemId,
			"preferences": preferences
		}
	};
};

PortletPreferencesService.prototype.restoreArchivedPreferences = function(groupId, name, layout, portletId, preferences) {
	return {
		"/portletpreferences/restore-archived-preferences": {
			"groupId": groupId,
			"name": name,
			"layout": layout,
			"portletId": portletId,
			"preferences": preferences
		}
	};
};

PortletPreferencesService.prototype.updateArchivePreferences = function(userId, groupId, name, portletId, preferences) {
	return {
		"/portletpreferences/update-archive-preferences": {
			"userId": userId,
			"groupId": groupId,
			"name": name,
			"portletId": portletId,
			"preferences": preferences
		}
	};
};
