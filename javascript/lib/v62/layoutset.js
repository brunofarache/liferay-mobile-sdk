function LayoutSetService() {
}

LayoutSetService.prototype.updateLayoutSetPrototypeLinkEnabled = function(groupId, privateLayout, layoutSetPrototypeLinkEnabled, layoutSetPrototypeUuid) {
	return {
		"/layoutset/update-layout-set-prototype-link-enabled": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"layoutSetPrototypeLinkEnabled": layoutSetPrototypeLinkEnabled,
			"layoutSetPrototypeUuid": layoutSetPrototypeUuid
		}
	};
};

LayoutSetService.prototype.updateLogo = function(groupId, privateLayout, logo, bytes) {
	return {
		"/layoutset/update-logo": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"logo": logo,
			"bytes": bytes
		}
	};
};

LayoutSetService.prototype.updateLogo1 = function(groupId, privateLayout, logo, file) {
	return {
		"/layoutset/update-logo": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"logo": logo,
			"file": file
		}
	};
};

LayoutSetService.prototype.updateLookAndFeel = function(groupId, privateLayout, themeId, colorSchemeId, css, wapTheme) {
	return {
		"/layoutset/update-look-and-feel": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"themeId": themeId,
			"colorSchemeId": colorSchemeId,
			"css": css,
			"wapTheme": wapTheme
		}
	};
};

LayoutSetService.prototype.updateSettings = function(groupId, privateLayout, settings) {
	return {
		"/layoutset/update-settings": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"settings": settings
		}
	};
};

LayoutSetService.prototype.updateVirtualHost = function(groupId, privateLayout, virtualHost) {
	return {
		"/layoutset/update-virtual-host": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"virtualHost": virtualHost
		}
	};
};

module.exports = LayoutSetService;