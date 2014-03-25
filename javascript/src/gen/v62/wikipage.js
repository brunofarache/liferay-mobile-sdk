function WikiPageService() {
}

WikiPageService.prototype.addPage = function(nodeId, title, content, summary, minorEdit, serviceContext) {
	return {
		"/wikipage/add-page": {
			"nodeId": nodeId,
			"title": title,
			"content": content,
			"summary": summary,
			"minorEdit": minorEdit,
			"serviceContext": serviceContext
		}
	};
};

WikiPageService.prototype.addPage = function(nodeId, title, content, summary, minorEdit, format, parentTitle, redirectTitle, serviceContext) {
	return {
		"/wikipage/add-page": {
			"nodeId": nodeId,
			"title": title,
			"content": content,
			"summary": summary,
			"minorEdit": minorEdit,
			"format": format,
			"parentTitle": parentTitle,
			"redirectTitle": redirectTitle,
			"serviceContext": serviceContext
		}
	};
};

WikiPageService.prototype.addPageAttachment = function(nodeId, title, fileName, file, mimeType) {
	return {
		"/wikipage/add-page-attachment": {
			"nodeId": nodeId,
			"title": title,
			"fileName": fileName,
			"file": file,
			"mimeType": mimeType
		}
	};
};

WikiPageService.prototype.addPageAttachments = function(nodeId, title, inputStreamOVPs) {
	return {
		"/wikipage/add-page-attachments": {
			"nodeId": nodeId,
			"title": title,
			"inputStreamOVPs": inputStreamOVPs
		}
	};
};

WikiPageService.prototype.changeParent = function(nodeId, title, newParentTitle, serviceContext) {
	return {
		"/wikipage/change-parent": {
			"nodeId": nodeId,
			"title": title,
			"newParentTitle": newParentTitle,
			"serviceContext": serviceContext
		}
	};
};

WikiPageService.prototype.copyPageAttachments = function(templateNodeId, templateTitle, nodeId, title) {
	return {
		"/wikipage/copy-page-attachments": {
			"templateNodeId": templateNodeId,
			"templateTitle": templateTitle,
			"nodeId": nodeId,
			"title": title
		}
	};
};

WikiPageService.prototype.deletePage = function(nodeId, title) {
	return {
		"/wikipage/delete-page": {
			"nodeId": nodeId,
			"title": title
		}
	};
};

WikiPageService.prototype.deletePage = function(nodeId, title, version) {
	return {
		"/wikipage/delete-page": {
			"nodeId": nodeId,
			"title": title,
			"version": version
		}
	};
};

WikiPageService.prototype.deletePageAttachment = function(nodeId, title, fileName) {
	return {
		"/wikipage/delete-page-attachment": {
			"nodeId": nodeId,
			"title": title,
			"fileName": fileName
		}
	};
};

WikiPageService.prototype.deletePageAttachments = function(nodeId, title) {
	return {
		"/wikipage/delete-page-attachments": {
			"nodeId": nodeId,
			"title": title
		}
	};
};

WikiPageService.prototype.deleteTempPageAttachment = function(nodeId, fileName, tempFolderName) {
	return {
		"/wikipage/delete-temp-page-attachment": {
			"nodeId": nodeId,
			"fileName": fileName,
			"tempFolderName": tempFolderName
		}
	};
};

WikiPageService.prototype.deleteTrashPageAttachments = function(nodeId, title) {
	return {
		"/wikipage/delete-trash-page-attachments": {
			"nodeId": nodeId,
			"title": title
		}
	};
};

WikiPageService.prototype.discardDraft = function(nodeId, title, version) {
	return {
		"/wikipage/discard-draft": {
			"nodeId": nodeId,
			"title": title,
			"version": version
		}
	};
};

WikiPageService.prototype.getChildren = function(groupId, nodeId, head, parentTitle) {
	return {
		"/wikipage/get-children": {
			"groupId": groupId,
			"nodeId": nodeId,
			"head": head,
			"parentTitle": parentTitle
		}
	};
};

