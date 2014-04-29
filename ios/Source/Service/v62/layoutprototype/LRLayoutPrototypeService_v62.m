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

#import "LRLayoutPrototypeService_v62.h"

/**
 * @author Bruno Farache
 */
@implementation LRLayoutPrototypeService_v62

- (NSDictionary *)addLayoutPrototypeWithNameMap:(NSDictionary *)nameMap description:(NSString *)description active:(BOOL)active error:(NSError **)error {
	NSDictionary *_params = @{
		@"nameMap": nameMap,
		@"description": description,
		@"active": @(active)
	};

	NSDictionary *_command = @{@"/layoutprototype/add-layout-prototype": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)addLayoutPrototypeWithNameMap:(NSDictionary *)nameMap description:(NSString *)description active:(BOOL)active serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"nameMap": nameMap,
		@"description": description,
		@"active": @(active),
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/layoutprototype/add-layout-prototype": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (void)deleteLayoutPrototypeWithLayoutPrototypeId:(long long)layoutPrototypeId error:(NSError **)error {
	NSDictionary *_params = @{
		@"layoutPrototypeId": @(layoutPrototypeId)
	};

	NSDictionary *_command = @{@"/layoutprototype/delete-layout-prototype": _params};

	[self.session invoke:_command error:error];
}

- (NSDictionary *)getLayoutPrototypeWithLayoutPrototypeId:(long long)layoutPrototypeId error:(NSError **)error {
	NSDictionary *_params = @{
		@"layoutPrototypeId": @(layoutPrototypeId)
	};

	NSDictionary *_command = @{@"/layoutprototype/get-layout-prototype": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSArray *)searchWithCompanyId:(long long)companyId active:(NSDictionary *)active obcClassName:(NSString *)obcClassName error:(NSError **)error {
	NSString *comparatorPrefix = @"-";
	NSString *comparatorValue = @"";

	if ([obcClassName hasPrefix:@"com.liferay"]) {
		comparatorPrefix = @"%2B";
		comparatorValue = obcClassName;
	}

	NSString *comparatorKey = [NSString stringWithFormat:@"%@obc", comparatorPrefix];

	NSDictionary *_params = @{
		@"companyId": @(companyId),
		@"active": active,
		comparatorKey: comparatorValue
	};

	NSDictionary *_command = @{@"/layoutprototype/search": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSDictionary *)updateLayoutPrototypeWithLayoutPrototypeId:(long long)layoutPrototypeId nameMap:(NSDictionary *)nameMap description:(NSString *)description active:(BOOL)active error:(NSError **)error {
	NSDictionary *_params = @{
		@"layoutPrototypeId": @(layoutPrototypeId),
		@"nameMap": nameMap,
		@"description": description,
		@"active": @(active)
	};

	NSDictionary *_command = @{@"/layoutprototype/update-layout-prototype": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)updateLayoutPrototypeWithLayoutPrototypeId:(long long)layoutPrototypeId nameMap:(NSDictionary *)nameMap description:(NSString *)description active:(BOOL)active serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"layoutPrototypeId": @(layoutPrototypeId),
		@"nameMap": nameMap,
		@"description": description,
		@"active": @(active),
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/layoutprototype/update-layout-prototype": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

@end