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

#import "LRMDRRuleGroupInstanceService_v62.h"

/**
 * @author Bruno Farache
 */
@implementation LRMDRRuleGroupInstanceService_v62

- (NSDictionary *)addRuleGroupInstanceWithGroupId:(long long)groupId className:(NSString *)className classPK:(long long)classPK ruleGroupId:(long long)ruleGroupId serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"className": className,
		@"classPK": @(classPK),
		@"ruleGroupId": @(ruleGroupId),
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/mdrrulegroupinstance/add-rule-group-instance": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)addRuleGroupInstanceWithGroupId:(long long)groupId className:(NSString *)className classPK:(long long)classPK ruleGroupId:(long long)ruleGroupId priority:(int)priority serviceContext:(NSDictionary *)serviceContext error:(NSError **)error {
	NSDictionary *_params = @{
		@"groupId": @(groupId),
		@"className": className,
		@"classPK": @(classPK),
		@"ruleGroupId": @(ruleGroupId),
		@"priority": @(priority),
		@"serviceContext": serviceContext
	};

	NSDictionary *_command = @{@"/mdrrulegroupinstance/add-rule-group-instance": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (void)deleteRuleGroupInstanceWithRuleGroupInstanceId:(long long)ruleGroupInstanceId error:(NSError **)error {
	NSDictionary *_params = @{
		@"ruleGroupInstanceId": @(ruleGroupInstanceId)
	};

	NSDictionary *_command = @{@"/mdrrulegroupinstance/delete-rule-group-instance": _params};

	[self.session invoke:_command error:error];
}

- (NSArray *)getRuleGroupInstancesWithClassName:(NSString *)className classPK:(long long)classPK start:(int)start end:(int)end orderByComparatorClassName:(NSString *)orderByComparatorClassName error:(NSError **)error {
	NSString *comparatorPrefix = @"-";
	NSString *comparatorValue = @"";

	if ([orderByComparatorClassName hasPrefix:@"com.liferay"]) {
		comparatorPrefix = @"%2B";
		comparatorValue = orderByComparatorClassName;
	}

	NSString *comparatorKey = [NSString stringWithFormat:@"%@orderByComparator", comparatorPrefix];

	NSDictionary *_params = @{
		@"className": className,
		@"classPK": @(classPK),
		@"start": @(start),
		@"end": @(end),
		comparatorKey: comparatorValue
	};

	NSDictionary *_command = @{@"/mdrrulegroupinstance/get-rule-group-instances": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSNumber *)getRuleGroupInstancesCountWithClassName:(NSString *)className classPK:(long long)classPK error:(NSError **)error {
	NSDictionary *_params = @{
		@"className": className,
		@"classPK": @(classPK)
	};

	NSDictionary *_command = @{@"/mdrrulegroupinstance/get-rule-group-instances-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSDictionary *)updateRuleGroupInstanceWithRuleGroupInstanceId:(long long)ruleGroupInstanceId priority:(int)priority error:(NSError **)error {
	NSDictionary *_params = @{
		@"ruleGroupInstanceId": @(ruleGroupInstanceId),
		@"priority": @(priority)
	};

	NSDictionary *_command = @{@"/mdrrulegroupinstance/update-rule-group-instance": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

@end