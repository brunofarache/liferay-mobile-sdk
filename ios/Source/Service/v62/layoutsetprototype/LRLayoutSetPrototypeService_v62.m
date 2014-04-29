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

#import "LRLayoutSetPrototypeService_v62.h"

/**
 * @author Bruno Farache
 */
@implementation LRLayoutSetPrototypeService_v62

- (NSDictionary *)addLayoutSetPrototypeWithNameMap:(NSDictionary *)nameMap description:(NSString *)description active:(BOOL)active layoutsUpdateable:(BOOL)layoutsUpdateable serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"nameMap": nameMap,
		@"description": description,
		@"active": @(active),
		@"layoutsUpdateable": @(layoutsUpdateable),
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/layoutsetprototype/add-layout-set-prototype": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (void)deleteLayoutSetPrototypeWithLayoutSetPrototypeId:(long long)layoutSetPrototypeId error:(NSError **)error {
	NSDictionary *_params = @{
		@"layoutSetPrototypeId": @(layoutSetPrototypeId)
	};

	NSDictionary *_command = @{@"/layoutsetprototype/delete-layout-set-prototype": _params};

	[self.session invoke:_command error:error];
}

- (NSDictionary *)getLayoutSetPrototypeWithLayoutSetPrototypeId:(long long)layoutSetPrototypeId error:(NSError **)error {
	NSDictionary *_params = @{
		@"layoutSetPrototypeId": @(layoutSetPrototypeId)
	};

	NSDictionary *_command = @{@"/layoutsetprototype/get-layout-set-prototype": _params};

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

	NSDictionary *_command = @{@"/layoutsetprototype/search": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSDictionary *)updateLayoutSetPrototypeWithLayoutSetPrototypeId:(long long)layoutSetPrototypeId settings:(NSString *)settings error:(NSError **)error {
	NSDictionary *_params = @{
		@"layoutSetPrototypeId": @(layoutSetPrototypeId),
		@"settings": settings
	};

	NSDictionary *_command = @{@"/layoutsetprototype/update-layout-set-prototype": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)updateLayoutSetPrototypeWithLayoutSetPrototypeId:(long long)layoutSetPrototypeId nameMap:(NSDictionary *)nameMap description:(NSString *)description active:(BOOL)active layoutsUpdateable:(BOOL)layoutsUpdateable serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"layoutSetPrototypeId": @(layoutSetPrototypeId),
		@"nameMap": nameMap,
		@"description": description,
		@"active": @(active),
		@"layoutsUpdateable": @(layoutsUpdateable),
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/layoutsetprototype/update-layout-set-prototype": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

@end