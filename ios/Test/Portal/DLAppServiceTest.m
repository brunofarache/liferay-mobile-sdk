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

#import "DLAppServiceTest.h"
#import "LRBatchSession.h"
#import "LRDLAppService_v62.h"

/**
 * @author Jose Navarro
 */
@implementation DLAppServiceTest

- (void)setUp {
	[super setUp];

	_repositoryId = [self.settings[@"repositoryId"] longLongValue];

	self.cleanUpFolderIds = [[NSMutableArray alloc] init];
}

- (void)tearDown {
	[super tearDown];

	if ([self.cleanUpFolderIds count] > 0) {
		[self _deleteFoldersBatch:self.cleanUpFolderIds];
	}
}

- (void)testAddFolder {

	LRDLAppService_v62 *service =
		[[LRDLAppService_v62 alloc] initWithSession:self.session];

	NSString *name =
		[NSString stringWithFormat:@"test-name-%@", [[NSUUID UUID] UUIDString]];

	NSString *description =
		[NSString stringWithFormat:@"test-desc-%@", [[NSUUID UUID] UUIDString]];

	NSError *error;
	NSDictionary *result = [service addFolderWithRepositoryId:self.repositoryId
		parentFolderId:0 name:name description:description serviceContext:@{}
		error:&error];

	XCTAssertNil(error);
	XCTAssertNotNil(result);

	XCTAssertEqualObjects(name, result[@"name"]);
	XCTAssertEqualObjects(description, result[@"description"]);

	long long folderId = [result[@"folderId"] longLongValue];

	[self _getFolder:folderId exists:YES];
	[self.cleanUpFolderIds addObject:@(folderId)];
}

- (void)testAddFoldersBatch {
	LRBatchSession *batch = [[LRBatchSession alloc] init:self.session];
	LRDLAppService_v62 *service =
		[[LRDLAppService_v62 alloc] initWithSession:batch];

	NSString *uuid = [[NSUUID UUID] UUIDString];
	NSString *name1 = [NSString stringWithFormat:@"1-test-name-%@", uuid];

	uuid = [[NSUUID UUID] UUIDString];
	NSString *name2 = [NSString stringWithFormat:@"2-test-name-%@", uuid];

	uuid = [[NSUUID UUID] UUIDString];
	NSString *description1 =
		[NSString stringWithFormat:@"1-test-desc-%@", uuid];

	uuid = [[NSUUID UUID] UUIDString];
	NSString *description2 =
		[NSString stringWithFormat:@"2-test-desc-%@", uuid];

	NSError *error;
	[service addFolderWithRepositoryId:self.repositoryId parentFolderId:0
		name:name1 description:description1 serviceContext:@{} error:&error];

	XCTAssertNil(error);

	[service addFolderWithRepositoryId:self.repositoryId parentFolderId:0
		name:name2 description:description2 serviceContext:@{} error:&error];

	XCTAssertNil(error);
	NSArray *result = [batch invoke:&error];

	XCTAssertNil(error);
	XCTAssertNotNil(result);
	XCTAssertEqual(2, [result count]);

	XCTAssertEqualObjects(name1, result[0][@"name"]);
	XCTAssertEqualObjects(description1, result[0][@"description"]);

	XCTAssertEqualObjects(name2, result[1][@"name"]);
	XCTAssertEqualObjects(description2, result[1][@"description"]);

	NSArray *ids = [result valueForKey:@"folderId"];

	[self _getFolders:ids exists:YES];

	[self.cleanUpFolderIds addObjectsFromArray:ids];
}

- (void)testGetFoldersWithComparator {
	[self _testGetFoldersWithComparator:
		@"com.liferay.portlet.documentlibrary.util.comparator.FolderIdComparator"];
}

- (void)testGetFoldersWithNullComparator {
	[self _testGetFoldersWithComparator:nil];
}

- (void)_deleteFolder:(long long)folderId {
	LRDLAppService_v62 *service =
		[[LRDLAppService_v62 alloc] initWithSession:self.session];

	NSError *error;

	[service deleteFolderWithFolderId:folderId error:&error];

	XCTAssertNil(error);

	[self _getFolder:folderId exists:NO];
}

