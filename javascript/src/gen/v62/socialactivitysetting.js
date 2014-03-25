function SocialActivitySettingService() {
}

SocialActivitySettingService.prototype.getActivityDefinition = function(groupId, className, activityType) {
	return {
		"/socialactivitysetting/get-activity-definition": {
			"groupId": groupId,
			"className": className,
			"activityType": activityType
		}
	};
};

SocialActivitySettingService.prototype.getActivityDefinitions = function(groupId, className) {
	return {
		"/socialactivitysetting/get-activity-definitions": {
			"groupId": groupId,
			"className": className
		}
	};
};

SocialActivitySettingService.prototype.getActivitySettings = function(groupId) {
	return {
		"/socialactivitysetting/get-activity-settings": {
			"groupId": groupId
		}
	};
};

SocialActivitySettingService.prototype.getJsonActivityDefinitions = function(groupId, className) {
	return {
		"/socialactivitysetting/get-json-activity-definitions": {
			"groupId": groupId,
			"className": className
		}
	};
};

SocialActivitySettingService.prototype.updateActivitySetting = function(groupId, className, enabled) {
	return {
		"/socialactivitysetting/update-activity-setting": {
			"groupId": groupId,
			"className": className,
			"enabled": enabled
		}
	};
};

SocialActivitySettingService.prototype.updateActivitySetting = function(groupId, className, activityType, activityCounterDefinition) {
	return {
		"/socialactivitysetting/update-activity-setting": {
			"groupId": groupId,
			"className": className,
			"activityType": activityType,
			"activityCounterDefinition": activityCounterDefinition
		}
	};
};

SocialActivitySettingService.prototype.updateActivitySettings = function(groupId, className, activityType, activityCounterDefinitions) {
	return {
		"/socialactivitysetting/update-activity-settings": {
			"groupId": groupId,
			"className": className,
			"activityType": activityType,
			"activityCounterDefinitions": activityCounterDefinitions
		}
	};
};
