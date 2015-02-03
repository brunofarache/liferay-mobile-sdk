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
#import "LROAuth.h"
#import "OAuth.h"

/**
 * @author Bruno Farache
 */
@interface OAuthTest : BaseTest
@end

@implementation OAuthTest

- (void)testOAuth {
	OAuth *oauth = [[OAuth alloc] init];

	LRSession *session = [[LRSession alloc]
		initWithServer:@"http://localhost:8080" authentication:oauth];

	LRGroupService_v62 *service = [[LRGroupService_v62 alloc]
		initWithSession:session];

	NSError *error;

	NSArray *sites = [service getUserSites:&error];

	NSLog(@"%@", sites);
}

- (void)testHeader {
	LROAuth *oauth = [[LROAuth alloc] initWithConsumerKey:@"dpf43f3p2l4k3l03"
		consumerSecret:@"kd94hf93k423kf44" token:@"nnch734d00sl2jdk"
		tokenSecret:@"pfkkdhi9sl3r4s00"];

	NSMutableDictionary *params = [NSMutableDictionary
		dictionaryWithDictionary:oauth.oauthParams];

	params[@"oauth_timestamp"] = @"1191242096";
	params[@"oauth_nonce"] = @"kllo9940pd9333jh";

	oauth.oauthParams = params;

	NSURL *URL = [NSURL URLWithString:@"http://photos.example.net/photos?" \
		"file=vacation.jpg&size=original"];

	NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:URL];
	NSString *header = [oauth getAuthorizationHeaderForRequest:request];

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

- (void)testSignature {
	LROAuth *oauth = [[LROAuth alloc] initWithConsumerKey:@"dpf43f3p2l4k3l03"
		consumerSecret:@"kd94hf93k423kf44" token:@"nnch734d00sl2jdk"
		tokenSecret:@"pfkkdhi9sl3r4s00"];

	NSString *method = @"GET";
	NSString *URL = @"http://photos.example.net/photos";

	NSMutableDictionary *params = [NSMutableDictionary
		dictionaryWithDictionary:oauth.oauthParams];

	params[@"oauth_timestamp"] = @"1191242096";
	params[@"oauth_nonce"] = @"kllo9940pd9333jh";
	params[@"file"] = @"vacation.jpg";
	params[@"size"] = @"original";

	NSString *signatureBase = [oauth getSignatureBaseWithMethod:method URL:URL
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

	NSString *signature = [oauth getSignatureWithMethod:method URL:URL
		params:params];

	XCTAssertEqualObjects(signature, @"tR3+Ty81lMeYAr/Fid0kMTYa/WM=");
}

@end