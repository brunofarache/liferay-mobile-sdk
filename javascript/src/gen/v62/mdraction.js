function MDRActionService() {
}

MDRActionService.prototype.addAction = function(ruleGroupInstanceId, nameMap, descriptionMap, type, typeSettings, serviceContext) {
	return {
		"/mdraction/add-action": {
			"ruleGroupInstanceId": ruleGroupInstanceId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"type": type,
			"typeSettings": typeSettings,
			"serviceContext": serviceContext
		}
	};
};

MDRActionService.prototype.addAction = function(ruleGroupInstanceId, nameMap, descriptionMap, type, typeSettingsProperties, serviceContext) {
	return {
		"/mdraction/add-action": {
			"ruleGroupInstanceId": ruleGroupInstanceId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"type": type,
			"typeSettingsProperties": typeSettingsProperties,
			"serviceContext": serviceContext
		}
	};
};

MDRActionService.prototype.deleteAction = function(actionId) {
	return {
		"/mdraction/delete-action": {
			"actionId": actionId
		}
	};
};

MDRActionService.prototype.fetchAction = function(actionId) {
	return {
		"/mdraction/fetch-action": {
			"actionId": actionId
		}
	};
};

MDRActionService.prototype.getAction = function(actionId) {
	return {
		"/mdraction/get-action": {
			"actionId": actionId
		}
	};
};

MDRActionService.prototype.updateAction = function(actionId, nameMap, descriptionMap, type, typeSettings, serviceContext) {
	return {
		"/mdraction/update-action": {
			"actionId": actionId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"type": type,
			"typeSettings": typeSettings,
			"serviceContext": serviceContext
		}
	};
};

MDRActionService.prototype.updateAction = function(actionId, nameMap, descriptionMap, type, typeSettingsProperties, serviceContext) {
	return {
		"/mdraction/update-action": {
			"actionId": actionId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"type": type,
			"typeSettingsProperties": typeSettingsProperties,
			"serviceContext": serviceContext
		}
	};
};
