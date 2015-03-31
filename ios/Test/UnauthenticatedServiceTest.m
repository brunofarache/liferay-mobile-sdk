/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
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

#import "BaseTest.h"
#import "LRBasicAuthentication.h"
#import "LRGroupService_v62.h"
#import "TRVSMonitor.h"

/**
 * @author Jose M. Navarro
 */
@interface UnauthenticatedServiceTest : BaseTest
@end

@implementation UnauthenticatedServiceTest

- (void)testUnauthenticatedGetUserSites {
	LRSession *session = [[LRSession alloc]
		initWithServer:self.session.server];

	LRGroupService_v62 *service = [[LRGroupService_v62 alloc]
		initWithSession:session];

	NSError *error;
	[service getUserSites:&error];

	XCTAssertNotNil(error);
	XCTAssertEqualObjects(
	  error.localizedDescription, @"Authenticated access required");
}

- (void)testSharedSessionId {
	TRVSMonitor *monitor = [TRVSMonitor monitor];
	__block NSArray *groups;
	__block NSError *error;

	LRSession *session = [[LRSession alloc] initWithSession:self.session];

	[session
		onSuccess:^(id result) {
			groups = result;
			[monitor signal];
		}
	 	onFailure:^(NSError *e) {
			error = e;
			[monitor signal];
		}
	 ];

	LRGroupService_v62 *service = [[LRGroupService_v62 alloc]
		initWithSession:session];

	[service getUserSites:&error];
	[monitor wait];

	XCTAssertNil(error);
	XCTAssertEqual(2, [groups count]);

	session = [[LRSession alloc] initWithServer:self.session.server authentication:[[LRBasicAuthentication alloc] initWithUsername:@"bruno.farache@liferay.com" password:@"test"]];

	[session
		onSuccess:^(id result) {
			groups = result;
			[monitor signal];
		}
	 	onFailure:^(NSError *e) {
			error = e;
			[monitor signal];
		}
	 ];

	service = [[LRGroupService_v62 alloc] initWithSession:session];
	[service getUserSites:&error];
	[monitor wait];

	XCTAssertNil(error);
	XCTAssertEqual(1, [groups count]);
}


@end