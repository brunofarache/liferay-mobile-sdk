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

#import "LRContactService_v62.h"

/**
 * @author Bruno Farache
 */
@implementation LRContactService_v62

- (NSDictionary *)getContactWithContactId:(long long)contactId error:(NSError **)error {
	NSDictionary *_params = @{
		@"contactId": @(contactId)
	};

	NSDictionary *_command = @{@"/contact/get-contact": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSArray *)getContactsWithClassNameId:(long long)classNameId classPK:(long long)classPK start:(int)start end:(int)end orderByComparatorClassName:(NSString *)orderByComparatorClassName error:(NSError **)error {
	NSString *comparatorPrefix = @"-";
	NSString *comparatorValue = @"";

	if ([orderByComparatorClassName hasPrefix:@"com.liferay"]) {
		comparatorPrefix = @"%2B";
		comparatorValue = orderByComparatorClassName;
	}

	NSString *comparatorKey = [NSString stringWithFormat:@"%@orderByComparator", comparatorPrefix];

	NSDictionary *_params = @{
		@"classNameId": @(classNameId),
		@"classPK": @(classPK),
		@"start": @(start),
		@"end": @(end),
		comparatorKey: comparatorValue
	};

	NSDictionary *_command = @{@"/contact/get-contacts": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSNumber *)getContactsCountWithClassNameId:(long long)classNameId classPK:(long long)classPK error:(NSError **)error {
	NSDictionary *_params = @{
		@"classNameId": @(classNameId),
		@"classPK": @(classPK)
	};

	NSDictionary *_command = @{@"/contact/get-contacts-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

@end