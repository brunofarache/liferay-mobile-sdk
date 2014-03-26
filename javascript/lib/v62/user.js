function UserService() {
}

UserService.prototype.addGroupUsers = function(groupId, userIds, serviceContext) {
	return {
		"/user/add-group-users": {
			"groupId": groupId,
			"userIds": userIds,
			"serviceContext": serviceContext
		}
	};
};

UserService.prototype.addOrganizationUsers = function(organizationId, userIds) {
	return {
		"/user/add-organization-users": {
			"organizationId": organizationId,
			"userIds": userIds
		}
	};
};

UserService.prototype.addPasswordPolicyUsers = function(passwordPolicyId, userIds) {
	return {
		"/user/add-password-policy-users": {
			"passwordPolicyId": passwordPolicyId,
			"userIds": userIds
		}
	};
};

UserService.prototype.addRoleUsers = function(roleId, userIds) {
	return {
		"/user/add-role-users": {
			"roleId": roleId,
			"userIds": userIds
		}
	};
};

UserService.prototype.addTeamUsers = function(teamId, userIds) {
	return {
		"/user/add-team-users": {
			"teamId": teamId,
			"userIds": userIds
		}
	};
};

UserService.prototype.addUser = function(companyId, autoPassword, password1, password2, autoScreenName, screenName, emailAddress, facebookId, openId, locale, firstName, middleName, lastName, prefixId, suffixId, male, birthdayMonth, birthdayDay, birthdayYear, jobTitle, groupIds, organizationIds, roleIds, userGroupIds, sendEmail, serviceContext) {
	return {
		"/user/add-user": {
			"companyId": companyId,
			"autoPassword": autoPassword,
			"password1": password1,
			"password2": password2,
			"autoScreenName": autoScreenName,
			"screenName": screenName,
			"emailAddress": emailAddress,
			"facebookId": facebookId,
			"openId": openId,
			"locale": locale,
			"firstName": firstName,
			"middleName": middleName,
			"lastName": lastName,
			"prefixId": prefixId,
			"suffixId": suffixId,
			"male": male,
			"birthdayMonth": birthdayMonth,
			"birthdayDay": birthdayDay,
			"birthdayYear": birthdayYear,
			"jobTitle": jobTitle,
			"groupIds": groupIds,
			"organizationIds": organizationIds,
			"roleIds": roleIds,
			"userGroupIds": userGroupIds,
			"sendEmail": sendEmail,
			"serviceContext": serviceContext
		}
	};
};

UserService.prototype.addUser = function(companyId, autoPassword, password1, password2, autoScreenName, screenName, emailAddress, facebookId, openId, locale, firstName, middleName, lastName, prefixId, suffixId, male, birthdayMonth, birthdayDay, birthdayYear, jobTitle, groupIds, organizationIds, roleIds, userGroupIds, addresses, emailAddresses, phones, websites, announcementsDelivers, sendEmail, serviceContext) {
	return {
		"/user/add-user": {
			"companyId": companyId,
			"autoPassword": autoPassword,
			"password1": password1,
			"password2": password2,
			"autoScreenName": autoScreenName,
			"screenName": screenName,
			"emailAddress": emailAddress,
			"facebookId": facebookId,
			"openId": openId,
			"locale": locale,
			"firstName": firstName,
			"middleName": middleName,
			"lastName": lastName,
			"prefixId": prefixId,
			"suffixId": suffixId,
			"male": male,
			"birthdayMonth": birthdayMonth,
			"birthdayDay": birthdayDay,
			"birthdayYear": birthdayYear,
			"jobTitle": jobTitle,
			"groupIds": groupIds,
			"organizationIds": organizationIds,
			"roleIds": roleIds,
			"userGroupIds": userGroupIds,
			"addresses": addresses,
			"emailAddresses": emailAddresses,
			"phones": phones,
			"websites": websites,
			"announcementsDelivers": announcementsDelivers,
			"sendEmail": sendEmail,
			"serviceContext": serviceContext
		}
	};
};

