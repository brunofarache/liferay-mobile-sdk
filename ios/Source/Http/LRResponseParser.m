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

#import "LRResponseParser.h"

#import "LRBatchSession.h"
#import "NSError+LRError.h"
#import "NSBundle+Localization.h"

const int LR_HTTP_STATUS_OK = 200;
const int LR_HTTP_STATUS_UNAUTHORIZED = 401;

/**
 * @author Bruno Farache
 */
@implementation LRResponseParser

+ (id)parse:(id)data statusCode:(long)statusCode error:(NSError **)error {
	*error = [self _checkHttpError:statusCode];

	if (*error) {
		return nil;
	}

	if ([data isKindOfClass:[NSData class]]) {
		return [self _parse:data error:error];
	}
	else {
		*error = [self _checkPortalException:data];

		if (*error) {
			return nil;
		}

		return data;
	}
}

+ (NSError *)_checkHttpError:(long)statusCode {
	NSError *error;

	if (statusCode == LR_HTTP_STATUS_UNAUTHORIZED) {
		error = [NSError errorWithCode:LRErrorCodeUnauthorized
			descriptionKey:@"wrong-credentials"];
	}
	else if (statusCode != LR_HTTP_STATUS_OK) {
		error = [NSError errorWithCode:statusCode descriptionKey:@"http-error"];
	}

	return error;
}

+ (NSError *)_checkPortalException:(id)json {
	if (![json isKindOfClass:[NSDictionary class]]) {
		return nil;
	}

	NSString *exception = [json objectForKey:@"exception"];

	if (!exception) {
		return nil;
	}

	NSString *message = [json objectForKey:@"message"];
	NSError *error;

	// Both message and exception could contain an exception class name or a
	// user message (in English).

	if ([self _looksLikeException:message]) {
		if ([exception length] == 0) {

			// use message as exception classname. No message provided

			exception = message;
			message = nil;
		}
		else {

			// message and exception are reversed. Swap

			NSString *tmp = exception;
			exception = message;
			message = tmp;
		}
	}

	if ([message length] == 0) {
		error = [self _errorWithException:exception];
	}
	else {
		error = [self _errorWithException:exception message:message];
	}

	return error;
}

+ (NSError *)_errorWithException:(NSString *)exception {
	NSError *error;

	if ([exception length] == 0) {

		// Neither message nor exception. Throw generic error

		error = [NSError errorWithCode:LRErrorCodePortalException
			descriptionKey:@"exception-error-generic"];
	}
	else {

		// Exception is a class name or server-side user message
		// Wrap it and try to convert the exception to a user message

		error = [self _wrapErrorAndTryToTranslateString:exception];
	}

	return error;
}

+ (NSError *)_errorWithException:(NSString *)exception
		message:(NSString *)message {

	NSString *keyToUse = @"exception-error-generic";

	if ([self _looksLikeException:exception]) {

		// Exception is a class name.
		keyToUse = exception;
	}

	// Wrap it (inclusing server-side message) and try to convert class name
	// to user message
	return [self _wrapErrorAndTryToTranslateString:keyToUse
		serverMessage:message];
}

+ (BOOL)_looksLikeException:(NSString *)value {
	return [value hasPrefix:@"java.lang."] || [value hasPrefix:@"com.liferay."];
}

+ (id)_parse:(NSData *)data error:(NSError **)error {
	NSError *parseError;
	
	id json = [NSJSONSerialization JSONObjectWithData:data options:0
		error:&parseError];

	if (parseError) {
		NSDictionary *userInfo = @{
			NSUnderlyingErrorKey:parseError
		};

		*error = [NSError errorWithCode:LRErrorCodeParse
			descriptionKey:@"json-parsing-error" userInfo:userInfo];
	}
	else {
		*error = [self _checkPortalException:json];
	}

	if (*error) {
		return nil;
	}

	return json;
}

+ (NSError *)_wrapErrorAndTryToTranslateString:(NSString *)exception {
	return [self _wrapErrorAndTryToTranslateString:exception serverMessage:nil];
}

+ (NSError *)_wrapErrorAndTryToTranslateString:(NSString *)exception
		serverMessage:(NSString *)serverMessage {

	// If there is translation for the key, use it. Otherwise return error with
	// generic message. Always wrap original error

	NSError *wrappedError =
		[self _wrapErrorWithException:exception message:serverMessage];

	NSMutableDictionary *userInfo = [[NSMutableDictionary alloc] init];

	userInfo[NSUnderlyingErrorKey] = wrappedError;

	if ([self _looksLikeException:exception]) {
		userInfo[NSLocalizedFailureReasonErrorKey] = exception;
	}

	NSString *keyToUse = @"exception-error-generic";

	if ([[NSBundle localizedBundle] existsStringForKey:exception]) {
		keyToUse = exception;
	}

	return [NSError errorWithCode:LRErrorCodePortalException
		descriptionKey:keyToUse userInfo:userInfo];
}

+ (NSError *)_wrapErrorWithException:(NSString *)exception
		message:(NSString *)message {

	NSError *wrappedError;
	NSMutableDictionary *originalUserInfo = [[NSMutableDictionary alloc] init];

	if ([self _looksLikeException:exception]) {
		originalUserInfo[NSLocalizedFailureReasonErrorKey] = exception;

		wrappedError = [NSError errorWithCode:LRErrorCodePortalException
			description:message userInfo:originalUserInfo];
	}
	else {
		wrappedError = [NSError errorWithCode:LRErrorCodePortalException
			description:exception userInfo:originalUserInfo];
	}

	return wrappedError;
}

@end