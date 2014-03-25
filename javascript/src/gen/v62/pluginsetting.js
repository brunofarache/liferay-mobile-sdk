function PluginSettingService() {
}

PluginSettingService.prototype.updatePluginSetting = function(companyId, pluginId, pluginType, roles, active) {
	return {
		"/pluginsetting/update-plugin-setting": {
			"companyId": companyId,
			"pluginId": pluginId,
			"pluginType": pluginType,
			"roles": roles,
			"active": active
		}
	};
};