- (void)_deleteFoldersBatch:(NSArray *)folderIds {
	LRBatchSession *batch = [[LRBatchSession alloc] init:self.session];

	LRDLAppService_v62 *service =
		[[LRDLAppService_v62 alloc] initWithSession:batch];

	NSError *error;

	for (id folderId in folderIds) {
		[service deleteFolderWithFolderId:[folderId longLongValue]
			error:&error];

		XCTAssertNil(error);
	}

	NSArray *results = [batch invoke:&error];

	XCTAssertNil(error);
	XCTAssertNotNil(results);
	XCTAssertEqual([folderIds count], [results count]);

	[self _getFolders:folderIds exists:NO];
}

- (void)_getFolder:(long long)folderId exists:(BOOL)exists {
	LRDLAppService_v62 *service =
		[[LRDLAppService_v62 alloc] initWithSession:self.session];

	NSError *error;
	NSDictionary *result =
		[service getFolderWithFolderId:folderId error:&error];

	if (exists) {
		XCTAssertNil(error);
		XCTAssertNotNil(result);
		XCTAssertEqualObjects(result[@"folderId"], @(folderId));
	}
	else {
		XCTAssertNil(result);
		XCTAssertNotNil(error);

		NSString *description = [error localizedDescription];
		XCTAssertTrue(
			[description hasPrefix:@"No DLFolder exists with the primary key"]);
	}
}

- (void)_getFolders:(NSArray *)folderIds exists:(BOOL)exists {
	LRBatchSession *batch = [[LRBatchSession alloc] init:self.session];

	LRDLAppService_v62 *service =
		[[LRDLAppService_v62 alloc] initWithSession:batch];

	NSError *error;

	for (id folderId in folderIds) {
		[service getFolderWithFolderId:[folderId longLongValue] error:&error];
		XCTAssertNil(error);
	}

	NSArray *results = [batch invoke:&error];

	if (exists) {
		XCTAssertNil(error);
		XCTAssertNotNil(results);
		XCTAssertEqual([folderIds count], [results count]);

		for (int i = 0; i < [results count]; i++) {
			XCTAssertEqualObjects(results[i][@"folderId"], folderIds[i]);
		}
	}
	else {
		XCTAssertNil(results);
		XCTAssertNotNil(error);

		NSString *description = [error localizedDescription];
		XCTAssertTrue(
			[description hasPrefix:@"No DLFolder exists with the primary key"]);
	}
}

- (void)_testGetFoldersWithComparator:(NSString *)comparatorClassName {
	LRDLAppService_v62 *service =
		[[LRDLAppService_v62 alloc] initWithSession:self.session];

	NSError *error;

	NSArray *existingFolders =
		[service getFoldersWithRepositoryId:self.repositoryId parentFolderId:0
			start:0 end:5 obcClassName:comparatorClassName error:&error];

	XCTAssertNil(error);

	NSString *name1 =
		[NSString stringWithFormat:@"name-1-%@", [[NSUUID UUID] UUIDString]];
	NSString *name2 =
		[NSString stringWithFormat:@"name-2-%@", [[NSUUID UUID] UUIDString]];

	[service addFolderWithRepositoryId:self.repositoryId
		parentFolderId:0 name:name1 description:[[NSUUID UUID] UUIDString]
		serviceContext:@{} error:&error];
	XCTAssertNil(error);

	[service addFolderWithRepositoryId:self.repositoryId
		parentFolderId:0 name:name2 description:[[NSUUID UUID] UUIDString]
		serviceContext:@{} error:&error];
	XCTAssertNil(error);

	NSArray *newFolders =
		[service getFoldersWithRepositoryId:self.repositoryId parentFolderId:0
			start:0 end:5 obcClassName:comparatorClassName error:&error];
	XCTAssertNil(error);

	XCTAssertEqual([existingFolders count] + 2, [newFolders count]);

	NSDictionary *folder1 = newFolders[[newFolders count] - 2];
	NSDictionary *folder2 = newFolders[[newFolders count] - 1];

	XCTAssertEqualObjects(name1, folder1[@"name"]);
	XCTAssertEqualObjects(name2, folder2[@"name"]);

	[self.cleanUpFolderIds addObject:folder1[@"folderId"]];
	[self.cleanUpFolderIds addObject:folder2[@"folderId"]];
}


@end