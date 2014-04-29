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

#import "LRDDMTemplateService_v62.h"

/**
 * @author Bruno Farache
 */
@implementation LRDDMTemplateService_v62

- (NSDictionary *)addTemplateWithGroupId:(long long)groupId classNameId:(long long)classNameId classPK:(long long)classPK nameMap:(NSDictionary *)nameMap descriptionMap:(NSDictionary *)descriptionMap type:(NSString *)type mode:(NSString *)mode language:(NSString *)language script:(NSString *)script serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"classNameId": @(classNameId),
		@"classPK": @(classPK),
		@"nameMap": nameMap,
		@"descriptionMap": descriptionMap,
		@"type": type,
		@"mode": mode,
		@"language": language,
		@"script": script,
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddmtemplate/add-template": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)addTemplateWithGroupId:(long long)groupId classNameId:(long long)classNameId classPK:(long long)classPK templateKey:(NSString *)templateKey nameMap:(NSDictionary *)nameMap descriptionMap:(NSDictionary *)descriptionMap type:(NSString *)type mode:(NSString *)mode language:(NSString *)language script:(NSString *)script cacheable:(BOOL)cacheable smallImage:(BOOL)smallImage smallImageURL:(NSString *)smallImageURL smallImageFile:(NSDictionary *)smallImageFile serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"classNameId": @(classNameId),
		@"classPK": @(classPK),
		@"templateKey": templateKey,
		@"nameMap": nameMap,
		@"descriptionMap": descriptionMap,
		@"type": type,
		@"mode": mode,
		@"language": language,
		@"script": script,
		@"cacheable": @(cacheable),
		@"smallImage": @(smallImage),
		@"smallImageURL": smallImageURL,
		@"smallImageFile": smallImageFile,
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddmtemplate/add-template": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)copyTemplateWithTemplateId:(long long)templateId serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"templateId": @(templateId),
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddmtemplate/copy-template": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)copyTemplateWithTemplateId:(long long)templateId nameMap:(NSDictionary *)nameMap descriptionMap:(NSDictionary *)descriptionMap serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"templateId": @(templateId),
		@"nameMap": nameMap,
		@"descriptionMap": descriptionMap,
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddmtemplate/copy-template": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSArray *)copyTemplatesWithClassNameId:(long long)classNameId classPK:(long long)classPK newClassPK:(long long)newClassPK type:(NSString *)type serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"classNameId": @(classNameId),
		@"classPK": @(classPK),
		@"newClassPK": @(newClassPK),
		@"type": type,
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddmtemplate/copy-templates": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (void)deleteTemplateWithTemplateId:(long long)templateId error:(NSError **)error {
	NSDictionary *_params = @{
		@"templateId": @(templateId)
	};

	NSDictionary *_command = @{@"/ddmtemplate/delete-template": _params};

	[self.session invoke:_command error:error];
}