WikiPageService.prototype.getDraftPage = function(nodeId, title) {
	return {
		"/wikipage/get-draft-page": {
			"nodeId": nodeId,
			"title": title
		}
	};
};

WikiPageService.prototype.getNodePages = function(nodeId, max) {
	return {
		"/wikipage/get-node-pages": {
			"nodeId": nodeId,
			"max": max
		}
	};
};

WikiPageService.prototype.getNodePagesRss = function(nodeId, max, type, version, displayStyle, feedURL, entryURL) {
	return {
		"/wikipage/get-node-pages-rss": {
			"nodeId": nodeId,
			"max": max,
			"type": type,
			"version": version,
			"displayStyle": displayStyle,
			"feedURL": feedURL,
			"entryURL": entryURL
		}
	};
};

WikiPageService.prototype.getNodePagesRss = function(nodeId, max, type, version, displayStyle, feedURL, entryURL, attachmentURLPrefix) {
	return {
		"/wikipage/get-node-pages-rss": {
			"nodeId": nodeId,
			"max": max,
			"type": type,
			"version": version,
			"displayStyle": displayStyle,
			"feedURL": feedURL,
			"entryURL": entryURL,
			"attachmentURLPrefix": attachmentURLPrefix
		}
	};
};

WikiPageService.prototype.getOrphans = function(groupId, nodeId) {
	return {
		"/wikipage/get-orphans": {
			"groupId": groupId,
			"nodeId": nodeId
		}
	};
};

WikiPageService.prototype.getPage = function(nodeId, title) {
	return {
		"/wikipage/get-page": {
			"nodeId": nodeId,
			"title": title
		}
	};
};

WikiPageService.prototype.getPage = function(groupId, nodeId, title) {
	return {
		"/wikipage/get-page": {
			"groupId": groupId,
			"nodeId": nodeId,
			"title": title
		}
	};
};

WikiPageService.prototype.getPage = function(nodeId, title, head) {
	return {
		"/wikipage/get-page": {
			"nodeId": nodeId,
			"title": title,
			"head": head
		}
	};
};

WikiPageService.prototype.getPage = function(nodeId, title, version) {
	return {
		"/wikipage/get-page": {
			"nodeId": nodeId,
			"title": title,
			"version": version
		}
	};
};

