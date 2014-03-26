function JournalArticleService() {
}

JournalArticleService.prototype.addArticle = function(groupId, folderId, classNameId, classPK, articleId, autoArticleId, titleMap, descriptionMap, content, type, ddmStructureKey, ddmTemplateKey, layoutUuid, displayDateMonth, displayDateDay, displayDateYear, displayDateHour, displayDateMinute, expirationDateMonth, expirationDateDay, expirationDateYear, expirationDateHour, expirationDateMinute, neverExpire, reviewDateMonth, reviewDateDay, reviewDateYear, reviewDateHour, reviewDateMinute, neverReview, indexable, articleURL, serviceContext) {
	return {
		"/journalarticle/add-article": {
			"groupId": groupId,
			"folderId": folderId,
			"classNameId": classNameId,
			"classPK": classPK,
			"articleId": articleId,
			"autoArticleId": autoArticleId,
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"content": content,
			"type": type,
			"ddmStructureKey": ddmStructureKey,
			"ddmTemplateKey": ddmTemplateKey,
			"layoutUuid": layoutUuid,
			"displayDateMonth": displayDateMonth,
			"displayDateDay": displayDateDay,
			"displayDateYear": displayDateYear,
			"displayDateHour": displayDateHour,
			"displayDateMinute": displayDateMinute,
			"expirationDateMonth": expirationDateMonth,
			"expirationDateDay": expirationDateDay,
			"expirationDateYear": expirationDateYear,
			"expirationDateHour": expirationDateHour,
			"expirationDateMinute": expirationDateMinute,
			"neverExpire": neverExpire,
			"reviewDateMonth": reviewDateMonth,
			"reviewDateDay": reviewDateDay,
			"reviewDateYear": reviewDateYear,
			"reviewDateHour": reviewDateHour,
			"reviewDateMinute": reviewDateMinute,
			"neverReview": neverReview,
			"indexable": indexable,
			"articleURL": articleURL,
			"serviceContext": serviceContext
		}
	};
};

JournalArticleService.prototype.addArticle = function(groupId, folderId, classNameId, classPK, articleId, autoArticleId, titleMap, descriptionMap, content, type, ddmStructureKey, ddmTemplateKey, layoutUuid, displayDateMonth, displayDateDay, displayDateYear, displayDateHour, displayDateMinute, expirationDateMonth, expirationDateDay, expirationDateYear, expirationDateHour, expirationDateMinute, neverExpire, reviewDateMonth, reviewDateDay, reviewDateYear, reviewDateHour, reviewDateMinute, neverReview, indexable, smallImage, smallImageURL, smallFile, images, articleURL, serviceContext) {
	return {
		"/journalarticle/add-article": {
			"groupId": groupId,
			"folderId": folderId,
			"classNameId": classNameId,
			"classPK": classPK,
			"articleId": articleId,
			"autoArticleId": autoArticleId,
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"content": content,
			"type": type,
			"ddmStructureKey": ddmStructureKey,
			"ddmTemplateKey": ddmTemplateKey,
			"layoutUuid": layoutUuid,
			"displayDateMonth": displayDateMonth,
			"displayDateDay": displayDateDay,
			"displayDateYear": displayDateYear,
			"displayDateHour": displayDateHour,
			"displayDateMinute": displayDateMinute,
			"expirationDateMonth": expirationDateMonth,
			"expirationDateDay": expirationDateDay,
			"expirationDateYear": expirationDateYear,
			"expirationDateHour": expirationDateHour,
			"expirationDateMinute": expirationDateMinute,
			"neverExpire": neverExpire,
			"reviewDateMonth": reviewDateMonth,
			"reviewDateDay": reviewDateDay,
			"reviewDateYear": reviewDateYear,
			"reviewDateHour": reviewDateHour,
			"reviewDateMinute": reviewDateMinute,
			"neverReview": neverReview,
			"indexable": indexable,
			"smallImage": smallImage,
			"smallImageURL": smallImageURL,
			"smallFile": smallFile,
			"images": images,
			"articleURL": articleURL,
			"serviceContext": serviceContext
		}
	};
};

