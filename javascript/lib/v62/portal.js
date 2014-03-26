function PortalService() {
}

PortalService.prototype.getAutoDeployDirectory = function() {
	return {
		"/portal/get-auto-deploy-directory": {
		}
	};
};

PortalService.prototype.getBuildNumber = function() {
	return {
		"/portal/get-build-number": {
		}
	};
};

PortalService.prototype.testAddClassNameAndTestTransactionPortletBar_PortalRollback = function(transactionPortletBarText) {
	return {
		"/portal/test-add-class-name-and-test-transaction-portlet-bar_-portal-rollback": {
			"transactionPortletBarText": transactionPortletBarText
		}
	};
};

PortalService.prototype.testAddClassNameAndTestTransactionPortletBar_PortletRollback = function(transactionPortletBarText) {
	return {
		"/portal/test-add-class-name-and-test-transaction-portlet-bar_-portlet-rollback": {
			"transactionPortletBarText": transactionPortletBarText
		}
	};
};

PortalService.prototype.testAddClassNameAndTestTransactionPortletBar_Success = function(transactionPortletBarText) {
	return {
		"/portal/test-add-class-name-and-test-transaction-portlet-bar_-success": {
			"transactionPortletBarText": transactionPortletBarText
		}
	};
};

PortalService.prototype.testAddClassName_Rollback = function(classNameValue) {
	return {
		"/portal/test-add-class-name_-rollback": {
			"classNameValue": classNameValue
		}
	};
};

PortalService.prototype.testAddClassName_Success = function(classNameValue) {
	return {
		"/portal/test-add-class-name_-success": {
			"classNameValue": classNameValue
		}
	};
};

PortalService.prototype.testAutoSyncHibernateSessionStateOnTxCreation = function() {
	return {
		"/portal/test-auto-sync-hibernate-session-state-on-tx-creation": {
		}
	};
};

PortalService.prototype.testDeleteClassName = function() {
	return {
		"/portal/test-delete-class-name": {
		}
	};
};

PortalService.prototype.testGetBuildNumber = function() {
	return {
		"/portal/test-get-build-number": {
		}
	};
};

PortalService.prototype.testGetUserId = function() {
	return {
		"/portal/test-get-user-id": {
		}
	};
};

PortalService.prototype.testHasClassName = function() {
	return {
		"/portal/test-has-class-name": {
		}
	};
};

module.exports = PortalService;