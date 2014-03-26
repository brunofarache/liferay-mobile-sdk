function MDRRuleService() {
}

MDRRuleService.prototype.addRule = function(ruleGroupId, nameMap, descriptionMap, type, typeSettings, serviceContext) {
	return {
		"/mdrrule/add-rule": {
			"ruleGroupId": ruleGroupId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"type": type,
			"typeSettings": typeSettings,
			"serviceContext": serviceContext
		}
	};
};

MDRRuleService.prototype.deleteRule = function(ruleId) {
	return {
		"/mdrrule/delete-rule": {
			"ruleId": ruleId
		}
	};
};

MDRRuleService.prototype.fetchRule = function(ruleId) {
	return {
		"/mdrrule/fetch-rule": {
			"ruleId": ruleId
		}
	};
};

MDRRuleService.prototype.getRule = function(ruleId) {
	return {
		"/mdrrule/get-rule": {
			"ruleId": ruleId
		}
	};
};

MDRRuleService.prototype.updateRule = function(ruleId, nameMap, descriptionMap, type, typeSettings, serviceContext) {
	return {
		"/mdrrule/update-rule": {
			"ruleId": ruleId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"type": type,
			"typeSettings": typeSettings,
			"serviceContext": serviceContext
		}
	};
};

MDRRuleService.prototype.updateRule = function(ruleId, nameMap, descriptionMap, type, typeSettingsProperties, serviceContext) {
	return {
		"/mdrrule/update-rule": {
			"ruleId": ruleId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"type": type,
			"typeSettingsProperties": typeSettingsProperties,
			"serviceContext": serviceContext
		}
	};
};

module.exports = MDRRuleService;