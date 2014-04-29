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

#import "LRDDMStructureService_v62.h"

/**
 * @author Bruno Farache
 */
@implementation LRDDMStructureService_v62

- (NSDictionary *)addStructureWithGroupId:(long long)groupId parentStructureId:(long long)parentStructureId classNameId:(long long)classNameId structureKey:(NSString *)structureKey nameMap:(NSDictionary *)nameMap descriptionMap:(NSDictionary *)descriptionMap xsd:(NSString *)xsd storageType:(NSString *)storageType type:(int)type serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"parentStructureId": @(parentStructureId),
		@"classNameId": @(classNameId),
		@"structureKey": structureKey,
		@"nameMap": nameMap,
		@"descriptionMap": descriptionMap,
		@"xsd": xsd,
		@"storageType": storageType,
		@"type": @(type),
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddmstructure/add-structure": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)addStructureWithUserId:(long long)userId groupId:(long long)groupId parentStructureKey:(NSString *)parentStructureKey classNameId:(long long)classNameId structureKey:(NSString *)structureKey nameMap:(NSDictionary *)nameMap descriptionMap:(NSDictionary *)descriptionMap xsd:(NSString *)xsd storageType:(NSString *)storageType type:(int)type serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"userId": @(userId),
		@"groupId": @(groupId),
		@"parentStructureKey": parentStructureKey,
		@"classNameId": @(classNameId),
		@"structureKey": structureKey,
		@"nameMap": nameMap,
		@"descriptionMap": descriptionMap,
		@"xsd": xsd,
		@"storageType": storageType,
		@"type": @(type),
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddmstructure/add-structure": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)addStructureWithUserId:(long long)userId groupId:(long long)groupId classNameId:(long long)classNameId nameMap:(NSDictionary *)nameMap descriptionMap:(NSDictionary *)descriptionMap xsd:(NSString *)xsd serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"userId": @(userId),
		@"groupId": @(groupId),
		@"classNameId": @(classNameId),
		@"nameMap": nameMap,
		@"descriptionMap": descriptionMap,
		@"xsd": xsd,
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddmstructure/add-structure": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)copyStructureWithStructureId:(long long)structureId serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"structureId": @(structureId),
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddmstructure/copy-structure": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)copyStructureWithStructureId:(long long)structureId nameMap:(NSDictionary *)nameMap descriptionMap:(NSDictionary *)descriptionMap serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"structureId": @(structureId),
		@"nameMap": nameMap,
		@"descriptionMap": descriptionMap,
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddmstructure/copy-structure": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (void)deleteStructureWithStructureId:(long long)structureId error:(NSError **)error {
	NSDictionary *_params = @{
		@"structureId": @(structureId)
	};

	NSDictionary *_command = @{@"/ddmstructure/delete-structure": _params};

	[self.session invoke:_command error:error];
}

