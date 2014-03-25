function MBMessageService() {
}

MBMessageService.prototype.addDiscussionMessage = function(groupId, className, classPK, permissionClassName, permissionClassPK, permissionOwnerId, threadId, parentMessageId, subject, body, serviceContext) {
	return {
		"/mbmessage/add-discussion-message": {
			"groupId": groupId,
			"className": className,
			"classPK": classPK,
			"permissionClassName": permissionClassName,
			"permissionClassPK": permissionClassPK,
			"permissionOwnerId": permissionOwnerId,
			"threadId": threadId,
			"parentMessageId": parentMessageId,
			"subject": subject,
			"body": body,
			"serviceContext": serviceContext
		}
	};
};

MBMessageService.prototype.addMessage = function(groupId, categoryId, subject, body, format, inputStreamOVPs, anonymous, priority, allowPingbacks, serviceContext) {
	return {
		"/mbmessage/add-message": {
			"groupId": groupId,
			"categoryId": categoryId,
			"subject": subject,
			"body": body,
			"format": format,
			"inputStreamOVPs": inputStreamOVPs,
			"anonymous": anonymous,
			"priority": priority,
			"allowPingbacks": allowPingbacks,
			"serviceContext": serviceContext
		}
	};
};

MBMessageService.prototype.addMessage = function(groupId, categoryId, threadId, parentMessageId, subject, body, format, inputStreamOVPs, anonymous, priority, allowPingbacks, serviceContext) {
	return {
		"/mbmessage/add-message": {
			"groupId": groupId,
			"categoryId": categoryId,
			"threadId": threadId,
			"parentMessageId": parentMessageId,
			"subject": subject,
			"body": body,
			"format": format,
			"inputStreamOVPs": inputStreamOVPs,
			"anonymous": anonymous,
			"priority": priority,
			"allowPingbacks": allowPingbacks,
			"serviceContext": serviceContext
		}
	};
};

MBMessageService.prototype.addMessage = function(categoryId, subject, body, serviceContext) {
	return {
		"/mbmessage/add-message": {
			"categoryId": categoryId,
			"subject": subject,
			"body": body,
			"serviceContext": serviceContext
		}
	};
};

MBMessageService.prototype.addMessage = function(parentMessageId, subject, body, format, inputStreamOVPs, anonymous, priority, allowPingbacks, serviceContext) {
	return {
		"/mbmessage/add-message": {
			"parentMessageId": parentMessageId,
			"subject": subject,
			"body": body,
			"format": format,
			"inputStreamOVPs": inputStreamOVPs,
			"anonymous": anonymous,
			"priority": priority,
			"allowPingbacks": allowPingbacks,
			"serviceContext": serviceContext
		}
	};
};

MBMessageService.prototype.deleteDiscussionMessage = function(groupId, className, classPK, permissionClassName, permissionClassPK, permissionOwnerId, messageId) {
	return {
		"/mbmessage/delete-discussion-message": {
			"groupId": groupId,
			"className": className,
			"classPK": classPK,
			"permissionClassName": permissionClassName,
			"permissionClassPK": permissionClassPK,
			"permissionOwnerId": permissionOwnerId,
			"messageId": messageId
		}
	};
};

MBMessageService.prototype.deleteMessage = function(messageId) {
	return {
		"/mbmessage/delete-message": {
			"messageId": messageId
		}
	};
};

MBMessageService.prototype.deleteMessageAttachments = function(messageId) {
	return {
		"/mbmessage/delete-message-attachments": {
			"messageId": messageId
		}
	};
};

