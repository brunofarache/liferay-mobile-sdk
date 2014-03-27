function SocialActivityService() {
}

SocialActivityService.prototype.getActivities = function(className, start, end) {
	return {
		"/socialactivity/get-activities": {
			"className": className,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getActivities1 = function(classNameId, start, end) {
	return {
		"/socialactivity/get-activities": {
			"classNameId": classNameId,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getActivities = function(mirrorActivityId, className, classPK, start, end) {
	return {
		"/socialactivity/get-activities": {
			"mirrorActivityId": mirrorActivityId,
			"className": className,
			"classPK": classPK,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getActivities1 = function(mirrorActivityId, classNameId, classPK, start, end) {
	return {
		"/socialactivity/get-activities": {
			"mirrorActivityId": mirrorActivityId,
			"classNameId": classNameId,
			"classPK": classPK,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getActivitiesCount = function(className) {
	return {
		"/socialactivity/get-activities-count": {
			"className": className
		}
	};
};

SocialActivityService.prototype.getActivitiesCount1 = function(classNameId) {
	return {
		"/socialactivity/get-activities-count": {
			"classNameId": classNameId
		}
	};
};

SocialActivityService.prototype.getActivitiesCount = function(mirrorActivityId, className, classPK) {
	return {
		"/socialactivity/get-activities-count": {
			"mirrorActivityId": mirrorActivityId,
			"className": className,
			"classPK": classPK
		}
	};
};

SocialActivityService.prototype.getActivitiesCount1 = function(mirrorActivityId, classNameId, classPK) {
	return {
		"/socialactivity/get-activities-count": {
			"mirrorActivityId": mirrorActivityId,
			"classNameId": classNameId,
			"classPK": classPK
		}
	};
};

SocialActivityService.prototype.getActivity = function(activityId) {
	return {
		"/socialactivity/get-activity": {
			"activityId": activityId
		}
	};
};

SocialActivityService.prototype.getActivitySetActivities = function(activitySetId, start, end) {
	return {
		"/socialactivity/get-activity-set-activities": {
			"activitySetId": activitySetId,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getGroupActivities = function(groupId, start, end) {
	return {
		"/socialactivity/get-group-activities": {
			"groupId": groupId,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getGroupActivitiesCount = function(groupId) {
	return {
		"/socialactivity/get-group-activities-count": {
			"groupId": groupId
		}
	};
};

SocialActivityService.prototype.getGroupUsersActivities = function(groupId, start, end) {
	return {
		"/socialactivity/get-group-users-activities": {
			"groupId": groupId,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getGroupUsersActivitiesCount = function(groupId) {
	return {
		"/socialactivity/get-group-users-activities-count": {
			"groupId": groupId
		}
	};
};

SocialActivityService.prototype.getMirrorActivity = function(mirrorActivityId) {
	return {
		"/socialactivity/get-mirror-activity": {
			"mirrorActivityId": mirrorActivityId
		}
	};
};

SocialActivityService.prototype.getOrganizationActivities = function(organizationId, start, end) {
	return {
		"/socialactivity/get-organization-activities": {
			"organizationId": organizationId,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getOrganizationActivitiesCount = function(organizationId) {
	return {
		"/socialactivity/get-organization-activities-count": {
			"organizationId": organizationId
		}
	};
};

SocialActivityService.prototype.getOrganizationUsersActivities = function(organizationId, start, end) {
	return {
		"/socialactivity/get-organization-users-activities": {
			"organizationId": organizationId,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getOrganizationUsersActivitiesCount = function(organizationId) {
	return {
		"/socialactivity/get-organization-users-activities-count": {
			"organizationId": organizationId
		}
	};
};

SocialActivityService.prototype.getRelationActivities = function(userId, start, end) {
	return {
		"/socialactivity/get-relation-activities": {
			"userId": userId,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getRelationActivities = function(userId, type, start, end) {
	return {
		"/socialactivity/get-relation-activities": {
			"userId": userId,
			"type": type,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getRelationActivitiesCount = function(userId) {
	return {
		"/socialactivity/get-relation-activities-count": {
			"userId": userId
		}
	};
};

SocialActivityService.prototype.getRelationActivitiesCount = function(userId, type) {
	return {
		"/socialactivity/get-relation-activities-count": {
			"userId": userId,
			"type": type
		}
	};
};

SocialActivityService.prototype.getUserActivities = function(userId, start, end) {
	return {
		"/socialactivity/get-user-activities": {
			"userId": userId,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getUserActivitiesCount = function(userId) {
	return {
		"/socialactivity/get-user-activities-count": {
			"userId": userId
		}
	};
};

SocialActivityService.prototype.getUserGroupsActivities = function(userId, start, end) {
	return {
		"/socialactivity/get-user-groups-activities": {
			"userId": userId,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getUserGroupsActivitiesCount = function(userId) {
	return {
		"/socialactivity/get-user-groups-activities-count": {
			"userId": userId
		}
	};
};

SocialActivityService.prototype.getUserGroupsAndOrganizationsActivities = function(userId, start, end) {
	return {
		"/socialactivity/get-user-groups-and-organizations-activities": {
			"userId": userId,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getUserGroupsAndOrganizationsActivitiesCount = function(userId) {
	return {
		"/socialactivity/get-user-groups-and-organizations-activities-count": {
			"userId": userId
		}
	};
};

SocialActivityService.prototype.getUserOrganizationsActivities = function(userId, start, end) {
	return {
		"/socialactivity/get-user-organizations-activities": {
			"userId": userId,
			"start": start,
			"end": end
		}
	};
};

SocialActivityService.prototype.getUserOrganizationsActivitiesCount = function(userId) {
	return {
		"/socialactivity/get-user-organizations-activities-count": {
			"userId": userId
		}
	};
};

module.exports = SocialActivityService;