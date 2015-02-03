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

#import "LROAuth.h"

#import <CommonCrypto/CommonHMAC.h>

/**
 * @author Bruno Farache
 */
@implementation LROAuth

- (id)initWithConsumerKey:(NSString *)consumerKey
		consumerSecret:(NSString *)consumerSecret token:(NSString *)token
		tokenSecret:(NSString *)tokenSecret {

	self = [super init];

	if (self) {
		self.consumerKey = consumerKey;
		self.consumerSecret = consumerSecret;
		self.token = token;
		self.tokenSecret = tokenSecret ? tokenSecret : @"";

		self.oauthParams = @{
			@"oauth_consumer_key": self.consumerKey,
			@"oauth_nonce": [self _getNonce],
			@"oauth_timestamp": [self _getTimestamp],
			@"oauth_version": @"1.0",
			@"oauth_signature_method": @"HMAC-SHA1",
			@"oauth_token": self.token
		};
	}

	return self;
}

- (void)authenticate:(NSMutableURLRequest *)request {
	NSMutableString *header = [NSMutableString string];

	[header appendString:@"OAuth "];

	NSArray *sortedKeys = [[self.oauthParams allKeys]
	   sortedArrayUsingSelector:@selector(caseInsensitiveCompare:)];

	for (NSString *key in sortedKeys) {
		[header appendFormat:@"%@=\"%@\", ", key, self.oauthParams[key]];
	}

	NSString *method = request.HTTPMethod;
	NSString *URL = [[request.URL absoluteString]
		componentsSeparatedByString:@"?"][0];

	NSMutableDictionary *params = [self _getRequestParams:[request.URL query]];
	[params addEntriesFromDictionary:self.oauthParams];

	NSString *signature = [self getSignatureWithMethod:method URL:URL
		params:params];

	[header appendFormat:@"oauth_signature=\"%@\"", [self _escape:signature]];

	[request setValue:header forHTTPHeaderField:@"Authorization"];
}

- (NSString *)getSignatureBaseWithMethod:(NSString *)method URL:(NSString *)URL
		params:(NSDictionary *)params {

	NSArray *sortedKeys = [[params allKeys]
		sortedArrayUsingSelector:@selector(caseInsensitiveCompare:)];

	NSMutableString *paramsString = [NSMutableString string];

	for (int i = 0; i < [sortedKeys count]; i++) {
		if (i > 0) {
			[paramsString appendString:@"&"];
		}

		NSString *key = sortedKeys[i];
		[paramsString appendFormat:@"%@=%@", key, params[key]];
	}

	NSString *signatureBase = [NSString stringWithFormat:@"%@&%@&%@",
		method, [self _escape:URL], [self _escape:paramsString]];

	return signatureBase;
}

- (NSString *)getSignatureWithMethod:(NSString *)method URL:(NSString *)URL
		params:(NSDictionary *)params {

	NSString *signatureBase = [self getSignatureBaseWithMethod:method URL:URL
		params:params];

	NSData *signatureBaseData = [signatureBase
		dataUsingEncoding:NSUTF8StringEncoding];

	NSString *secret = [NSString stringWithFormat:@"%@&%@",
		self.consumerSecret, self.tokenSecret];

	NSData *secretData = [secret dataUsingEncoding:NSUTF8StringEncoding];

	NSMutableData *digest = [NSMutableData
		dataWithLength:CC_SHA1_DIGEST_LENGTH];

	CCHmac(
		kCCHmacAlgSHA1, secretData.bytes, secretData.length,
		signatureBaseData.bytes, signatureBaseData.length, digest.mutableBytes);

	NSDataBase64EncodingOptions options =
		NSDataBase64Encoding76CharacterLineLength;

	return [digest base64EncodedStringWithOptions:options];
}

- (NSString *)_escape:(NSString *)string {
	NSString *escape = @":/?&=;+!@#$()',*";
	NSString *ignore = @"[].";

	return (__bridge_transfer NSString *)
		CFURLCreateStringByAddingPercentEscapes(
			kCFAllocatorDefault,
			(__bridge CFStringRef)string,
			(__bridge CFStringRef)ignore,
			(__bridge CFStringRef)escape,
			CFStringConvertNSStringEncodingToEncoding(NSUTF8StringEncoding));
}

- (NSString *)_getNonce {
	CFUUIDRef uuid = CFUUIDCreate(NULL);
	CFStringRef string = CFUUIDCreateString(NULL, uuid);
	CFRelease(uuid);

	return (NSString *)CFBridgingRelease(string);
}

- (NSMutableDictionary *)_getRequestParams:(NSString *)query {
	NSMutableDictionary *params = [NSMutableDictionary dictionary];
	NSArray *paramsArray = [query componentsSeparatedByString:@"&"];

	for (NSString *param in paramsArray) {
		NSArray *pair = [param componentsSeparatedByString:@"="];

		if ([pair count] == 2) {
			params[pair[0]] = pair[1];
		}
	}

	return params;
}

- (NSString *)_getTimestamp {
	return [@(floor([[NSDate date] timeIntervalSince1970])) stringValue];
}

@end