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

#import "LROAuth.h"

/**
 * @author Bruno Farache
 */
@implementation LROAuthConfig

- (id)initWithConsumerKey:(NSString *)consumerKey
		consumerSecret:(NSString *)consumerSecret
		callbackURL:(NSString *)callbackURL {

	return [self initWithConsumerKey:consumerKey consumerSecret:consumerSecret
		callbackURL:callbackURL token:nil tokenSecret:nil];
}

- (id)initWithConsumerKey:(NSString *)consumerKey
		consumerSecret:(NSString *)consumerSecret token:(NSString *)token
		tokenSecret:(NSString *)tokenSecret {

	return  [self initWithConsumerKey:consumerKey consumerSecret:consumerSecret
		callbackURL:nil token:token tokenSecret:tokenSecret];
}

- (id)initWithConsumerKey:(NSString *)consumerKey
		consumerSecret:(NSString *)consumerSecret
		callbackURL:(NSString *)callbackURL token:(NSString *)token
		tokenSecret:(NSString *)tokenSecret {

	self = [super init];

	if (self) {
		self.consumerKey = consumerKey;
		self.consumerSecret = consumerSecret;
		self.callbackURL = callbackURL;
		self.token = token;
		self.tokenSecret = tokenSecret ? : @"";
	}

	return self;
}

- (NSDictionary *)params {
	NSString *nonce = self.nonce ? : [self _generateNonce];
	NSString *timestamp = self.timestamp ? : [self _generateTimestamp];

	NSMutableDictionary *params = [NSMutableDictionary
	   dictionaryWithDictionary:@{
			@"oauth_consumer_key": self.consumerKey,
			@"oauth_nonce": nonce,
			@"oauth_timestamp": timestamp,
			@"oauth_version": @"1.0",
			@"oauth_signature_method": @"HMAC-SHA1"
		}
	];

	if (self.callbackURL) {
		params[@"oauth_callback"] = [LROAuth escape:self.callbackURL];
	}

	if (self.token) {
		params[@"oauth_token"] = self.token;
	}

	return params;
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