UserService.prototype.addUserGroupUsers = function(userGroupId, userIds) {
	return {
		"/user/add-user-group-users": {
			"userGroupId": userGroupId,
			"userIds": userIds
		}
	};
};

UserService.prototype.addUserWithWorkflow = function(companyId, autoPassword, password1, password2, autoScreenName, screenName, emailAddress, facebookId, openId, locale, firstName, middleName, lastName, prefixId, suffixId, male, birthdayMonth, birthdayDay, birthdayYear, jobTitle, groupIds, organizationIds, roleIds, userGroupIds, sendEmail, serviceContext) {
	return {
		"/user/add-user-with-workflow": {
			"companyId": companyId,
			"autoPassword": autoPassword,
			"password1": password1,
			"password2": password2,
			"autoScreenName": autoScreenName,
			"screenName": screenName,
			"emailAddress": emailAddress,
			"facebookId": facebookId,
			"openId": openId,
			"locale": locale,
			"firstName": firstName,
			"middleName": middleName,
			"lastName": lastName,
			"prefixId": prefixId,
			"suffixId": suffixId,
			"male": male,
			"birthdayMonth": birthdayMonth,
			"birthdayDay": birthdayDay,
			"birthdayYear": birthdayYear,
			"jobTitle": jobTitle,
			"groupIds": groupIds,
			"organizationIds": organizationIds,
			"roleIds": roleIds,
			"userGroupIds": userGroupIds,
			"sendEmail": sendEmail,
			"serviceContext": serviceContext
		}
	};
};

UserService.prototype.addUserWithWorkflow = function(companyId, autoPassword, password1, password2, autoScreenName, screenName, emailAddress, facebookId, openId, locale, firstName, middleName, lastName, prefixId, suffixId, male, birthdayMonth, birthdayDay, birthdayYear, jobTitle, groupIds, organizationIds, roleIds, userGroupIds, addresses, emailAddresses, phones, websites, announcementsDelivers, sendEmail, serviceContext) {
	return {
		"/user/add-user-with-workflow": {
			"companyId": companyId,
			"autoPassword": autoPassword,
			"password1": password1,
			"password2": password2,
			"autoScreenName": autoScreenName,
			"screenName": screenName,
			"emailAddress": emailAddress,
			"facebookId": facebookId,
			"openId": openId,
			"locale": locale,
			"firstName": firstName,
			"middleName": middleName,
			"lastName": lastName,
			"prefixId": prefixId,
			"suffixId": suffixId,
			"male": male,
			"birthdayMonth": birthdayMonth,
			"birthdayDay": birthdayDay,
			"birthdayYear": birthdayYear,
			"jobTitle": jobTitle,
			"groupIds": groupIds,
			"organizationIds": organizationIds,
			"roleIds": roleIds,
			"userGroupIds": userGroupIds,
			"addresses": addresses,
			"emailAddresses": emailAddresses,
			"phones": phones,
			"websites": websites,
			"announcementsDelivers": announcementsDelivers,
			"sendEmail": sendEmail,
			"serviceContext": serviceContext
		}
	};
};

UserService.prototype.deletePortrait = function(userId) {
	return {
		"/user/delete-portrait": {
			"userId": userId
		}
	};
};

UserService.prototype.deleteRoleUser = function(roleId, userId) {
	return {
		"/user/delete-role-user": {
			"roleId": roleId,
			"userId": userId
		}
	};
};

UserService.prototype.deleteUser = function(userId) {
	return {
		"/user/delete-user": {
			"userId": userId
		}
	};
};

UserService.prototype.getCompanyUsers = function(companyId, start, end) {
	return {
		"/user/get-company-users": {
			"companyId": companyId,
			"start": start,
			"end": end
		}
	};
};

UserService.prototype.getCompanyUsersCount = function(companyId) {
	return {
		"/user/get-company-users-count": {
			"companyId": companyId
		}
	};
};

UserService.prototype.getGroupUserIds = function(groupId) {
	return {
		"/user/get-group-user-ids": {
			"groupId": groupId
		}
	};
};

UserService.prototype.getGroupUsers = function(groupId) {
	return {
		"/user/get-group-users": {
			"groupId": groupId
		}
	};
};

