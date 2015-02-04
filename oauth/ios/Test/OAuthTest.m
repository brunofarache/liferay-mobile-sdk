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

#import "BaseTest.h"

#import "LRGroupService_v62.h"
#import "LROAuth+Testable.h"
#import "LRRequestToken.h"
#import "LRValidator.h"
#import "TRVSMonitor.h"

/**
 * @author Bruno Farache
 */
@interface OAuthTest : BaseTest
@end

@implementation OAuthTest

- (void)testGetUserSites {
	NSString *consumerKey = self.settings[@"oauth_consumer_key"];
	NSString *consumerSecret = self.settings[@"oauth_consumer_secret"];
	NSString *token = self.settings[@"oauth_token"];
	NSString *tokenSecret = self.settings[@"oauth_token_secret"];

	if ([LRValidator isEmpty:consumerKey] ||
		[LRValidator isEmpty:consumerSecret] || [LRValidator isEmpty:token] ||
		[LRValidator isEmpty:tokenSecret]) {

		return;
	}

	LROAuthConfig *config = [[LROAuthConfig alloc]
		initWithConsumerKey:consumerKey consumerSecret:consumerSecret
		token:token tokenSecret:tokenSecret];

	LROAuth *oauth = [[LROAuth alloc] initWithConfig:config];

	LRSession *session = [[LRSession alloc]
		initWithServer:@"http://localhost:8080" authentication:oauth];

	LRGroupService_v62 *service = [[LRGroupService_v62 alloc]
		initWithSession:session];

	NSError *error;
	NSArray *sites = [service getUserSites:&error];

	XCTAssertNil(error);
	XCTAssertTrue([sites count] > 0);

	NSDictionary *site = sites[0];
	XCTAssertEqualObjects(@"/test", site[@"friendlyURL"]);

	site = sites[1];
	XCTAssertEqualObjects(@"/guest", site[@"friendlyURL"]);
}

- (void)testHeader {
	LROAuthConfig *config = [[LROAuthConfig alloc]
		initWithConsumerKey:@"dpf43f3p2l4k3l03"
		consumerSecret:@"kd94hf93k423kf44" token:@"nnch734d00sl2jdk"
		tokenSecret:@"pfkkdhi9sl3r4s00"];

	config.nonce = @"kllo9940pd9333jh";
	config.timestamp = @"1191242096";

	LROAuth *oauth = [[LROAuth alloc] initWithConfig:config];

	NSURL *URL = [NSURL URLWithString:@"http://photos.example.net/photos?" \
		"file=vacation.jpg&size=original"];

	NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:URL];
	[oauth authenticate:request];
	NSString *header = [request valueForHTTPHeaderField:@"Authorization"];

	XCTAssertEqualObjects(
		header,
		@"OAuth oauth_consumer_key=\"dpf43f3p2l4k3l03\", " \
			"oauth_nonce=\"kllo9940pd9333jh\", " \
			"oauth_signature_method=\"HMAC-SHA1\", " \
			"oauth_timestamp=\"1191242096\", " \
			"oauth_token=\"nnch734d00sl2jdk\", " \
			"oauth_version=\"1.0\", " \
			"oauth_signature=\"tR3%2BTy81lMeYAr%2FFid0kMTYa%2FWM%3D\"");
}

- (void)testRequestToken {
	TRVSMonitor *monitor = [TRVSMonitor monitor];
	__block NSString *URL;
	__block NSError *error;

	NSString *consumerKey = self.settings[@"oauth_consumer_key"];
	NSString *consumerSecret = self.settings[@"oauth_consumer_secret"];

	LRSession *session = [[LRSession alloc] initWithSession:self.session];

	[session
		onSuccess:^(id result) {
			URL = result;
			[monitor signal];
		}
		onFailure:^(NSError *e) {
			error = e;
			[monitor signal];
		}
	 ];

	LROAuthConfig *config = [[LROAuthConfig alloc]
		initWithConsumerKey:consumerKey consumerSecret:consumerSecret
		callbackURL:@"http://callback"];

	[LRRequestToken requestTokenWithSession:session config:config];

	[monitor wait];

	NSString *authorizationURL = [NSString
		stringWithFormat:@"%@/c/portal/oauth/authorize?oauth_token=",
		self.session.server];

	XCTAssertNil(error);
	XCTAssert([URL hasPrefix:authorizationURL]);
}

- (void)testSignature {
	LROAuthConfig *config = [[LROAuthConfig alloc]
		initWithConsumerKey:@"dpf43f3p2l4k3l03"
		consumerSecret:@"kd94hf93k423kf44" token:@"nnch734d00sl2jdk"
		tokenSecret:@"pfkkdhi9sl3r4s00"];

	LROAuth *oauth = [[LROAuth alloc] initWithConfig:config];

	NSString *method = @"GET";
	NSString *URL = @"http://photos.example.net/photos";

	NSMutableDictionary *params = [NSMutableDictionary
		dictionaryWithDictionary:config.params];

	params[@"oauth_timestamp"] = @"1191242096";
	params[@"oauth_nonce"] = @"kllo9940pd9333jh";
	params[@"file"] = @"vacation.jpg";
	params[@"size"] = @"original";

	NSString *signatureBase = [oauth _getSignatureBaseWithMethod:method URL:URL
		params:params];

	XCTAssertEqualObjects(
		signatureBase,
		@"GET&http%3A%2F%2Fphotos.example.net%2Fphotos&" \
			"file%3Dvacation.jpg" \
			"%26oauth_consumer_key%3Ddpf43f3p2l4k3l03" \
			"%26oauth_nonce%3Dkllo9940pd9333jh" \
			"%26oauth_signature_method%3DHMAC-SHA1" \
			"%26oauth_timestamp%3D1191242096" \
			"%26oauth_token%3Dnnch734d00sl2jdk" \
			"%26oauth_version%3D1.0" \
			"%26size%3Doriginal");

	NSString *signature = [oauth _getSignatureWithMethod:method URL:URL
		params:params];

	XCTAssertEqualObjects(signature, @"tR3+Ty81lMeYAr/Fid0kMTYa/WM=");
}

@end