WikiPageService.prototype.getPages = function(groupId, userId, nodeId, status, start, end) {
	return {
		"/wikipage/get-pages": {
			"groupId": groupId,
			"userId": userId,
			"nodeId": nodeId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

WikiPageService.prototype.getPages = function(groupId, nodeId, head, status, start, end, obc) {
	return {
		"/wikipage/get-pages": {
			"groupId": groupId,
			"nodeId": nodeId,
			"head": head,
			"status": status,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

WikiPageService.prototype.getPagesCount = function(groupId, nodeId, head) {
	return {
		"/wikipage/get-pages-count": {
			"groupId": groupId,
			"nodeId": nodeId,
			"head": head
		}
	};
};

WikiPageService.prototype.getPagesCount = function(groupId, userId, nodeId, status) {
	return {
		"/wikipage/get-pages-count": {
			"groupId": groupId,
			"userId": userId,
			"nodeId": nodeId,
			"status": status
		}
	};
};

WikiPageService.prototype.getPagesRss = function(companyId, nodeId, title, max, type, version, displayStyle, feedURL, entryURL, locale) {
	return {
		"/wikipage/get-pages-rss": {
			"companyId": companyId,
			"nodeId": nodeId,
			"title": title,
			"max": max,
			"type": type,
			"version": version,
			"displayStyle": displayStyle,
			"feedURL": feedURL,
			"entryURL": entryURL,
			"locale": locale
		}
	};
};

WikiPageService.prototype.getPagesRss = function(companyId, nodeId, title, max, type, version, displayStyle, feedURL, entryURL, attachmentURLPrefix, locale) {
	return {
		"/wikipage/get-pages-rss": {
			"companyId": companyId,
			"nodeId": nodeId,
			"title": title,
			"max": max,
			"type": type,
			"version": version,
			"displayStyle": displayStyle,
			"feedURL": feedURL,
			"entryURL": entryURL,
			"attachmentURLPrefix": attachmentURLPrefix,
			"locale": locale
		}
	};
};

WikiPageService.prototype.getRecentChanges = function(groupId, nodeId, start, end) {
	return {
		"/wikipage/get-recent-changes": {
			"groupId": groupId,
			"nodeId": nodeId,
			"start": start,
			"end": end
		}
	};
};

WikiPageService.prototype.getRecentChangesCount = function(groupId, nodeId) {
	return {
		"/wikipage/get-recent-changes-count": {
			"groupId": groupId,
			"nodeId": nodeId
		}
	};
};

WikiPageService.prototype.getTempPageAttachmentNames = function(nodeId, tempFolderName) {
	return {
		"/wikipage/get-temp-page-attachment-names": {
			"nodeId": nodeId,
			"tempFolderName": tempFolderName
		}
	};
};

WikiPageService.prototype.movePage = function(nodeId, title, newTitle, serviceContext) {
	return {
		"/wikipage/move-page": {
			"nodeId": nodeId,
			"title": title,
			"newTitle": newTitle,
			"serviceContext": serviceContext
		}
	};
};

WikiPageService.prototype.movePageAttachmentToTrash = function(nodeId, title, fileName) {
	return {
		"/wikipage/move-page-attachment-to-trash": {
			"nodeId": nodeId,
			"title": title,
			"fileName": fileName
		}
	};
};

WikiPageService.prototype.movePageToTrash = function(nodeId, title) {
	return {
		"/wikipage/move-page-to-trash": {
			"nodeId": nodeId,
			"title": title
		}
	};
};

WikiPageService.prototype.movePageToTrash = function(nodeId, title, version) {
	return {
		"/wikipage/move-page-to-trash": {
			"nodeId": nodeId,
			"title": title,
			"version": version
		}
	};
};

WikiPageService.prototype.restorePageAttachmentFromTrash = function(nodeId, title, fileName) {
	return {
		"/wikipage/restore-page-attachment-from-trash": {
			"nodeId": nodeId,
			"title": title,
			"fileName": fileName
		}
	};
};

WikiPageService.prototype.restorePageFromTrash = function(resourcePrimKey) {
	return {
		"/wikipage/restore-page-from-trash": {
			"resourcePrimKey": resourcePrimKey
		}
	};
};

WikiPageService.prototype.revertPage = function(nodeId, title, version, serviceContext) {
	return {
		"/wikipage/revert-page": {
			"nodeId": nodeId,
			"title": title,
			"version": version,
			"serviceContext": serviceContext
		}
	};
};

WikiPageService.prototype.subscribePage = function(nodeId, title) {
	return {
		"/wikipage/subscribe-page": {
			"nodeId": nodeId,
			"title": title
		}
	};
};

WikiPageService.prototype.unsubscribePage = function(nodeId, title) {
	return {
		"/wikipage/unsubscribe-page": {
			"nodeId": nodeId,
			"title": title
		}
	};
};

WikiPageService.prototype.updatePage = function(nodeId, title, version, content, summary, minorEdit, format, parentTitle, redirectTitle, serviceContext) {
	return {
		"/wikipage/update-page": {
			"nodeId": nodeId,
			"title": title,
			"version": version,
			"content": content,
			"summary": summary,
			"minorEdit": minorEdit,
			"format": format,
			"parentTitle": parentTitle,
			"redirectTitle": redirectTitle,
			"serviceContext": serviceContext
		}
	};
};