UserService.prototype.getOrganizationUserIds = function(organizationId) {
	return {
		"/user/get-organization-user-ids": {
			"organizationId": organizationId
		}
	};
};

UserService.prototype.getOrganizationUsers = function(organizationId) {
	return {
		"/user/get-organization-users": {
			"organizationId": organizationId
		}
	};
};

UserService.prototype.getRoleUserIds = function(roleId) {
	return {
		"/user/get-role-user-ids": {
			"roleId": roleId
		}
	};
};

UserService.prototype.getUserByEmailAddress = function(companyId, emailAddress) {
	return {
		"/user/get-user-by-email-address": {
			"companyId": companyId,
			"emailAddress": emailAddress
		}
	};
};

UserService.prototype.getUserById = function(userId) {
	return {
		"/user/get-user-by-id": {
			"userId": userId
		}
	};
};

UserService.prototype.getUserByScreenName = function(companyId, screenName) {
	return {
		"/user/get-user-by-screen-name": {
			"companyId": companyId,
			"screenName": screenName
		}
	};
};

UserService.prototype.getUserGroupUsers = function(userGroupId) {
	return {
		"/user/get-user-group-users": {
			"userGroupId": userGroupId
		}
	};
};

UserService.prototype.getUserIdByEmailAddress = function(companyId, emailAddress) {
	return {
		"/user/get-user-id-by-email-address": {
			"companyId": companyId,
			"emailAddress": emailAddress
		}
	};
};

UserService.prototype.getUserIdByScreenName = function(companyId, screenName) {
	return {
		"/user/get-user-id-by-screen-name": {
			"companyId": companyId,
			"screenName": screenName
		}
	};
};

UserService.prototype.hasGroupUser = function(groupId, userId) {
	return {
		"/user/has-group-user": {
			"groupId": groupId,
			"userId": userId
		}
	};
};

UserService.prototype.hasRoleUser = function(roleId, userId) {
	return {
		"/user/has-role-user": {
			"roleId": roleId,
			"userId": userId
		}
	};
};

UserService.prototype.hasRoleUser = function(companyId, name, userId, inherited) {
	return {
		"/user/has-role-user": {
			"companyId": companyId,
			"name": name,
			"userId": userId,
			"inherited": inherited
		}
	};
};

UserService.prototype.setRoleUsers = function(roleId, userIds) {
	return {
		"/user/set-role-users": {
			"roleId": roleId,
			"userIds": userIds
		}
	};
};

UserService.prototype.setUserGroupUsers = function(userGroupId, userIds) {
	return {
		"/user/set-user-group-users": {
			"userGroupId": userGroupId,
			"userIds": userIds
		}
	};
};

UserService.prototype.unsetGroupTeamsUsers = function(groupId, userIds) {
	return {
		"/user/unset-group-teams-users": {
			"groupId": groupId,
			"userIds": userIds
		}
	};
};

UserService.prototype.unsetGroupUsers = function(groupId, userIds, serviceContext) {
	return {
		"/user/unset-group-users": {
			"groupId": groupId,
			"userIds": userIds,
			"serviceContext": serviceContext
		}
	};
};

UserService.prototype.unsetOrganizationUsers = function(organizationId, userIds) {
	return {
		"/user/unset-organization-users": {
			"organizationId": organizationId,
			"userIds": userIds
		}
	};
};

UserService.prototype.unsetPasswordPolicyUsers = function(passwordPolicyId, userIds) {
	return {
		"/user/unset-password-policy-users": {
			"passwordPolicyId": passwordPolicyId,
			"userIds": userIds
		}
	};
};

UserService.prototype.unsetRoleUsers = function(roleId, userIds) {
	return {
		"/user/unset-role-users": {
			"roleId": roleId,
			"userIds": userIds
		}
	};
};

UserService.prototype.unsetTeamUsers = function(teamId, userIds) {
	return {
		"/user/unset-team-users": {
			"teamId": teamId,
			"userIds": userIds
		}
	};
};

