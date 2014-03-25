function LayoutService() {
}

LayoutService.prototype.addLayout = function(groupId, privateLayout, parentLayoutId, name, title, description, type, hidden, friendlyURL, serviceContext) {
	return {
		"/layout/add-layout": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"parentLayoutId": parentLayoutId,
			"name": name,
			"title": title,
			"description": description,
			"type": type,
			"hidden": hidden,
			"friendlyURL": friendlyURL,
			"serviceContext": serviceContext
		}
	};
};

LayoutService.prototype.addLayout = function(groupId, privateLayout, parentLayoutId, localeNamesMap, localeTitlesMap, descriptionMap, keywordsMap, robotsMap, type, hidden, friendlyURL, serviceContext) {
	return {
		"/layout/add-layout": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"parentLayoutId": parentLayoutId,
			"localeNamesMap": localeNamesMap,
			"localeTitlesMap": localeTitlesMap,
			"descriptionMap": descriptionMap,
			"keywordsMap": keywordsMap,
			"robotsMap": robotsMap,
			"type": type,
			"hidden": hidden,
			"friendlyURL": friendlyURL,
			"serviceContext": serviceContext
		}
	};
};

LayoutService.prototype.addLayout = function(groupId, privateLayout, parentLayoutId, localeNamesMap, localeTitlesMap, descriptionMap, keywordsMap, robotsMap, type, typeSettings, hidden, friendlyURLMap, serviceContext) {
	return {
		"/layout/add-layout": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"parentLayoutId": parentLayoutId,
			"localeNamesMap": localeNamesMap,
			"localeTitlesMap": localeTitlesMap,
			"descriptionMap": descriptionMap,
			"keywordsMap": keywordsMap,
			"robotsMap": robotsMap,
			"type": type,
			"typeSettings": typeSettings,
			"hidden": hidden,
			"friendlyURLMap": friendlyURLMap,
			"serviceContext": serviceContext
		}
	};
};

LayoutService.prototype.deleteLayout = function(plid, serviceContext) {
	return {
		"/layout/delete-layout": {
			"plid": plid,
			"serviceContext": serviceContext
		}
	};
};

LayoutService.prototype.deleteLayout = function(groupId, privateLayout, layoutId, serviceContext) {
	return {
		"/layout/delete-layout": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"layoutId": layoutId,
			"serviceContext": serviceContext
		}
	};
};

LayoutService.prototype.deleteTempFileEntry = function(groupId, fileName, tempFolderName) {
	return {
		"/layout/delete-temp-file-entry": {
			"groupId": groupId,
			"fileName": fileName,
			"tempFolderName": tempFolderName
		}
	};
};

LayoutService.prototype.exportLayouts = function(groupId, privateLayout, parameterMap, startDate, endDate) {
	return {
		"/layout/export-layouts": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"parameterMap": parameterMap,
			"startDate": startDate,
			"endDate": endDate
		}
	};
};

LayoutService.prototype.exportLayouts = function(groupId, privateLayout, layoutIds, parameterMap, startDate, endDate) {
	return {
		"/layout/export-layouts": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"layoutIds": layoutIds,
			"parameterMap": parameterMap,
			"startDate": startDate,
			"endDate": endDate
		}
	};
};

LayoutService.prototype.exportLayoutsAsFile = function(groupId, privateLayout, layoutIds, parameterMap, startDate, endDate) {
	return {
		"/layout/export-layouts-as-file": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"layoutIds": layoutIds,
			"parameterMap": parameterMap,
			"startDate": startDate,
			"endDate": endDate
		}
	};
};

LayoutService.prototype.exportLayoutsAsFileInBackground = function(taskName, groupId, privateLayout, layoutIds, parameterMap, startDate, endDate, fileName) {
	return {
		"/layout/export-layouts-as-file-in-background": {
			"taskName": taskName,
			"groupId": groupId,
			"privateLayout": privateLayout,
			"layoutIds": layoutIds,
			"parameterMap": parameterMap,
			"startDate": startDate,
			"endDate": endDate,
			"fileName": fileName
		}
	};
};

LayoutService.prototype.exportPortletInfo = function(companyId, portletId, parameterMap, startDate, endDate) {
	return {
		"/layout/export-portlet-info": {
			"companyId": companyId,
			"portletId": portletId,
			"parameterMap": parameterMap,
			"startDate": startDate,
			"endDate": endDate
		}
	};
};

