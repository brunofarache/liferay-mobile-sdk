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

#import "NSError+LRError.h"
#import "NSBundle+Localization.h"

NSString *const LR_ERROR_DOMAIN = @"com.liferay.mobile.sdk";

/**
 * @author Bruno Farache
 */
@implementation NSError (LRError)

+ (instancetype)errorWithCode:(LRErrorCode)code
		description:(NSString *)description {

	return [self errorWithCode:code description:description userInfo:nil];
}

+ (instancetype)errorWithCode:(LRErrorCode)code description:(NSString *)
		description userInfo:(NSDictionary *)userInfo {

	NSMutableDictionary *values = [[NSMutableDictionary alloc]
		initWithDictionary:userInfo];

	values[NSLocalizedDescriptionKey] = description ?: @"";

	return [self errorWithDomain:LR_ERROR_DOMAIN code:code userInfo:values];
}

+ (instancetype)errorWithCode:(LRErrorCode)code
		descriptionKey:(NSString *)descriptionKey {

	return [self errorWithCode:code descriptionKey:descriptionKey userInfo:nil];
}

+ (instancetype)errorWithCode:(LRErrorCode)code descriptionKey:(NSString *)
		descriptionKey userInfo:(NSDictionary *)userInfo {

	NSString *description =
		[[NSBundle localizedBundle] localizedStringForKey:descriptionKey];

	return [self errorWithCode:code description:description userInfo:userInfo];
}

+ (instancetype)errorWithError:(NSError *)underlyingError {
	NSInteger errorCode;
	NSString *descriptionKey;

	if ([underlyingError.domain isEqualToString:NSURLErrorDomain]) {
		switch (underlyingError.code) {
			case NSURLErrorCannotFindHost:
			case NSURLErrorCannotConnectToHost:
			case NSURLErrorNetworkConnectionLost:
			case NSURLErrorDNSLookupFailed:
			case NSURLErrorNotConnectedToInternet:
				errorCode = LRErrorCodeNotConnected;
				descriptionKey = @"request-error-not-connected";
				break;
			default:
				errorCode = LRErrorCodeRequest;
				descriptionKey = @"request-error";
				break;
		}
	}
	else {
		errorCode = LRErrorCodeUnknown;
		descriptionKey = @"error-unknown";
	}

	NSDictionary *userInfo = @{NSUnderlyingErrorKey : underlyingError};

	return [self errorWithCode:errorCode descriptionKey:descriptionKey
		userInfo:userInfo];
}

@end