- (NSDictionary *)fetchTemplateWithGroupId:(long long)groupId classNameId:(long long)classNameId templateKey:(NSString *)templateKey error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"classNameId": @(classNameId),
		@"templateKey": templateKey
	};

	NSDictionary *_command = @{@"/ddmtemplate/fetch-template": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)getTemplateWithTemplateId:(long long)templateId error:(NSError **)error {
	NSDictionary *_params = @{
		@"templateId": @(templateId)
	};

	NSDictionary *_command = @{@"/ddmtemplate/get-template": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)getTemplateWithGroupId:(long long)groupId classNameId:(long long)classNameId templateKey:(NSString *)templateKey error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"classNameId": @(classNameId),
		@"templateKey": templateKey
	};

	NSDictionary *_command = @{@"/ddmtemplate/get-template": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)getTemplateWithGroupId:(long long)groupId classNameId:(long long)classNameId templateKey:(NSString *)templateKey includeGlobalTemplates:(BOOL)includeGlobalTemplates error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"classNameId": @(classNameId),
		@"templateKey": templateKey,
		@"includeGlobalTemplates": @(includeGlobalTemplates)
	};

	NSDictionary *_command = @{@"/ddmtemplate/get-template": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSArray *)getTemplatesWithGroupId:(long long)groupId classNameId:(long long)classNameId error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"classNameId": @(classNameId)
	};

	NSDictionary *_command = @{@"/ddmtemplate/get-templates": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getTemplatesWithGroupId:(long long)groupId classNameId:(long long)classNameId classPK:(long long)classPK error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"classNameId": @(classNameId),
		@"classPK": @(classPK)
	};

	NSDictionary *_command = @{@"/ddmtemplate/get-templates": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getTemplatesWithGroupId:(long long)groupId classNameId:(long long)classNameId classPK:(long long)classPK type:(NSString *)type error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"classNameId": @(classNameId),
		@"classPK": @(classPK),
		@"type": type
	};

	NSDictionary *_command = @{@"/ddmtemplate/get-templates": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getTemplatesWithGroupId:(long long)groupId classNameId:(long long)classNameId classPK:(long long)classPK type:(NSString *)type mode:(NSString *)mode error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"classNameId": @(classNameId),
		@"classPK": @(classPK),
		@"type": type,
		@"mode": mode
	};

	NSDictionary *_command = @{@"/ddmtemplate/get-templates": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getTemplatesByClassPkWithGroupId:(long long)groupId classPK:(long long)classPK error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"classPK": @(classPK)
	};

	NSDictionary *_command = @{@"/ddmtemplate/get-templates-by-class-pk": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getTemplatesByStructureClassNameIdWithGroupId:(long long)groupId structureClassNameId:(long long)structureClassNameId start:(int)start end:(int)end orderByComparatorClassName:(NSString *)orderByComparatorClassName error:(NSError **)error {
	NSString *comparatorPrefix = @"-";
	NSString *comparatorValue = @"";

	if ([orderByComparatorClassName hasPrefix:@"com.liferay"]) {
		comparatorPrefix = @"%2B";
		comparatorValue = orderByComparatorClassName;
	}

	NSString *comparatorKey = [NSString stringWithFormat:@"%@orderByComparator", comparatorPrefix];

	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"structureClassNameId": @(structureClassNameId),
		@"start": @(start),
		@"end": @(end),
		comparatorKey: comparatorValue
	};

	NSDictionary *_command = @{@"/ddmtemplate/get-templates-by-structure-class-name-id": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSNumber *)getTemplatesByStructureClassNameIdCountWithGroupId:(long long)groupId structureClassNameId:(long long)structureClassNameId error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"structureClassNameId": @(structureClassNameId)
	};

	NSDictionary *_command = @{@"/ddmtemplate/get-templates-by-structure-class-name-id-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSArray *)searchWithCompanyId:(long long)companyId groupId:(long long)groupId classNameId:(long long)classNameId classPK:(long long)classPK keywords:(NSString *)keywords type:(NSString *)type mode:(NSString *)mode start:(int)start end:(int)end orderByComparatorClassName:(NSString *)orderByComparatorClassName error:(NSError **)error {
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
		@"classNameId": @(classNameId),
		@"classPK": @(classPK),
		@"keywords": keywords,
		@"type": type,
		@"mode": mode,
		@"start": @(start),
		@"end": @(end),
		comparatorKey: comparatorValue
	};

	NSDictionary *_command = @{@"/ddmtemplate/search": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)searchWithCompanyId:(long long)companyId groupIds:(NSArray *)groupIds classNameIds:(NSArray *)classNameIds classPKs:(NSArray *)classPKs keywords:(NSString *)keywords type:(NSString *)type mode:(NSString *)mode start:(int)start end:(int)end orderByComparatorClassName:(NSString *)orderByComparatorClassName error:(NSError **)error {
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
		@"classPKs": classPKs,
		@"keywords": keywords,
		@"type": type,
		@"mode": mode,
		@"start": @(start),
		@"end": @(end),
		comparatorKey: comparatorValue
	};

	NSDictionary *_command = @{@"/ddmtemplate/search": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)searchWithCompanyId:(long long)companyId groupId:(long long)groupId classNameId:(long long)classNameId classPK:(long long)classPK name:(NSString *)name description:(NSString *)description type:(NSString *)type mode:(NSString *)mode language:(NSString *)language andOperator:(BOOL)andOperator start:(int)start end:(int)end orderByComparatorClassName:(NSString *)orderByComparatorClassName error:(NSError **)error {
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
		@"classNameId": @(classNameId),
		@"classPK": @(classPK),
		@"name": name,
		@"description": description,
		@"type": type,
		@"mode": mode,
		@"language": language,
		@"andOperator": @(andOperator),
		@"start": @(start),
		@"end": @(end),
		comparatorKey: comparatorValue
	};

	NSDictionary *_command = @{@"/ddmtemplate/search": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)searchWithCompanyId:(long long)companyId groupIds:(NSArray *)groupIds classNameIds:(NSArray *)classNameIds classPKs:(NSArray *)classPKs name:(NSString *)name description:(NSString *)description type:(NSString *)type mode:(NSString *)mode language:(NSString *)language andOperator:(BOOL)andOperator start:(int)start end:(int)end orderByComparatorClassName:(NSString *)orderByComparatorClassName error:(NSError **)error {
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
		@"classPKs": classPKs,
		@"name": name,
		@"description": description,
		@"type": type,
		@"mode": mode,
		@"language": language,
		@"andOperator": @(andOperator),
		@"start": @(start),
		@"end": @(end),
		comparatorKey: comparatorValue
	};

	NSDictionary *_command = @{@"/ddmtemplate/search": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSNumber *)searchCountWithCompanyId:(long long)companyId groupId:(long long)groupId classNameId:(long long)classNameId classPK:(long long)classPK name:(NSString *)name description:(NSString *)description type:(NSString *)type mode:(NSString *)mode language:(NSString *)language andOperator:(BOOL)andOperator error:(NSError **)error {
	NSDictionary *_params = @{
		@"companyId": @(companyId),
		@"groupId": @(groupId),
		@"classNameId": @(classNameId),
		@"classPK": @(classPK),
		@"name": name,
		@"description": description,
		@"type": type,
		@"mode": mode,
		@"language": language,
		@"andOperator": @(andOperator)
	};

	NSDictionary *_command = @{@"/ddmtemplate/search-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSNumber *)searchCountWithCompanyId:(long long)companyId groupIds:(NSArray *)groupIds classNameIds:(NSArray *)classNameIds classPKs:(NSArray *)classPKs name:(NSString *)name description:(NSString *)description type:(NSString *)type mode:(NSString *)mode language:(NSString *)language andOperator:(BOOL)andOperator error:(NSError **)error {
	NSDictionary *_params = @{
		@"companyId": @(companyId),
		@"groupIds": groupIds,
		@"classNameIds": classNameIds,
		@"classPKs": classPKs,
		@"name": name,
		@"description": description,
		@"type": type,
		@"mode": mode,
		@"language": language,
		@"andOperator": @(andOperator)
	};

	NSDictionary *_command = @{@"/ddmtemplate/search-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSNumber *)searchCountWithCompanyId:(long long)companyId groupId:(long long)groupId classNameId:(long long)classNameId classPK:(long long)classPK keywords:(NSString *)keywords type:(NSString *)type mode:(NSString *)mode error:(NSError **)error {
	NSDictionary *_params = @{
		@"companyId": @(companyId),
		@"groupId": @(groupId),
		@"classNameId": @(classNameId),
		@"classPK": @(classPK),
		@"keywords": keywords,
		@"type": type,
		@"mode": mode
	};

	NSDictionary *_command = @{@"/ddmtemplate/search-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSNumber *)searchCountWithCompanyId:(long long)companyId groupIds:(NSArray *)groupIds classNameIds:(NSArray *)classNameIds classPKs:(NSArray *)classPKs keywords:(NSString *)keywords type:(NSString *)type mode:(NSString *)mode error:(NSError **)error {
	NSDictionary *_params = @{
		@"companyId": @(companyId),
		@"groupIds": groupIds,
		@"classNameIds": classNameIds,
		@"classPKs": classPKs,
		@"keywords": keywords,
		@"type": type,
		@"mode": mode
	};

	NSDictionary *_command = @{@"/ddmtemplate/search-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSDictionary *)updateTemplateWithTemplateId:(long long)templateId classPK:(long long)classPK nameMap:(NSDictionary *)nameMap descriptionMap:(NSDictionary *)descriptionMap type:(NSString *)type mode:(NSString *)mode language:(NSString *)language script:(NSString *)script cacheable:(BOOL)cacheable smallImage:(BOOL)smallImage smallImageURL:(NSString *)smallImageURL smallImageFile:(NSDictionary *)smallImageFile serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"templateId": @(templateId),
		@"classPK": @(classPK),
		@"nameMap": nameMap,
		@"descriptionMap": descriptionMap,
		@"type": type,
		@"mode": mode,
		@"language": language,
		@"script": script,
		@"cacheable": @(cacheable),
		@"smallImage": @(smallImage),
		@"smallImageURL": smallImageURL,
		@"smallImageFile": smallImageFile,
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/ddmtemplate/update-template": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

@end