LayoutService.prototype.exportPortletInfo = function(plid, groupId, portletId, parameterMap, startDate, endDate) {
	return {
		"/layout/export-portlet-info": {
			"plid": plid,
			"groupId": groupId,
			"portletId": portletId,
			"parameterMap": parameterMap,
			"startDate": startDate,
			"endDate": endDate
		}
	};
};

LayoutService.prototype.exportPortletInfoAsFile = function(portletId, parameterMap, startDate, endDate) {
	return {
		"/layout/export-portlet-info-as-file": {
			"portletId": portletId,
			"parameterMap": parameterMap,
			"startDate": startDate,
			"endDate": endDate
		}
	};
};

LayoutService.prototype.exportPortletInfoAsFile = function(plid, groupId, portletId, parameterMap, startDate, endDate) {
	return {
		"/layout/export-portlet-info-as-file": {
			"plid": plid,
			"groupId": groupId,
			"portletId": portletId,
			"parameterMap": parameterMap,
			"startDate": startDate,
			"endDate": endDate
		}
	};
};

LayoutService.prototype.exportPortletInfoAsFileInBackground = function(taskName, portletId, parameterMap, startDate, endDate, fileName) {
	return {
		"/layout/export-portlet-info-as-file-in-background": {
			"taskName": taskName,
			"portletId": portletId,
			"parameterMap": parameterMap,
			"startDate": startDate,
			"endDate": endDate,
			"fileName": fileName
		}
	};
};

LayoutService.prototype.exportPortletInfoAsFileInBackground = function(taskName, plid, groupId, portletId, parameterMap, startDate, endDate, fileName) {
	return {
		"/layout/export-portlet-info-as-file-in-background": {
			"taskName": taskName,
			"plid": plid,
			"groupId": groupId,
			"portletId": portletId,
			"parameterMap": parameterMap,
			"startDate": startDate,
			"endDate": endDate,
			"fileName": fileName
		}
	};
};

LayoutService.prototype.getAncestorLayouts = function(plid) {
	return {
		"/layout/get-ancestor-layouts": {
			"plid": plid
		}
	};
};

LayoutService.prototype.getDefaultPlid = function(groupId, scopeGroupId, portletId) {
	return {
		"/layout/get-default-plid": {
			"groupId": groupId,
			"scopeGroupId": scopeGroupId,
			"portletId": portletId
		}
	};
};

LayoutService.prototype.getDefaultPlid = function(groupId, scopeGroupId, privateLayout, portletId) {
	return {
		"/layout/get-default-plid": {
			"groupId": groupId,
			"scopeGroupId": scopeGroupId,
			"privateLayout": privateLayout,
			"portletId": portletId
		}
	};
};

LayoutService.prototype.getLayoutByUuidAndGroupId = function(uuid, groupId, privateLayout) {
	return {
		"/layout/get-layout-by-uuid-and-group-id": {
			"uuid": uuid,
			"groupId": groupId,
			"privateLayout": privateLayout
		}
	};
};

LayoutService.prototype.getLayoutName = function(groupId, privateLayout, layoutId, languageId) {
	return {
		"/layout/get-layout-name": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"layoutId": layoutId,
			"languageId": languageId
		}
	};
};

LayoutService.prototype.getLayoutReferences = function(companyId, portletId, preferencesKey, preferencesValue) {
	return {
		"/layout/get-layout-references": {
			"companyId": companyId,
			"portletId": portletId,
			"preferencesKey": preferencesKey,
			"preferencesValue": preferencesValue
		}
	};
};

LayoutService.prototype.getLayouts = function(groupId, privateLayout) {
	return {
		"/layout/get-layouts": {
			"groupId": groupId,
			"privateLayout": privateLayout
		}
	};
};

LayoutService.prototype.getLayouts = function(groupId, privateLayout, parentLayoutId) {
	return {
		"/layout/get-layouts": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"parentLayoutId": parentLayoutId
		}
	};
};

LayoutService.prototype.getLayouts = function(groupId, privateLayout, parentLayoutId, incomplete, start, end) {
	return {
		"/layout/get-layouts": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"parentLayoutId": parentLayoutId,
			"incomplete": incomplete,
			"start": start,
			"end": end
		}
	};
};

LayoutService.prototype.getTempFileEntryNames = function(groupId, tempFolderName) {
	return {
		"/layout/get-temp-file-entry-names": {
			"groupId": groupId,
			"tempFolderName": tempFolderName
		}
	};
};

LayoutService.prototype.importLayouts = function(groupId, privateLayout, parameterMap, bytes) {
	return {
		"/layout/import-layouts": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"parameterMap": parameterMap,
			"bytes": bytes
		}
	};
};

