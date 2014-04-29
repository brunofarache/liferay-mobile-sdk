/**
 * Copyright (c) 2000-2014 Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

#import "LRBookmarksEntryService_v62.h"

/**
 * @author Bruno Farache
 */
@implementation LRBookmarksEntryService_v62

- (NSDictionary *)addEntryWithGroupId:(long long)groupId folderId:(long long)folderId name:(NSString *)name url:(NSString *)url description:(NSString *)description serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"folderId": @(folderId),
		@"name": name,
		@"url": url,
		@"description": description,
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/bookmarksentry/add-entry": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (void)deleteEntryWithEntryId:(long long)entryId error:(NSError **)error {
	NSDictionary *_params = @{
		@"entryId": @(entryId)
	};

	NSDictionary *_command = @{@"/bookmarksentry/delete-entry": _params};

	[self.session invoke:_command error:error];
}

- (NSArray *)getEntriesWithGroupId:(long long)groupId folderId:(long long)folderId start:(int)start end:(int)end error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"folderId": @(folderId),
		@"start": @(start),
		@"end": @(end)
	};

	NSDictionary *_command = @{@"/bookmarksentry/get-entries": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getEntriesWithGroupId:(long long)groupId folderId:(long long)folderId start:(int)start end:(int)end orderByComparatorClassName:(NSString *)orderByComparatorClassName error:(NSError **)error {
	NSString *comparatorPrefix = @"-";
	NSString *comparatorValue = @"";

	if ([orderByComparatorClassName hasPrefix:@"com.liferay"]) {
		comparatorPrefix = @"%2B";
		comparatorValue = orderByComparatorClassName;
	}

	NSString *comparatorKey = [NSString stringWithFormat:@"%@orderByComparator", comparatorPrefix];

	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"folderId": @(folderId),
		@"start": @(start),
		@"end": @(end),
		comparatorKey: comparatorValue
	};

	NSDictionary *_command = @{@"/bookmarksentry/get-entries": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSNumber *)getEntriesCountWithGroupId:(long long)groupId folderId:(long long)folderId error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"folderId": @(folderId)
	};

	NSDictionary *_command = @{@"/bookmarksentry/get-entries-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSNumber *)getEntriesCountWithGroupId:(long long)groupId folderId:(long long)folderId status:(int)status error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"folderId": @(folderId),
		@"status": @(status)
	};

	NSDictionary *_command = @{@"/bookmarksentry/get-entries-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSDictionary *)getEntryWithEntryId:(long long)entryId error:(NSError **)error {
	NSDictionary *_params = @{
		@"entryId": @(entryId)
	};

	NSDictionary *_command = @{@"/bookmarksentry/get-entry": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSNumber *)getFoldersEntriesCountWithGroupId:(long long)groupId folderIds:(NSArray *)folderIds error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"folderIds": folderIds
	};

	NSDictionary *_command = @{@"/bookmarksentry/get-folders-entries-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSArray *)getGroupEntriesWithGroupId:(long long)groupId start:(int)start end:(int)end error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"start": @(start),
		@"end": @(end)
	};

	NSDictionary *_command = @{@"/bookmarksentry/get-group-entries": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getGroupEntriesWithGroupId:(long long)groupId userId:(long long)userId start:(int)start end:(int)end error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"userId": @(userId),
		@"start": @(start),
		@"end": @(end)
	};

	NSDictionary *_command = @{@"/bookmarksentry/get-group-entries": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getGroupEntriesWithGroupId:(long long)groupId userId:(long long)userId rootFolderId:(long long)rootFolderId start:(int)start end:(int)end error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"userId": @(userId),
		@"rootFolderId": @(rootFolderId),
		@"start": @(start),
		@"end": @(end)
	};

	NSDictionary *_command = @{@"/bookmarksentry/get-group-entries": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSNumber *)getGroupEntriesCountWithGroupId:(long long)groupId error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId)
	};

	NSDictionary *_command = @{@"/bookmarksentry/get-group-entries-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSNumber *)getGroupEntriesCountWithGroupId:(long long)groupId userId:(long long)userId error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"userId": @(userId)
	};

	NSDictionary *_command = @{@"/bookmarksentry/get-group-entries-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSNumber *)getGroupEntriesCountWithGroupId:(long long)groupId userId:(long long)userId rootFolderId:(long long)rootFolderId error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"userId": @(userId),
		@"rootFolderId": @(rootFolderId)
	};

	NSDictionary *_command = @{@"/bookmarksentry/get-group-entries-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSDictionary *)moveEntryWithEntryId:(long long)entryId parentFolderId:(long long)parentFolderId error:(NSError **)error {
	NSDictionary *_params = @{
		@"entryId": @(entryId),
		@"parentFolderId": @(parentFolderId)
	};

	NSDictionary *_command = @{@"/bookmarksentry/move-entry": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)moveEntryFromTrashWithEntryId:(long long)entryId parentFolderId:(long long)parentFolderId error:(NSError **)error {
	NSDictionary *_params = @{
		@"entryId": @(entryId),
		@"parentFolderId": @(parentFolderId)
	};

	NSDictionary *_command = @{@"/bookmarksentry/move-entry-from-trash": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)moveEntryToTrashWithEntryId:(long long)entryId error:(NSError **)error {
	NSDictionary *_params = @{
		@"entryId": @(entryId)
	};

	NSDictionary *_command = @{@"/bookmarksentry/move-entry-to-trash": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)openEntryWithEntry:(NSDictionary *)entry error:(NSError **)error {
	NSDictionary *_params = @{
		@"entry": entry
	};

	NSDictionary *_command = @{@"/bookmarksentry/open-entry": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)openEntryWithEntryId:(long long)entryId error:(NSError **)error {
	NSDictionary *_params = @{
		@"entryId": @(entryId)
	};

	NSDictionary *_command = @{@"/bookmarksentry/open-entry": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (void)restoreEntryFromTrashWithEntryId:(long long)entryId error:(NSError **)error {
	NSDictionary *_params = @{
		@"entryId": @(entryId)
	};

	NSDictionary *_command = @{@"/bookmarksentry/restore-entry-from-trash": _params};

	[self.session invoke:_command error:error];
}

- (NSDictionary *)searchWithGroupId:(long long)groupId creatorUserId:(long long)creatorUserId status:(int)status start:(int)start end:(int)end error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"creatorUserId": @(creatorUserId),
		@"status": @(status),
		@"start": @(start),
		@"end": @(end)
	};

	NSDictionary *_command = @{@"/bookmarksentry/search": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (void)subscribeEntryWithEntryId:(long long)entryId error:(NSError **)error {
	NSDictionary *_params = @{
		@"entryId": @(entryId)
	};

	NSDictionary *_command = @{@"/bookmarksentry/subscribe-entry": _params};

	[self.session invoke:_command error:error];
}

- (void)unsubscribeEntryWithEntryId:(long long)entryId error:(NSError **)error {
	NSDictionary *_params = @{
		@"entryId": @(entryId)
	};

	NSDictionary *_command = @{@"/bookmarksentry/unsubscribe-entry": _params};

	[self.session invoke:_command error:error];
}

- (NSDictionary *)updateEntryWithEntryId:(long long)entryId groupId:(long long)groupId folderId:(long long)folderId name:(NSString *)name url:(NSString *)url description:(NSString *)description serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"entryId": @(entryId),
		@"groupId": @(groupId),
		@"folderId": @(folderId),
		@"name": name,
		@"url": url,
		@"description": description,
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/bookmarksentry/update-entry": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

@end