JournalArticleService.prototype.copyArticle = function(groupId, oldArticleId, newArticleId, autoArticleId, version) {
	return {
		"/journalarticle/copy-article": {
			"groupId": groupId,
			"oldArticleId": oldArticleId,
			"newArticleId": newArticleId,
			"autoArticleId": autoArticleId,
			"version": version
		}
	};
};

JournalArticleService.prototype.deleteArticle = function(groupId, articleId, articleURL, serviceContext) {
	return {
		"/journalarticle/delete-article": {
			"groupId": groupId,
			"articleId": articleId,
			"articleURL": articleURL,
			"serviceContext": serviceContext
		}
	};
};

JournalArticleService.prototype.deleteArticle = function(groupId, articleId, version, articleURL, serviceContext) {
	return {
		"/journalarticle/delete-article": {
			"groupId": groupId,
			"articleId": articleId,
			"version": version,
			"articleURL": articleURL,
			"serviceContext": serviceContext
		}
	};
};

JournalArticleService.prototype.expireArticle = function(groupId, articleId, articleURL, serviceContext) {
	return {
		"/journalarticle/expire-article": {
			"groupId": groupId,
			"articleId": articleId,
			"articleURL": articleURL,
			"serviceContext": serviceContext
		}
	};
};

JournalArticleService.prototype.expireArticle = function(groupId, articleId, version, articleURL, serviceContext) {
	return {
		"/journalarticle/expire-article": {
			"groupId": groupId,
			"articleId": articleId,
			"version": version,
			"articleURL": articleURL,
			"serviceContext": serviceContext
		}
	};
};

JournalArticleService.prototype.getArticle = function(id) {
	return {
		"/journalarticle/get-article": {
			"id": id
		}
	};
};

JournalArticleService.prototype.getArticle = function(groupId, articleId) {
	return {
		"/journalarticle/get-article": {
			"groupId": groupId,
			"articleId": articleId
		}
	};
};

JournalArticleService.prototype.getArticle = function(groupId, articleId, version) {
	return {
		"/journalarticle/get-article": {
			"groupId": groupId,
			"articleId": articleId,
			"version": version
		}
	};
};

JournalArticleService.prototype.getArticle = function(groupId, className, classPK) {
	return {
		"/journalarticle/get-article": {
			"groupId": groupId,
			"className": className,
			"classPK": classPK
		}
	};
};

JournalArticleService.prototype.getArticleByUrlTitle = function(groupId, urlTitle) {
	return {
		"/journalarticle/get-article-by-url-title": {
			"groupId": groupId,
			"urlTitle": urlTitle
		}
	};
};

JournalArticleService.prototype.getArticleContent = function(groupId, articleId, languageId, themeDisplay) {
	return {
		"/journalarticle/get-article-content": {
			"groupId": groupId,
			"articleId": articleId,
			"languageId": languageId,
			"themeDisplay": themeDisplay
		}
	};
};

JournalArticleService.prototype.getArticleContent = function(groupId, articleId, version, languageId, themeDisplay) {
	return {
		"/journalarticle/get-article-content": {
			"groupId": groupId,
			"articleId": articleId,
			"version": version,
			"languageId": languageId,
			"themeDisplay": themeDisplay
		}
	};
};

