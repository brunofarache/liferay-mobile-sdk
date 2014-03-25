function LayoutRevisionService() {
}

LayoutRevisionService.prototype.addLayoutRevision = function(userId, layoutSetBranchId, layoutBranchId, parentLayoutRevisionId, head, plid, portletPreferencesPlid, privateLayout, name, title, description, keywords, robots, typeSettings, iconImage, iconImageId, themeId, colorSchemeId, wapThemeId, wapColorSchemeId, css, serviceContext) {
	return {
		"/layoutrevision/add-layout-revision": {
			"userId": userId,
			"layoutSetBranchId": layoutSetBranchId,
			"layoutBranchId": layoutBranchId,
			"parentLayoutRevisionId": parentLayoutRevisionId,
			"head": head,
			"plid": plid,
			"portletPreferencesPlid": portletPreferencesPlid,
			"privateLayout": privateLayout,
			"name": name,
			"title": title,
			"description": description,
			"keywords": keywords,
			"robots": robots,
			"typeSettings": typeSettings,
			"iconImage": iconImage,
			"iconImageId": iconImageId,
			"themeId": themeId,
			"colorSchemeId": colorSchemeId,
			"wapThemeId": wapThemeId,
			"wapColorSchemeId": wapColorSchemeId,
			"css": css,
			"serviceContext": serviceContext
		}
	};
};
