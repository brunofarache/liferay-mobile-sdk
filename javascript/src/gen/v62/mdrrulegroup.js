function MDRRuleGroupService() {
}

MDRRuleGroupService.prototype.addRuleGroup = function(groupId, nameMap, descriptionMap, serviceContext) {
	return {
		"/mdrrulegroup/add-rule-group": {
			"groupId": groupId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"serviceContext": serviceContext
		}
	};
};

MDRRuleGroupService.prototype.copyRuleGroup = function(ruleGroupId, groupId, serviceContext) {
	return {
		"/mdrrulegroup/copy-rule-group": {
			"ruleGroupId": ruleGroupId,
			"groupId": groupId,
			"serviceContext": serviceContext
		}
	};
};

MDRRuleGroupService.prototype.deleteRuleGroup = function(ruleGroupId) {
	return {
		"/mdrrulegroup/delete-rule-group": {
			"ruleGroupId": ruleGroupId
		}
	};
};

MDRRuleGroupService.prototype.fetchRuleGroup = function(ruleGroupId) {
	return {
		"/mdrrulegroup/fetch-rule-group": {
			"ruleGroupId": ruleGroupId
		}
	};
};

MDRRuleGroupService.prototype.getRuleGroup = function(ruleGroupId) {
	return {
		"/mdrrulegroup/get-rule-group": {
			"ruleGroupId": ruleGroupId
		}
	};
};

MDRRuleGroupService.prototype.updateRuleGroup = function(ruleGroupId, nameMap, descriptionMap, serviceContext) {
	return {
		"/mdrrulegroup/update-rule-group": {
			"ruleGroupId": ruleGroupId,
			"nameMap": nameMap,
			"descriptionMap": descriptionMap,
			"serviceContext": serviceContext
		}
	};
};