MBMessageService.prototype.getCategoryMessages = function(groupId, categoryId, status, start, end) {
	return {
		"/mbmessage/get-category-messages": {
			"groupId": groupId,
			"categoryId": categoryId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

MBMessageService.prototype.getCategoryMessagesCount = function(groupId, categoryId, status) {
	return {
		"/mbmessage/get-category-messages-count": {
			"groupId": groupId,
			"categoryId": categoryId,
			"status": status
		}
	};
};

MBMessageService.prototype.getCategoryMessagesRss = function(groupId, categoryId, status, max, type, version, displayStyle, feedURL, entryURL, themeDisplay) {
	return {
		"/mbmessage/get-category-messages-rss": {
			"groupId": groupId,
			"categoryId": categoryId,
			"status": status,
			"max": max,
			"type": type,
			"version": version,
			"displayStyle": displayStyle,
			"feedURL": feedURL,
			"entryURL": entryURL,
			"themeDisplay": themeDisplay
		}
	};
};

MBMessageService.prototype.getCompanyMessagesRss = function(companyId, status, max, type, version, displayStyle, feedURL, entryURL, themeDisplay) {
	return {
		"/mbmessage/get-company-messages-rss": {
			"companyId": companyId,
			"status": status,
			"max": max,
			"type": type,
			"version": version,
			"displayStyle": displayStyle,
			"feedURL": feedURL,
			"entryURL": entryURL,
			"themeDisplay": themeDisplay
		}
	};
};

MBMessageService.prototype.getGroupMessagesCount = function(groupId, status) {
	return {
		"/mbmessage/get-group-messages-count": {
			"groupId": groupId,
			"status": status
		}
	};
};

MBMessageService.prototype.getGroupMessagesRss = function(groupId, userId, status, max, type, version, displayStyle, feedURL, entryURL, themeDisplay) {
	return {
		"/mbmessage/get-group-messages-rss": {
			"groupId": groupId,
			"userId": userId,
			"status": status,
			"max": max,
			"type": type,
			"version": version,
			"displayStyle": displayStyle,
			"feedURL": feedURL,
			"entryURL": entryURL,
			"themeDisplay": themeDisplay
		}
	};
};

MBMessageService.prototype.getGroupMessagesRss = function(groupId, status, max, type, version, displayStyle, feedURL, entryURL, themeDisplay) {
	return {
		"/mbmessage/get-group-messages-rss": {
			"groupId": groupId,
			"status": status,
			"max": max,
			"type": type,
			"version": version,
			"displayStyle": displayStyle,
			"feedURL": feedURL,
			"entryURL": entryURL,
			"themeDisplay": themeDisplay
		}
	};
};

MBMessageService.prototype.getMessage = function(messageId) {
	return {
		"/mbmessage/get-message": {
			"messageId": messageId
		}
	};
};

MBMessageService.prototype.getMessageDisplay = function(messageId, status, threadView, includePrevAndNext) {
	return {
		"/mbmessage/get-message-display": {
			"messageId": messageId,
			"status": status,
			"threadView": threadView,
			"includePrevAndNext": includePrevAndNext
		}
	};
};

MBMessageService.prototype.getThreadAnswersCount = function(groupId, categoryId, threadId) {
	return {
		"/mbmessage/get-thread-answers-count": {
			"groupId": groupId,
			"categoryId": categoryId,
			"threadId": threadId
		}
	};
};

MBMessageService.prototype.getThreadMessages = function(groupId, categoryId, threadId, status, start, end) {
	return {
		"/mbmessage/get-thread-messages": {
			"groupId": groupId,
			"categoryId": categoryId,
			"threadId": threadId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

MBMessageService.prototype.getThreadMessagesCount = function(groupId, categoryId, threadId, status) {
	return {
		"/mbmessage/get-thread-messages-count": {
			"groupId": groupId,
			"categoryId": categoryId,
			"threadId": threadId,
			"status": status
		}
	};
};

MBMessageService.prototype.getThreadMessagesRss = function(threadId, status, max, type, version, displayStyle, feedURL, entryURL, themeDisplay) {
	return {
		"/mbmessage/get-thread-messages-rss": {
			"threadId": threadId,
			"status": status,
			"max": max,
			"type": type,
			"version": version,
			"displayStyle": displayStyle,
			"feedURL": feedURL,
			"entryURL": entryURL,
			"themeDisplay": themeDisplay
		}
	};
};

MBMessageService.prototype.restoreMessageAttachmentFromTrash = function(messageId, fileName) {
	return {
		"/mbmessage/restore-message-attachment-from-trash": {
			"messageId": messageId,
			"fileName": fileName
		}
	};
};

MBMessageService.prototype.subscribeMessage = function(messageId) {
	return {
		"/mbmessage/subscribe-message": {
			"messageId": messageId
		}
	};
};

MBMessageService.prototype.unsubscribeMessage = function(messageId) {
	return {
		"/mbmessage/unsubscribe-message": {
			"messageId": messageId
		}
	};
};

MBMessageService.prototype.updateAnswer = function(messageId, answer, cascade) {
	return {
		"/mbmessage/update-answer": {
			"messageId": messageId,
			"answer": answer,
			"cascade": cascade
		}
	};
};

MBMessageService.prototype.updateDiscussionMessage = function(className, classPK, permissionClassName, permissionClassPK, permissionOwnerId, messageId, subject, body, serviceContext) {
	return {
		"/mbmessage/update-discussion-message": {
			"className": className,
			"classPK": classPK,
			"permissionClassName": permissionClassName,
			"permissionClassPK": permissionClassPK,
			"permissionOwnerId": permissionOwnerId,
			"messageId": messageId,
			"subject": subject,
			"body": body,
			"serviceContext": serviceContext
		}
	};
};

MBMessageService.prototype.updateMessage = function(messageId, subject, body, inputStreamOVPs, existingFiles, priority, allowPingbacks, serviceContext) {
	return {
		"/mbmessage/update-message": {
			"messageId": messageId,
			"subject": subject,
			"body": body,
			"inputStreamOVPs": inputStreamOVPs,
			"existingFiles": existingFiles,
			"priority": priority,
			"allowPingbacks": allowPingbacks,
			"serviceContext": serviceContext
		}
	};
};
