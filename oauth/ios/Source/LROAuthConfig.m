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

#import "LROAuthConfig.h"

/**
 * @author Bruno Farache
 */
@implementation LROAuthConfig

- (id)initWithConsumerKey:(NSString *)consumerKey
		consumerSecret:(NSString *)consumerSecret token:(NSString *)token
		tokenSecret:(NSString *)tokenSecret {

	self = [super init];

	if (self) {
		self.consumerKey = consumerKey;
		self.consumerSecret = consumerSecret;
		self.token = token;
		self.tokenSecret = tokenSecret ? : @"";
	}

	return self;
}

- (NSDictionary *)oauthParams {
	NSString *nonce = self.nonce ? : [self _generateNonce];
	NSString *timestamp = self.timestamp ? : [self _generateTimestamp];

	return @{
		@"oauth_consumer_key": self.consumerKey,
		@"oauth_nonce": nonce,
		@"oauth_timestamp": timestamp,
		@"oauth_version": @"1.0",
		@"oauth_signature_method": @"HMAC-SHA1",
		@"oauth_token": self.token
	};
}

- (NSString *)_generateNonce {
	CFUUIDRef uuid = CFUUIDCreate(NULL);
	CFStringRef string = CFUUIDCreateString(NULL, uuid);
	CFRelease(uuid);

	return (NSString *)CFBridgingRelease(string);
}

- (NSString *)_generateTimestamp {
	return [@(floor([[NSDate date] timeIntervalSince1970])) stringValue];
}

@end