function AssetEntryService() {
}

AssetEntryService.prototype.getCompanyEntries = function(companyId, start, end) {
	return {
		"/assetentry/get-company-entries": {
			"companyId": companyId,
			"start": start,
			"end": end
		}
	};
};

AssetEntryService.prototype.getCompanyEntriesCount = function(companyId) {
	return {
		"/assetentry/get-company-entries-count": {
			"companyId": companyId
		}
	};
};

AssetEntryService.prototype.getEntries = function(entryQuery) {
	return {
		"/assetentry/get-entries": {
			"entryQuery": entryQuery
		}
	};
};

AssetEntryService.prototype.getEntriesCount = function(entryQuery) {
	return {
		"/assetentry/get-entries-count": {
			"entryQuery": entryQuery
		}
	};
};

AssetEntryService.prototype.getEntry = function(entryId) {
	return {
		"/assetentry/get-entry": {
			"entryId": entryId
		}
	};
};

AssetEntryService.prototype.incrementViewCounter = function(className, classPK) {
	return {
		"/assetentry/increment-view-counter": {
			"className": className,
			"classPK": classPK
		}
	};
};

AssetEntryService.prototype.updateEntry = function(groupId, className, classPK, classUuid, classTypeId, categoryIds, tagNames, visible, startDate, endDate, expirationDate, mimeType, title, description, summary, url, layoutUuid, height, width, priority, sync) {
	return {
		"/assetentry/update-entry": {
			"groupId": groupId,
			"className": className,
			"classPK": classPK,
			"classUuid": classUuid,
			"classTypeId": classTypeId,
			"categoryIds": categoryIds,
			"tagNames": tagNames,
			"visible": visible,
			"startDate": startDate,
			"endDate": endDate,
			"expirationDate": expirationDate,
			"mimeType": mimeType,
			"title": title,
			"description": description,
			"summary": summary,
			"url": url,
			"layoutUuid": layoutUuid,
			"height": height,
			"width": width,
			"priority": priority,
			"sync": sync
		}
	};
};

AssetEntryService.prototype.updateEntry = function(groupId, className, classPK, classUuid, classTypeId, categoryIds, tagNames, visible, startDate, endDate, publishDate, expirationDate, mimeType, title, description, summary, url, layoutUuid, height, width, priority, sync) {
	return {
		"/assetentry/update-entry": {
			"groupId": groupId,
			"className": className,
			"classPK": classPK,
			"classUuid": classUuid,
			"classTypeId": classTypeId,
			"categoryIds": categoryIds,
			"tagNames": tagNames,
			"visible": visible,
			"startDate": startDate,
			"endDate": endDate,
			"publishDate": publishDate,
			"expirationDate": expirationDate,
			"mimeType": mimeType,
			"title": title,
			"description": description,
			"summary": summary,
			"url": url,
			"layoutUuid": layoutUuid,
			"height": height,
			"width": width,
			"priority": priority,
			"sync": sync
		}
	};
};

AssetEntryService.prototype.updateEntry = function(groupId, createDate, modifiedDate, className, classPK, classUuid, classTypeId, categoryIds, tagNames, visible, startDate, endDate, expirationDate, mimeType, title, description, summary, url, layoutUuid, height, width, priority, sync) {
	return {
		"/assetentry/update-entry": {
			"groupId": groupId,
			"createDate": createDate,
			"modifiedDate": modifiedDate,
			"className": className,
			"classPK": classPK,
			"classUuid": classUuid,
			"classTypeId": classTypeId,
			"categoryIds": categoryIds,
			"tagNames": tagNames,
			"visible": visible,
			"startDate": startDate,
			"endDate": endDate,
			"expirationDate": expirationDate,
			"mimeType": mimeType,
			"title": title,
			"description": description,
			"summary": summary,
			"url": url,
			"layoutUuid": layoutUuid,
			"height": height,
			"width": width,
			"priority": priority,
			"sync": sync
		}
	};
};
