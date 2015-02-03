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

#import "LRGroupService_v62.h"
#import "LROAuth.h"
#import "OAuth.h"

/**
 * @author Bruno Farache
 */
@interface OAuthTest : BaseTest
@end

@implementation OAuthTest

- (void)testOAuth {
	OAuth *oauth = [[OAuth alloc] init];

	LRSession *session = [[LRSession alloc]
		initWithServer:@"http://localhost:8080" authentication:oauth];

	LRGroupService_v62 *service = [[LRGroupService_v62 alloc]
		initWithSession:session];

	NSError *error;

	NSArray *sites = [service getUserSites:&error];

	NSLog(@"%@", sites);
}

@end