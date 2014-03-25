function MDRRuleGroupInstanceService() {
}

MDRRuleGroupInstanceService.prototype.addRuleGroupInstance = function(groupId, className, classPK, ruleGroupId, serviceContext) {
	return {
		"/mdrrulegroupinstance/add-rule-group-instance": {
			"groupId": groupId,
			"className": className,
			"classPK": classPK,
			"ruleGroupId": ruleGroupId,
			"serviceContext": serviceContext
		}
	};
};

MDRRuleGroupInstanceService.prototype.addRuleGroupInstance = function(groupId, className, classPK, ruleGroupId, priority, serviceContext) {
	return {
		"/mdrrulegroupinstance/add-rule-group-instance": {
			"groupId": groupId,
			"className": className,
			"classPK": classPK,
			"ruleGroupId": ruleGroupId,
			"priority": priority,
			"serviceContext": serviceContext
		}
	};
};

MDRRuleGroupInstanceService.prototype.deleteRuleGroupInstance = function(ruleGroupInstanceId) {
	return {
		"/mdrrulegroupinstance/delete-rule-group-instance": {
			"ruleGroupInstanceId": ruleGroupInstanceId
		}
	};
};

MDRRuleGroupInstanceService.prototype.getRuleGroupInstances = function(className, classPK, start, end, orderByComparator) {
	return {
		"/mdrrulegroupinstance/get-rule-group-instances": {
			"className": className,
			"classPK": classPK,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

MDRRuleGroupInstanceService.prototype.getRuleGroupInstancesCount = function(className, classPK) {
	return {
		"/mdrrulegroupinstance/get-rule-group-instances-count": {
			"className": className,
			"classPK": classPK
		}
	};
};

MDRRuleGroupInstanceService.prototype.updateRuleGroupInstance = function(ruleGroupInstanceId, priority) {
	return {
		"/mdrrulegroupinstance/update-rule-group-instance": {
			"ruleGroupInstanceId": ruleGroupInstanceId,
			"priority": priority
		}
	};
};
