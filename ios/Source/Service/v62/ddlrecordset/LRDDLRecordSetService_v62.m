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

#import "LRDDLRecordSetService_v62.h"

/**
 * @author Bruno Farache
 */
@implementation LRDDLRecordSetService_v62

- (NSDictionary *)addRecordSetWithGroupId:(long long)groupId ddmStructureId:(long long)ddmStructureId recordSetKey:(NSString *)recordSetKey nameMap:(NSDictionary *)nameMap descriptionMap:(NSDictionary *)descriptionMap minDisplayRows:(int)minDisplayRows scope:(int)scope serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"ddmStructureId": @(ddmStructureId),
		@"recordSetKey": recordSetKey,
		@"nameMap": nameMap,
		@"descriptionMap": descriptionMap,
		@"minDisplayRows": @(minDisplayRows),
		@"scope": @(scope),
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddlrecordset/add-record-set": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (void)deleteRecordSetWithRecordSetId:(long long)recordSetId error:(NSError **)error {
	NSDictionary *_params = @{
		@"recordSetId": @(recordSetId)
	};

	NSDictionary *_command = @{@"/ddlrecordset/delete-record-set": _params};

	[self.session invoke:_command error:error];
}

- (NSDictionary *)getRecordSetWithRecordSetId:(long long)recordSetId error:(NSError **)error {
	NSDictionary *_params = @{
		@"recordSetId": @(recordSetId)
	};

	NSDictionary *_command = @{@"/ddlrecordset/get-record-set": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSArray *)searchWithCompanyId:(long long)companyId groupId:(long long)groupId keywords:(NSString *)keywords scope:(int)scope start:(int)start end:(int)end orderByComparatorClassName:(NSString *)orderByComparatorClassName error:(NSError **)error {
	NSString *comparatorPrefix = @"-";
	NSString *comparatorValue = @"";

	if ([orderByComparatorClassName hasPrefix:@"com.liferay"]) {
		comparatorPrefix = @"%2B";
		comparatorValue = orderByComparatorClassName;
	}

	NSString *comparatorKey = [NSString stringWithFormat:@"%@orderByComparator", comparatorPrefix];

	NSDictionary *_params = @{
		@"companyId": @(companyId),
		@"groupId": @(groupId),
		@"keywords": keywords,
		@"scope": @(scope),
		@"start": @(start),
		@"end": @(end),
		comparatorKey: comparatorValue
	};

	NSDictionary *_command = @{@"/ddlrecordset/search": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)searchWithCompanyId:(long long)companyId groupId:(long long)groupId name:(NSString *)name description:(NSString *)description scope:(int)scope andOperator:(BOOL)andOperator start:(int)start end:(int)end orderByComparatorClassName:(NSString *)orderByComparatorClassName error:(NSError **)error {
	NSString *comparatorPrefix = @"-";
	NSString *comparatorValue = @"";

	if ([orderByComparatorClassName hasPrefix:@"com.liferay"]) {
		comparatorPrefix = @"%2B";
		comparatorValue = orderByComparatorClassName;
	}

	NSString *comparatorKey = [NSString stringWithFormat:@"%@orderByComparator", comparatorPrefix];

	NSDictionary *_params = @{
		@"companyId": @(companyId),
		@"groupId": @(groupId),
		@"name": name,
		@"description": description,
		@"scope": @(scope),
		@"andOperator": @(andOperator),
		@"start": @(start),
		@"end": @(end),
		comparatorKey: comparatorValue
	};

	NSDictionary *_command = @{@"/ddlrecordset/search": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSNumber *)searchCountWithCompanyId:(long long)companyId groupId:(long long)groupId keywords:(NSString *)keywords scope:(int)scope error:(NSError **)error {
	NSDictionary *_params = @{
		@"companyId": @(companyId),
		@"groupId": @(groupId),
		@"keywords": keywords,
		@"scope": @(scope)
	};

	NSDictionary *_command = @{@"/ddlrecordset/search-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSNumber *)searchCountWithCompanyId:(long long)companyId groupId:(long long)groupId name:(NSString *)name description:(NSString *)description scope:(int)scope andOperator:(BOOL)andOperator error:(NSError **)error {
	NSDictionary *_params = @{
		@"companyId": @(companyId),
		@"groupId": @(groupId),
		@"name": name,
		@"description": description,
		@"scope": @(scope),
		@"andOperator": @(andOperator)
	};

	NSDictionary *_command = @{@"/ddlrecordset/search-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSDictionary *)updateMinDisplayRowsWithRecordSetId:(long long)recordSetId minDisplayRows:(int)minDisplayRows serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"recordSetId": @(recordSetId),
		@"minDisplayRows": @(minDisplayRows),
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddlrecordset/update-min-display-rows": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)updateRecordSetWithRecordSetId:(long long)recordSetId ddmStructureId:(long long)ddmStructureId nameMap:(NSDictionary *)nameMap descriptionMap:(NSDictionary *)descriptionMap minDisplayRows:(int)minDisplayRows serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"recordSetId": @(recordSetId),
		@"ddmStructureId": @(ddmStructureId),
		@"nameMap": nameMap,
		@"descriptionMap": descriptionMap,
		@"minDisplayRows": @(minDisplayRows),
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddlrecordset/update-record-set": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)updateRecordSetWithGroupId:(long long)groupId ddmStructureId:(long long)ddmStructureId recordSetKey:(NSString *)recordSetKey nameMap:(NSDictionary *)nameMap descriptionMap:(NSDictionary *)descriptionMap minDisplayRows:(int)minDisplayRows serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"ddmStructureId": @(ddmStructureId),
		@"recordSetKey": recordSetKey,
		@"nameMap": nameMap,
		@"descriptionMap": descriptionMap,
		@"minDisplayRows": @(minDisplayRows),
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddlrecordset/update-record-set": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

@end