UserService.prototype.unsetUserGroupUsers = function(userGroupId, userIds) {
	return {
		"/user/unset-user-group-users": {
			"userGroupId": userGroupId,
			"userIds": userIds
		}
	};
};

UserService.prototype.updateAgreedToTermsOfUse = function(userId, agreedToTermsOfUse) {
	return {
		"/user/update-agreed-to-terms-of-use": {
			"userId": userId,
			"agreedToTermsOfUse": agreedToTermsOfUse
		}
	};
};

UserService.prototype.updateEmailAddress = function(userId, password, emailAddress1, emailAddress2, serviceContext) {
	return {
		"/user/update-email-address": {
			"userId": userId,
			"password": password,
			"emailAddress1": emailAddress1,
			"emailAddress2": emailAddress2,
			"serviceContext": serviceContext
		}
	};
};

UserService.prototype.updateIncompleteUser = function(companyId, autoPassword, password1, password2, autoScreenName, screenName, emailAddress, facebookId, openId, locale, firstName, middleName, lastName, prefixId, suffixId, male, birthdayMonth, birthdayDay, birthdayYear, jobTitle, updateUserInformation, sendEmail, serviceContext) {
	return {
		"/user/update-incomplete-user": {
			"companyId": companyId,
			"autoPassword": autoPassword,
			"password1": password1,
			"password2": password2,
			"autoScreenName": autoScreenName,
			"screenName": screenName,
			"emailAddress": emailAddress,
			"facebookId": facebookId,
			"openId": openId,
			"locale": locale,
			"firstName": firstName,
			"middleName": middleName,
			"lastName": lastName,
			"prefixId": prefixId,
			"suffixId": suffixId,
			"male": male,
			"birthdayMonth": birthdayMonth,
			"birthdayDay": birthdayDay,
			"birthdayYear": birthdayYear,
			"jobTitle": jobTitle,
			"updateUserInformation": updateUserInformation,
			"sendEmail": sendEmail,
			"serviceContext": serviceContext
		}
	};
};

UserService.prototype.updateLockoutById = function(userId, lockout) {
	return {
		"/user/update-lockout-by-id": {
			"userId": userId,
			"lockout": lockout
		}
	};
};

UserService.prototype.updateOpenId = function(userId, openId) {
	return {
		"/user/update-open-id": {
			"userId": userId,
			"openId": openId
		}
	};
};

UserService.prototype.updateOrganizations = function(userId, organizationIds, serviceContext) {
	return {
		"/user/update-organizations": {
			"userId": userId,
			"organizationIds": organizationIds,
			"serviceContext": serviceContext
		}
	};
};

UserService.prototype.updatePassword = function(userId, password1, password2, passwordReset) {
	return {
		"/user/update-password": {
			"userId": userId,
			"password1": password1,
			"password2": password2,
			"passwordReset": passwordReset
		}
	};
};

UserService.prototype.updatePortrait = function(userId, bytes) {
	return {
		"/user/update-portrait": {
			"userId": userId,
			"bytes": bytes
		}
	};
};

UserService.prototype.updateReminderQuery = function(userId, question, answer) {
	return {
		"/user/update-reminder-query": {
			"userId": userId,
			"question": question,
			"answer": answer
		}
	};
};

UserService.prototype.updateScreenName = function(userId, screenName) {
	return {
		"/user/update-screen-name": {
			"userId": userId,
			"screenName": screenName
		}
	};
};

UserService.prototype.updateStatus = function(userId, status) {
	return {
		"/user/update-status": {
			"userId": userId,
			"status": status
		}
	};
};