JournalArticleService.prototype.getArticles = function(groupId, folderId) {
	return {
		"/journalarticle/get-articles": {
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

JournalArticleService.prototype.getArticles = function(groupId, folderId, start, end, obc) {
	return {
		"/journalarticle/get-articles": {
			"groupId": groupId,
			"folderId": folderId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

JournalArticleService.prototype.getArticlesByArticleId = function(groupId, articleId, start, end, obc) {
	return {
		"/journalarticle/get-articles-by-article-id": {
			"groupId": groupId,
			"articleId": articleId,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

JournalArticleService.prototype.getArticlesByLayoutUuid = function(groupId, layoutUuid) {
	return {
		"/journalarticle/get-articles-by-layout-uuid": {
			"groupId": groupId,
			"layoutUuid": layoutUuid
		}
	};
};

JournalArticleService.prototype.getArticlesByStructureId = function(groupId, ddmStructureKey, start, end, obc) {
	return {
		"/journalarticle/get-articles-by-structure-id": {
			"groupId": groupId,
			"ddmStructureKey": ddmStructureKey,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

JournalArticleService.prototype.getArticlesByStructureId = function(groupId, classNameId, ddmStructureKey, status, start, end, obc) {
	return {
		"/journalarticle/get-articles-by-structure-id": {
			"groupId": groupId,
			"classNameId": classNameId,
			"ddmStructureKey": ddmStructureKey,
			"status": status,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

JournalArticleService.prototype.getArticlesCount = function(groupId, folderId) {
	return {
		"/journalarticle/get-articles-count": {
			"groupId": groupId,
			"folderId": folderId
		}
	};
};

JournalArticleService.prototype.getArticlesCount = function(groupId, folderId, status) {
	return {
		"/journalarticle/get-articles-count": {
			"groupId": groupId,
			"folderId": folderId,
			"status": status
		}
	};
};

JournalArticleService.prototype.getArticlesCountByArticleId = function(groupId, articleId) {
	return {
		"/journalarticle/get-articles-count-by-article-id": {
			"groupId": groupId,
			"articleId": articleId
		}
	};
};

JournalArticleService.prototype.getArticlesCountByStructureId = function(groupId, ddmStructureKey) {
	return {
		"/journalarticle/get-articles-count-by-structure-id": {
			"groupId": groupId,
			"ddmStructureKey": ddmStructureKey
		}
	};
};

JournalArticleService.prototype.getArticlesCountByStructureId = function(groupId, classNameId, ddmStructureKey, status) {
	return {
		"/journalarticle/get-articles-count-by-structure-id": {
			"groupId": groupId,
			"classNameId": classNameId,
			"ddmStructureKey": ddmStructureKey,
			"status": status
		}
	};
};

JournalArticleService.prototype.getDisplayArticleByUrlTitle = function(groupId, urlTitle) {
	return {
		"/journalarticle/get-display-article-by-url-title": {
			"groupId": groupId,
			"urlTitle": urlTitle
		}
	};
};

JournalArticleService.prototype.getFoldersAndArticlesCount = function(groupId, folderIds) {
	return {
		"/journalarticle/get-folders-and-articles-count": {
			"groupId": groupId,
			"folderIds": folderIds
		}
	};
};

JournalArticleService.prototype.getGroupArticles = function(groupId, userId, rootFolderId, start, end, orderByComparator) {
	return {
		"/journalarticle/get-group-articles": {
			"groupId": groupId,
			"userId": userId,
			"rootFolderId": rootFolderId,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

JournalArticleService.prototype.getGroupArticles = function(groupId, userId, rootFolderId, status, start, end, orderByComparator) {
	return {
		"/journalarticle/get-group-articles": {
			"groupId": groupId,
			"userId": userId,
			"rootFolderId": rootFolderId,
			"status": status,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

JournalArticleService.prototype.getGroupArticlesCount = function(groupId, userId, rootFolderId) {
	return {
		"/journalarticle/get-group-articles-count": {
			"groupId": groupId,
			"userId": userId,
			"rootFolderId": rootFolderId
		}
	};
};

JournalArticleService.prototype.getGroupArticlesCount = function(groupId, userId, rootFolderId, status) {
	return {
		"/journalarticle/get-group-articles-count": {
			"groupId": groupId,
			"userId": userId,
			"rootFolderId": rootFolderId,
			"status": status
		}
	};
};

JournalArticleService.prototype.getLatestArticle = function(resourcePrimKey) {
	return {
		"/journalarticle/get-latest-article": {
			"resourcePrimKey": resourcePrimKey
		}
	};
};

JournalArticleService.prototype.getLatestArticle = function(groupId, articleId, status) {
	return {
		"/journalarticle/get-latest-article": {
			"groupId": groupId,
			"articleId": articleId,
			"status": status
		}
	};
};

JournalArticleService.prototype.getLatestArticle = function(groupId, className, classPK) {
	return {
		"/journalarticle/get-latest-article": {
			"groupId": groupId,
			"className": className,
			"classPK": classPK
		}
	};
};

JournalArticleService.prototype.moveArticle = function(groupId, articleId, newFolderId) {
	return {
		"/journalarticle/move-article": {
			"groupId": groupId,
			"articleId": articleId,
			"newFolderId": newFolderId
		}
	};
};

JournalArticleService.prototype.moveArticleFromTrash = function(groupId, articleId, newFolderId, serviceContext) {
	return {
		"/journalarticle/move-article-from-trash": {
			"groupId": groupId,
			"articleId": articleId,
			"newFolderId": newFolderId,
			"serviceContext": serviceContext
		}
	};
};

JournalArticleService.prototype.moveArticleFromTrash = function(groupId, resourcePrimKey, newFolderId, serviceContext) {
	return {
		"/journalarticle/move-article-from-trash": {
			"groupId": groupId,
			"resourcePrimKey": resourcePrimKey,
			"newFolderId": newFolderId,
			"serviceContext": serviceContext
		}
	};
};

JournalArticleService.prototype.moveArticleToTrash = function(groupId, articleId) {
	return {
		"/journalarticle/move-article-to-trash": {
			"groupId": groupId,
			"articleId": articleId
		}
	};
};

JournalArticleService.prototype.removeArticleLocale = function(companyId, languageId) {
	return {
		"/journalarticle/remove-article-locale": {
			"companyId": companyId,
			"languageId": languageId
		}
	};
};

JournalArticleService.prototype.removeArticleLocale = function(groupId, articleId, version, languageId) {
	return {
		"/journalarticle/remove-article-locale": {
			"groupId": groupId,
			"articleId": articleId,
			"version": version,
			"languageId": languageId
		}
	};
};

JournalArticleService.prototype.restoreArticleFromTrash = function(resourcePrimKey) {
	return {
		"/journalarticle/restore-article-from-trash": {
			"resourcePrimKey": resourcePrimKey
		}
	};
};

JournalArticleService.prototype.restoreArticleFromTrash = function(groupId, articleId) {
	return {
		"/journalarticle/restore-article-from-trash": {
			"groupId": groupId,
			"articleId": articleId
		}
	};
};

JournalArticleService.prototype.search = function(companyId, groupId, folderIds, classNameId, keywords, version, type, ddmStructureKey, ddmTemplateKey, displayDateGT, displayDateLT, status, reviewDate, start, end, obc) {
	return {
		"/journalarticle/search": {
			"companyId": companyId,
			"groupId": groupId,
			"folderIds": folderIds,
			"classNameId": classNameId,
			"keywords": keywords,
			"version": version,
			"type": type,
			"ddmStructureKey": ddmStructureKey,
			"ddmTemplateKey": ddmTemplateKey,
			"displayDateGT": displayDateGT,
			"displayDateLT": displayDateLT,
			"status": status,
			"reviewDate": reviewDate,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

JournalArticleService.prototype.search = function(companyId, groupId, folderIds, classNameId, articleId, version, title, description, content, type, ddmStructureKey, ddmTemplateKey, displayDateGT, displayDateLT, status, reviewDate, andOperator, start, end, obc) {
	return {
		"/journalarticle/search": {
			"companyId": companyId,
			"groupId": groupId,
			"folderIds": folderIds,
			"classNameId": classNameId,
			"articleId": articleId,
			"version": version,
			"title": title,
			"description": description,
			"content": content,
			"type": type,
			"ddmStructureKey": ddmStructureKey,
			"ddmTemplateKey": ddmTemplateKey,
			"displayDateGT": displayDateGT,
			"displayDateLT": displayDateLT,
			"status": status,
			"reviewDate": reviewDate,
			"andOperator": andOperator,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

JournalArticleService.prototype.search = function(companyId, groupId, folderIds, classNameId, articleId, version, title, description, content, type, ddmStructureKeys, ddmTemplateKeys, displayDateGT, displayDateLT, status, reviewDate, andOperator, start, end, obc) {
	return {
		"/journalarticle/search": {
			"companyId": companyId,
			"groupId": groupId,
			"folderIds": folderIds,
			"classNameId": classNameId,
			"articleId": articleId,
			"version": version,
			"title": title,
			"description": description,
			"content": content,
			"type": type,
			"ddmStructureKeys": ddmStructureKeys,
			"ddmTemplateKeys": ddmTemplateKeys,
			"displayDateGT": displayDateGT,
			"displayDateLT": displayDateLT,
			"status": status,
			"reviewDate": reviewDate,
			"andOperator": andOperator,
			"start": start,
			"end": end,
			"obc": obc
		}
	};
};

JournalArticleService.prototype.search = function(groupId, creatorUserId, status, start, end) {
	return {
		"/journalarticle/search": {
			"groupId": groupId,
			"creatorUserId": creatorUserId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

JournalArticleService.prototype.searchCount = function(companyId, groupId, folderIds, classNameId, keywords, version, type, ddmStructureKey, ddmTemplateKey, displayDateGT, displayDateLT, status, reviewDate) {
	return {
		"/journalarticle/search-count": {
			"companyId": companyId,
			"groupId": groupId,
			"folderIds": folderIds,
			"classNameId": classNameId,
			"keywords": keywords,
			"version": version,
			"type": type,
			"ddmStructureKey": ddmStructureKey,
			"ddmTemplateKey": ddmTemplateKey,
			"displayDateGT": displayDateGT,
			"displayDateLT": displayDateLT,
			"status": status,
			"reviewDate": reviewDate
		}
	};
};

JournalArticleService.prototype.searchCount = function(companyId, groupId, folderIds, classNameId, articleId, version, title, description, content, type, ddmStructureKey, ddmTemplateKey, displayDateGT, displayDateLT, status, reviewDate, andOperator) {
	return {
		"/journalarticle/search-count": {
			"companyId": companyId,
			"groupId": groupId,
			"folderIds": folderIds,
			"classNameId": classNameId,
			"articleId": articleId,
			"version": version,
			"title": title,
			"description": description,
			"content": content,
			"type": type,
			"ddmStructureKey": ddmStructureKey,
			"ddmTemplateKey": ddmTemplateKey,
			"displayDateGT": displayDateGT,
			"displayDateLT": displayDateLT,
			"status": status,
			"reviewDate": reviewDate,
			"andOperator": andOperator
		}
	};
};

JournalArticleService.prototype.searchCount = function(companyId, groupId, folderIds, classNameId, articleId, version, title, description, content, type, ddmStructureKeys, ddmTemplateKeys, displayDateGT, displayDateLT, status, reviewDate, andOperator) {
	return {
		"/journalarticle/search-count": {
			"companyId": companyId,
			"groupId": groupId,
			"folderIds": folderIds,
			"classNameId": classNameId,
			"articleId": articleId,
			"version": version,
			"title": title,
			"description": description,
			"content": content,
			"type": type,
			"ddmStructureKeys": ddmStructureKeys,
			"ddmTemplateKeys": ddmTemplateKeys,
			"displayDateGT": displayDateGT,
			"displayDateLT": displayDateLT,
			"status": status,
			"reviewDate": reviewDate,
			"andOperator": andOperator
		}
	};
};

JournalArticleService.prototype.subscribe = function(groupId) {
	return {
		"/journalarticle/subscribe": {
			"groupId": groupId
		}
	};
};

JournalArticleService.prototype.unsubscribe = function(groupId) {
	return {
		"/journalarticle/unsubscribe": {
			"groupId": groupId
		}
	};
};

JournalArticleService.prototype.updateArticle = function(userId, groupId, folderId, articleId, version, titleMap, descriptionMap, content, layoutUuid, serviceContext) {
	return {
		"/journalarticle/update-article": {
			"userId": userId,
			"groupId": groupId,
			"folderId": folderId,
			"articleId": articleId,
			"version": version,
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"content": content,
			"layoutUuid": layoutUuid,
			"serviceContext": serviceContext
		}
	};
};

JournalArticleService.prototype.updateArticle = function(groupId, folderId, articleId, version, titleMap, descriptionMap, content, type, ddmStructureKey, ddmTemplateKey, layoutUuid, displayDateMonth, displayDateDay, displayDateYear, displayDateHour, displayDateMinute, expirationDateMonth, expirationDateDay, expirationDateYear, expirationDateHour, expirationDateMinute, neverExpire, reviewDateMonth, reviewDateDay, reviewDateYear, reviewDateHour, reviewDateMinute, neverReview, indexable, smallImage, smallImageURL, smallFile, images, articleURL, serviceContext) {
	return {
		"/journalarticle/update-article": {
			"groupId": groupId,
			"folderId": folderId,
			"articleId": articleId,
			"version": version,
			"titleMap": titleMap,
			"descriptionMap": descriptionMap,
			"content": content,
			"type": type,
			"ddmStructureKey": ddmStructureKey,
			"ddmTemplateKey": ddmTemplateKey,
			"layoutUuid": layoutUuid,
			"displayDateMonth": displayDateMonth,
			"displayDateDay": displayDateDay,
			"displayDateYear": displayDateYear,
			"displayDateHour": displayDateHour,
			"displayDateMinute": displayDateMinute,
			"expirationDateMonth": expirationDateMonth,
			"expirationDateDay": expirationDateDay,
			"expirationDateYear": expirationDateYear,
			"expirationDateHour": expirationDateHour,
			"expirationDateMinute": expirationDateMinute,
			"neverExpire": neverExpire,
			"reviewDateMonth": reviewDateMonth,
			"reviewDateDay": reviewDateDay,
			"reviewDateYear": reviewDateYear,
			"reviewDateHour": reviewDateHour,
			"reviewDateMinute": reviewDateMinute,
			"neverReview": neverReview,
			"indexable": indexable,
			"smallImage": smallImage,
			"smallImageURL": smallImageURL,
			"smallFile": smallFile,
			"images": images,
			"articleURL": articleURL,
			"serviceContext": serviceContext
		}
	};
};

JournalArticleService.prototype.updateArticle = function(groupId, folderId, articleId, version, content, serviceContext) {
	return {
		"/journalarticle/update-article": {
			"groupId": groupId,
			"folderId": folderId,
			"articleId": articleId,
			"version": version,
			"content": content,
			"serviceContext": serviceContext
		}
	};
};

JournalArticleService.prototype.updateArticleTranslation = function(groupId, articleId, version, locale, title, description, content, images) {
	return {
		"/journalarticle/update-article-translation": {
			"groupId": groupId,
			"articleId": articleId,
			"version": version,
			"locale": locale,
			"title": title,
			"description": description,
			"content": content,
			"images": images
		}
	};
};

JournalArticleService.prototype.updateArticleTranslation = function(groupId, articleId, version, locale, title, description, content, images, serviceContext) {
	return {
		"/journalarticle/update-article-translation": {
			"groupId": groupId,
			"articleId": articleId,
			"version": version,
			"locale": locale,
			"title": title,
			"description": description,
			"content": content,
			"images": images,
			"serviceContext": serviceContext
		}
	};
};

JournalArticleService.prototype.updateContent = function(groupId, articleId, version, content) {
	return {
		"/journalarticle/update-content": {
			"groupId": groupId,
			"articleId": articleId,
			"version": version,
			"content": content
		}
	};
};

JournalArticleService.prototype.updateStatus = function(groupId, articleId, version, status, articleURL, serviceContext) {
	return {
		"/journalarticle/update-status": {
			"groupId": groupId,
			"articleId": articleId,
			"version": version,
			"status": status,
			"articleURL": articleURL,
			"serviceContext": serviceContext
		}
	};
};

module.exports = JournalArticleService;