- (NSDictionary *)fetchStructureWithGroupId:(long long)groupId classNameId:(long long)classNameId structureKey:(NSString *)structureKey error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"classNameId": @(classNameId),
		@"structureKey": structureKey
	};

	NSDictionary *_command = @{@"/ddmstructure/fetch-structure": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)getStructureWithStructureId:(long long)structureId error:(NSError **)error {
	NSDictionary *_params = @{
		@"structureId": @(structureId)
	};

	NSDictionary *_command = @{@"/ddmstructure/get-structure": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)getStructureWithGroupId:(long long)groupId classNameId:(long long)classNameId structureKey:(NSString *)structureKey error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"classNameId": @(classNameId),
		@"structureKey": structureKey
	};

	NSDictionary *_command = @{@"/ddmstructure/get-structure": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)getStructureWithGroupId:(long long)groupId classNameId:(long long)classNameId structureKey:(NSString *)structureKey includeGlobalStructures:(BOOL)includeGlobalStructures error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"classNameId": @(classNameId),
		@"structureKey": structureKey,
		@"includeGlobalStructures": @(includeGlobalStructures)
	};

	NSDictionary *_command = @{@"/ddmstructure/get-structure": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSArray *)getStructuresWithGroupId:(long long)groupId error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId)
	};

	NSDictionary *_command = @{@"/ddmstructure/get-structures": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getStructuresWithGroupIds:(NSArray *)groupIds error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupIds": groupIds
	};

	NSDictionary *_command = @{@"/ddmstructure/get-structures": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)searchWithCompanyId:(long long)companyId groupIds:(NSArray *)groupIds classNameIds:(NSArray *)classNameIds name:(NSString *)name description:(NSString *)description storageType:(NSString *)storageType type:(int)type andOperator:(BOOL)andOperator start:(int)start end:(int)end orderByComparatorClassName:(NSString *)orderByComparatorClassName error:(NSError **)error {
	NSString *comparatorPrefix = @"-";
	NSString *comparatorValue = @"";

	if ([orderByComparatorClassName hasPrefix:@"com.liferay"]) {
		comparatorPrefix = @"%2B";
		comparatorValue = orderByComparatorClassName;
	}

	NSString *comparatorKey = [NSString stringWithFormat:@"%@orderByComparator", comparatorPrefix];

	NSDictionary *_params = @{
		@"companyId": @(companyId),
		@"groupIds": groupIds,
		@"classNameIds": classNameIds,
		@"name": name,
		@"description": description,
		@"storageType": storageType,
		@"type": @(type),
		@"andOperator": @(andOperator),
		@"start": @(start),
		@"end": @(end),
		comparatorKey: comparatorValue
	};

	NSDictionary *_command = @{@"/ddmstructure/search": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)searchWithCompanyId:(long long)companyId groupIds:(NSArray *)groupIds classNameIds:(NSArray *)classNameIds keywords:(NSString *)keywords start:(int)start end:(int)end orderByComparatorClassName:(NSString *)orderByComparatorClassName error:(NSError **)error {
	NSString *comparatorPrefix = @"-";
	NSString *comparatorValue = @"";

	if ([orderByComparatorClassName hasPrefix:@"com.liferay"]) {
		comparatorPrefix = @"%2B";
		comparatorValue = orderByComparatorClassName;
	}

	NSString *comparatorKey = [NSString stringWithFormat:@"%@orderByComparator", comparatorPrefix];

	NSDictionary *_params = @{
		@"companyId": @(companyId),
		@"groupIds": groupIds,
		@"classNameIds": classNameIds,
		@"keywords": keywords,
		@"start": @(start),
		@"end": @(end),
		comparatorKey: comparatorValue
	};

	NSDictionary *_command = @{@"/ddmstructure/search": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSNumber *)searchCountWithCompanyId:(long long)companyId groupIds:(NSArray *)groupIds classNameIds:(NSArray *)classNameIds keywords:(NSString *)keywords error:(NSError **)error {
	NSDictionary *_params = @{
		@"companyId": @(companyId),
		@"groupIds": groupIds,
		@"classNameIds": classNameIds,
		@"keywords": keywords
	};

	NSDictionary *_command = @{@"/ddmstructure/search-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSNumber *)searchCountWithCompanyId:(long long)companyId groupIds:(NSArray *)groupIds classNameIds:(NSArray *)classNameIds name:(NSString *)name description:(NSString *)description storageType:(NSString *)storageType type:(int)type andOperator:(BOOL)andOperator error:(NSError **)error {
	NSDictionary *_params = @{
		@"companyId": @(companyId),
		@"groupIds": groupIds,
		@"classNameIds": classNameIds,
		@"name": name,
		@"description": description,
		@"storageType": storageType,
		@"type": @(type),
		@"andOperator": @(andOperator)
	};

	NSDictionary *_command = @{@"/ddmstructure/search-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSDictionary *)updateStructureWithStructureId:(long long)structureId parentStructureId:(long long)parentStructureId nameMap:(NSDictionary *)nameMap descriptionMap:(NSDictionary *)descriptionMap xsd:(NSString *)xsd serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"structureId": @(structureId),
		@"parentStructureId": @(parentStructureId),
		@"nameMap": nameMap,
		@"descriptionMap": descriptionMap,
		@"xsd": xsd,
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddmstructure/update-structure": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)updateStructureWithGroupId:(long long)groupId parentStructureId:(long long)parentStructureId classNameId:(long long)classNameId structureKey:(NSString *)structureKey nameMap:(NSDictionary *)nameMap descriptionMap:(NSDictionary *)descriptionMap xsd:(NSString *)xsd serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"parentStructureId": @(parentStructureId),
		@"classNameId": @(classNameId),
		@"structureKey": structureKey,
		@"nameMap": nameMap,
		@"descriptionMap": descriptionMap,
		@"xsd": xsd,
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddmstructure/update-structure": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

@end