UserService.prototype.updateUser = function(userId, oldPassword, newPassword1, newPassword2, passwordReset, reminderQueryQuestion, reminderQueryAnswer, screenName, emailAddress, facebookId, openId, languageId, timeZoneId, greeting, comments, firstName, middleName, lastName, prefixId, suffixId, male, birthdayMonth, birthdayDay, birthdayYear, smsSn, aimSn, facebookSn, icqSn, jabberSn, msnSn, mySpaceSn, skypeSn, twitterSn, ymSn, jobTitle, groupIds, organizationIds, roleIds, userGroupRoles, userGroupIds, serviceContext) {
	return {
		"/user/update-user": {
			"userId": userId,
			"oldPassword": oldPassword,
			"newPassword1": newPassword1,
			"newPassword2": newPassword2,
			"passwordReset": passwordReset,
			"reminderQueryQuestion": reminderQueryQuestion,
			"reminderQueryAnswer": reminderQueryAnswer,
			"screenName": screenName,
			"emailAddress": emailAddress,
			"facebookId": facebookId,
			"openId": openId,
			"languageId": languageId,
			"timeZoneId": timeZoneId,
			"greeting": greeting,
			"comments": comments,
			"firstName": firstName,
			"middleName": middleName,
			"lastName": lastName,
			"prefixId": prefixId,
			"suffixId": suffixId,
			"male": male,
			"birthdayMonth": birthdayMonth,
			"birthdayDay": birthdayDay,
			"birthdayYear": birthdayYear,
			"smsSn": smsSn,
			"aimSn": aimSn,
			"facebookSn": facebookSn,
			"icqSn": icqSn,
			"jabberSn": jabberSn,
			"msnSn": msnSn,
			"mySpaceSn": mySpaceSn,
			"skypeSn": skypeSn,
			"twitterSn": twitterSn,
			"ymSn": ymSn,
			"jobTitle": jobTitle,
			"groupIds": groupIds,
			"organizationIds": organizationIds,
			"roleIds": roleIds,
			"userGroupRoles": userGroupRoles,
			"userGroupIds": userGroupIds,
			"serviceContext": serviceContext
		}
	};
};

UserService.prototype.updateUser = function(userId, oldPassword, newPassword1, newPassword2, passwordReset, reminderQueryQuestion, reminderQueryAnswer, screenName, emailAddress, facebookId, openId, languageId, timeZoneId, greeting, comments, firstName, middleName, lastName, prefixId, suffixId, male, birthdayMonth, birthdayDay, birthdayYear, smsSn, aimSn, facebookSn, icqSn, jabberSn, msnSn, mySpaceSn, skypeSn, twitterSn, ymSn, jobTitle, groupIds, organizationIds, roleIds, userGroupRoles, userGroupIds, addresses, emailAddresses, phones, websites, announcementsDelivers, serviceContext) {
	return {
		"/user/update-user": {
			"userId": userId,
			"oldPassword": oldPassword,
			"newPassword1": newPassword1,
			"newPassword2": newPassword2,
			"passwordReset": passwordReset,
			"reminderQueryQuestion": reminderQueryQuestion,
			"reminderQueryAnswer": reminderQueryAnswer,
			"screenName": screenName,
			"emailAddress": emailAddress,
			"facebookId": facebookId,
			"openId": openId,
			"languageId": languageId,
			"timeZoneId": timeZoneId,
			"greeting": greeting,
			"comments": comments,
			"firstName": firstName,
			"middleName": middleName,
			"lastName": lastName,
			"prefixId": prefixId,
			"suffixId": suffixId,
			"male": male,
			"birthdayMonth": birthdayMonth,
			"birthdayDay": birthdayDay,
			"birthdayYear": birthdayYear,
			"smsSn": smsSn,
			"aimSn": aimSn,
			"facebookSn": facebookSn,
			"icqSn": icqSn,
			"jabberSn": jabberSn,
			"msnSn": msnSn,
			"mySpaceSn": mySpaceSn,
			"skypeSn": skypeSn,
			"twitterSn": twitterSn,
			"ymSn": ymSn,
			"jobTitle": jobTitle,
			"groupIds": groupIds,
			"organizationIds": organizationIds,
			"roleIds": roleIds,
			"userGroupRoles": userGroupRoles,
			"userGroupIds": userGroupIds,
			"addresses": addresses,
			"emailAddresses": emailAddresses,
			"phones": phones,
			"websites": websites,
			"announcementsDelivers": announcementsDelivers,
			"serviceContext": serviceContext
		}
	};
};

module.exports = UserService;