function LayoutSetBranchService() {
}

LayoutSetBranchService.prototype.addLayoutSetBranch = function(groupId, privateLayout, name, description, master, copyLayoutSetBranchId, serviceContext) {
	return {
		"/layoutsetbranch/add-layout-set-branch": {
			"groupId": groupId,
			"privateLayout": privateLayout,
			"name": name,
			"description": description,
			"master": master,
			"copyLayoutSetBranchId": copyLayoutSetBranchId,
			"serviceContext": serviceContext
		}
	};
};

LayoutSetBranchService.prototype.deleteLayoutSetBranch = function(layoutSetBranchId) {
	return {
		"/layoutsetbranch/delete-layout-set-branch": {
			"layoutSetBranchId": layoutSetBranchId
		}
	};
};

LayoutSetBranchService.prototype.getLayoutSetBranches = function(groupId, privateLayout) {
	return {
		"/layoutsetbranch/get-layout-set-branches": {
			"groupId": groupId,
			"privateLayout": privateLayout
		}
	};
};

LayoutSetBranchService.prototype.mergeLayoutSetBranch = function(layoutSetBranchId, mergeLayoutSetBranchId, serviceContext) {
	return {
		"/layoutsetbranch/merge-layout-set-branch": {
			"layoutSetBranchId": layoutSetBranchId,
			"mergeLayoutSetBranchId": mergeLayoutSetBranchId,
			"serviceContext": serviceContext
		}
	};
};

LayoutSetBranchService.prototype.updateLayoutSetBranch = function(groupId, layoutSetBranchId, name, description, serviceContext) {
	return {
		"/layoutsetbranch/update-layout-set-branch": {
			"groupId": groupId,
			"layoutSetBranchId": layoutSetBranchId,
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};