LayoutService.prototype.importLayouts = function(groupId, privateLayout, parameterMap, file) {
	return {
		"/layout/import-layouts": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"parameterMap": parameterMap,
			"file": file
		}
	};
};

LayoutService.prototype.importLayoutsInBackground = function(taskName, groupId, privateLayout, parameterMap, file) {
	return {
		"/layout/import-layouts-in-background": {
			"taskName": taskName,
			"groupId": groupId,
			"privateLayout": privateLayout,
			"parameterMap": parameterMap,
			"file": file
		}
	};
};

LayoutService.prototype.importPortletInfo = function(portletId, parameterMap, file) {
	return {
		"/layout/import-portlet-info": {
			"portletId": portletId,
			"parameterMap": parameterMap,
			"file": file
		}
	};
};

LayoutService.prototype.importPortletInfo = function(plid, groupId, portletId, parameterMap, file) {
	return {
		"/layout/import-portlet-info": {
			"plid": plid,
			"groupId": groupId,
			"portletId": portletId,
			"parameterMap": parameterMap,
			"file": file
		}
	};
};

LayoutService.prototype.importPortletInfoInBackground = function(taskName, portletId, parameterMap, file) {
	return {
		"/layout/import-portlet-info-in-background": {
			"taskName": taskName,
			"portletId": portletId,
			"parameterMap": parameterMap,
			"file": file
		}
	};
};

LayoutService.prototype.importPortletInfoInBackground = function(taskName, plid, groupId, portletId, parameterMap, file) {
	return {
		"/layout/import-portlet-info-in-background": {
			"taskName": taskName,
			"plid": plid,
			"groupId": groupId,
			"portletId": portletId,
			"parameterMap": parameterMap,
			"file": file
		}
	};
};

LayoutService.prototype.schedulePublishToLive = function(sourceGroupId, targetGroupId, privateLayout, layoutIdMap, parameterMap, scope, startDate, endDate, groupName, cronText, schedulerStartDate, schedulerEndDate, description) {
	return {
		"/layout/schedule-publish-to-live": {
			"sourceGroupId": sourceGroupId,
			"targetGroupId": targetGroupId,
			"privateLayout": privateLayout,
			"layoutIdMap": layoutIdMap,
			"parameterMap": parameterMap,
			"scope": scope,
			"startDate": startDate,
			"endDate": endDate,
			"groupName": groupName,
			"cronText": cronText,
			"schedulerStartDate": schedulerStartDate,
			"schedulerEndDate": schedulerEndDate,
			"description": description
		}
	};
};

LayoutService.prototype.schedulePublishToRemote = function(sourceGroupId, privateLayout, layoutIdMap, parameterMap, remoteAddress, remotePort, remotePathContext, secureConnection, remoteGroupId, remotePrivateLayout, startDate, endDate, groupName, cronText, schedulerStartDate, schedulerEndDate, description) {
	return {
		"/layout/schedule-publish-to-remote": {
			"sourceGroupId": sourceGroupId,
			"privateLayout": privateLayout,
			"layoutIdMap": layoutIdMap,
			"parameterMap": parameterMap,
			"remoteAddress": remoteAddress,
			"remotePort": remotePort,
			"remotePathContext": remotePathContext,
			"secureConnection": secureConnection,
			"remoteGroupId": remoteGroupId,
			"remotePrivateLayout": remotePrivateLayout,
			"startDate": startDate,
			"endDate": endDate,
			"groupName": groupName,
			"cronText": cronText,
			"schedulerStartDate": schedulerStartDate,
			"schedulerEndDate": schedulerEndDate,
			"description": description
		}
	};
};

LayoutService.prototype.setLayouts = function(groupId, privateLayout, parentLayoutId, layoutIds, serviceContext) {
	return {
		"/layout/set-layouts": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"parentLayoutId": parentLayoutId,
			"layoutIds": layoutIds,
			"serviceContext": serviceContext
		}
	};
};

LayoutService.prototype.unschedulePublishToLive = function(groupId, jobName, groupName) {
	return {
		"/layout/unschedule-publish-to-live": {
			"groupId": groupId,
			"jobName": jobName,
			"groupName": groupName
		}
	};
};

LayoutService.prototype.unschedulePublishToRemote = function(groupId, jobName, groupName) {
	return {
		"/layout/unschedule-publish-to-remote": {
			"groupId": groupId,
			"jobName": jobName,
			"groupName": groupName
		}
	};
};

