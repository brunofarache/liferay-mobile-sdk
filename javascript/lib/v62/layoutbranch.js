function LayoutBranchService() {
}

LayoutBranchService.prototype.addLayoutBranch = function(layoutRevisionId, name, description, master, serviceContext) {
	return {
		"/layoutbranch/add-layout-branch": {
			"layoutRevisionId": layoutRevisionId,
			"name": name,
			"description": description,
			"master": master,
			"serviceContext": serviceContext
		}
	};
};

LayoutBranchService.prototype.deleteLayoutBranch = function(layoutBranchId) {
	return {
		"/layoutbranch/delete-layout-branch": {
			"layoutBranchId": layoutBranchId
		}
	};
};

LayoutBranchService.prototype.updateLayoutBranch = function(layoutBranchId, name, description, serviceContext) {
	return {
		"/layoutbranch/update-layout-branch": {
			"layoutBranchId": layoutBranchId,
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

module.exports = LayoutBranchService;