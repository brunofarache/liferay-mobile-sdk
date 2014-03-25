function MBThreadService() {
}

MBThreadService.prototype.deleteThread = function(threadId) {
	return {
		"/mbthread/delete-thread": {
			"threadId": threadId
		}
	};
};

MBThreadService.prototype.getGroupThreads = function(groupId, userId, status, start, end) {
	return {
		"/mbthread/get-group-threads": {
			"groupId": groupId,
			"userId": userId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

MBThreadService.prototype.getGroupThreads = function(groupId, userId, modifiedDate, status, start, end) {
	return {
		"/mbthread/get-group-threads": {
			"groupId": groupId,
			"userId": userId,
			"modifiedDate": modifiedDate,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

MBThreadService.prototype.getGroupThreads = function(groupId, userId, status, subscribed, start, end) {
	return {
		"/mbthread/get-group-threads": {
			"groupId": groupId,
			"userId": userId,
			"status": status,
			"subscribed": subscribed,
			"start": start,
			"end": end
		}
	};
};

MBThreadService.prototype.getGroupThreads = function(groupId, userId, status, subscribed, includeAnonymous, start, end) {
	return {
		"/mbthread/get-group-threads": {
			"groupId": groupId,
			"userId": userId,
			"status": status,
			"subscribed": subscribed,
			"includeAnonymous": includeAnonymous,
			"start": start,
			"end": end
		}
	};
};

MBThreadService.prototype.getGroupThreadsCount = function(groupId, userId, status) {
	return {
		"/mbthread/get-group-threads-count": {
			"groupId": groupId,
			"userId": userId,
			"status": status
		}
	};
};

MBThreadService.prototype.getGroupThreadsCount = function(groupId, userId, modifiedDate, status) {
	return {
		"/mbthread/get-group-threads-count": {
			"groupId": groupId,
			"userId": userId,
			"modifiedDate": modifiedDate,
			"status": status
		}
	};
};

MBThreadService.prototype.getGroupThreadsCount = function(groupId, userId, status, subscribed) {
	return {
		"/mbthread/get-group-threads-count": {
			"groupId": groupId,
			"userId": userId,
			"status": status,
			"subscribed": subscribed
		}
	};
};

MBThreadService.prototype.getGroupThreadsCount = function(groupId, userId, status, subscribed, includeAnonymous) {
	return {
		"/mbthread/get-group-threads-count": {
			"groupId": groupId,
			"userId": userId,
			"status": status,
			"subscribed": subscribed,
			"includeAnonymous": includeAnonymous
		}
	};
};

MBThreadService.prototype.getThreads = function(groupId, categoryId, status, start, end) {
	return {
		"/mbthread/get-threads": {
			"groupId": groupId,
			"categoryId": categoryId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

MBThreadService.prototype.getThreadsCount = function(groupId, categoryId, status) {
	return {
		"/mbthread/get-threads-count": {
			"groupId": groupId,
			"categoryId": categoryId,
			"status": status
		}
	};
};

MBThreadService.prototype.lockThread = function(threadId) {
	return {
		"/mbthread/lock-thread": {
			"threadId": threadId
		}
	};
};

MBThreadService.prototype.moveThread = function(categoryId, threadId) {
	return {
		"/mbthread/move-thread": {
			"categoryId": categoryId,
			"threadId": threadId
		}
	};
};

MBThreadService.prototype.moveThreadFromTrash = function(categoryId, threadId) {
	return {
		"/mbthread/move-thread-from-trash": {
			"categoryId": categoryId,
			"threadId": threadId
		}
	};
};

MBThreadService.prototype.moveThreadToTrash = function(threadId) {
	return {
		"/mbthread/move-thread-to-trash": {
			"threadId": threadId
		}
	};
};

MBThreadService.prototype.restoreThreadFromTrash = function(threadId) {
	return {
		"/mbthread/restore-thread-from-trash": {
			"threadId": threadId
		}
	};
};

MBThreadService.prototype.search = function(groupId, creatorUserId, status, start, end) {
	return {
		"/mbthread/search": {
			"groupId": groupId,
			"creatorUserId": creatorUserId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

MBThreadService.prototype.search = function(groupId, creatorUserId, startDate, endDate, status, start, end) {
	return {
		"/mbthread/search": {
			"groupId": groupId,
			"creatorUserId": creatorUserId,
			"startDate": startDate,
			"endDate": endDate,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

MBThreadService.prototype.splitThread = function(messageId, subject, serviceContext) {
	return {
		"/mbthread/split-thread": {
			"messageId": messageId,
			"subject": subject,
			"serviceContext": serviceContext
		}
	};
};

MBThreadService.prototype.unlockThread = function(threadId) {
	return {
		"/mbthread/unlock-thread": {
			"threadId": threadId
		}
	};
};