LayoutService.prototype.updateLayout = function(groupId, privateLayout, layoutId, parentLayoutId, localeNamesMap, localeTitlesMap, descriptionMap, keywordsMap, robotsMap, type, hidden, friendlyURL, iconImage, iconBytes, serviceContext) {
	return {
		"/layout/update-layout": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"layoutId": layoutId,
			"parentLayoutId": parentLayoutId,
			"localeNamesMap": localeNamesMap,
			"localeTitlesMap": localeTitlesMap,
			"descriptionMap": descriptionMap,
			"keywordsMap": keywordsMap,
			"robotsMap": robotsMap,
			"type": type,
			"hidden": hidden,
			"friendlyURL": friendlyURL,
			"iconImage": iconImage,
			"iconBytes": iconBytes,
			"serviceContext": serviceContext
		}
	};
};

LayoutService.prototype.updateLayout = function(groupId, privateLayout, layoutId, parentLayoutId, localeNamesMap, localeTitlesMap, descriptionMap, keywordsMap, robotsMap, type, hidden, friendlyURLMap, iconImage, iconBytes, serviceContext) {
	return {
		"/layout/update-layout": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"layoutId": layoutId,
			"parentLayoutId": parentLayoutId,
			"localeNamesMap": localeNamesMap,
			"localeTitlesMap": localeTitlesMap,
			"descriptionMap": descriptionMap,
			"keywordsMap": keywordsMap,
			"robotsMap": robotsMap,
			"type": type,
			"hidden": hidden,
			"friendlyURLMap": friendlyURLMap,
			"iconImage": iconImage,
			"iconBytes": iconBytes,
			"serviceContext": serviceContext
		}
	};
};

LayoutService.prototype.updateLayout = function(groupId, privateLayout, layoutId, typeSettings) {
	return {
		"/layout/update-layout": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"layoutId": layoutId,
			"typeSettings": typeSettings
		}
	};
};

LayoutService.prototype.updateLookAndFeel = function(groupId, privateLayout, layoutId, themeId, colorSchemeId, css, wapTheme) {
	return {
		"/layout/update-look-and-feel": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"layoutId": layoutId,
			"themeId": themeId,
			"colorSchemeId": colorSchemeId,
			"css": css,
			"wapTheme": wapTheme
		}
	};
};

LayoutService.prototype.updateName = function(plid, name, languageId) {
	return {
		"/layout/update-name": {
			"plid": plid,
			"name": name,
			"languageId": languageId
		}
	};
};

LayoutService.prototype.updateName = function(groupId, privateLayout, layoutId, name, languageId) {
	return {
		"/layout/update-name": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"layoutId": layoutId,
			"name": name,
			"languageId": languageId
		}
	};
};

LayoutService.prototype.updateParentLayoutId = function(plid, parentPlid) {
	return {
		"/layout/update-parent-layout-id": {
			"plid": plid,
			"parentPlid": parentPlid
		}
	};
};

LayoutService.prototype.updateParentLayoutId = function(groupId, privateLayout, layoutId, parentLayoutId) {
	return {
		"/layout/update-parent-layout-id": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"layoutId": layoutId,
			"parentLayoutId": parentLayoutId
		}
	};
};

LayoutService.prototype.updatePriority = function(plid, priority) {
	return {
		"/layout/update-priority": {
			"plid": plid,
			"priority": priority
		}
	};
};

LayoutService.prototype.updatePriority = function(groupId, privateLayout, layoutId, priority) {
	return {
		"/layout/update-priority": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"layoutId": layoutId,
			"priority": priority
		}
	};
};

LayoutService.prototype.updatePriority = function(groupId, privateLayout, layoutId, nextLayoutId, previousLayoutId) {
	return {
		"/layout/update-priority": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"layoutId": layoutId,
			"nextLayoutId": nextLayoutId,
			"previousLayoutId": previousLayoutId
		}
	};
};

LayoutService.prototype.validateImportLayoutsFile = function(groupId, privateLayout, parameterMap, file) {
	return {
		"/layout/validate-import-layouts-file": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"parameterMap": parameterMap,
			"file": file
		}
	};
};

LayoutService.prototype.validateImportPortletInfo = function(plid, groupId, portletId, parameterMap, file) {
	return {
		"/layout/validate-import-portlet-info": {
			"plid": plid,
			"groupId": groupId,
			"portletId": portletId,
			"parameterMap": parameterMap,
			"file": file
		}
	};
};
