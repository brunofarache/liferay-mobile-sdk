function MembershipRequestService() {
}

MembershipRequestService.prototype.addMembershipRequest = function(groupId, comments, serviceContext) {
	return {
		"/membershiprequest/add-membership-request": {
			"groupId": groupId,
			"comments": comments,
			"serviceContext": serviceContext
		}
	};
};

MembershipRequestService.prototype.deleteMembershipRequests = function(groupId, statusId) {
	return {
		"/membershiprequest/delete-membership-requests": {
			"groupId": groupId,
			"statusId": statusId
		}
	};
};

MembershipRequestService.prototype.getMembershipRequest = function(membershipRequestId) {
	return {
		"/membershiprequest/get-membership-request": {
			"membershipRequestId": membershipRequestId
		}
	};
};

MembershipRequestService.prototype.updateStatus = function(membershipRequestId, reviewComments, statusId, serviceContext) {
	return {
		"/membershiprequest/update-status": {
			"membershipRequestId": membershipRequestId,
			"reviewComments": reviewComments,
			"statusId": statusId,
			"serviceContext": serviceContext
		}
	};
};
