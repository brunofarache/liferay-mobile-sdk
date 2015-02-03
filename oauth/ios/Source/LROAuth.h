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

#import "LRAuthentication.h"

/**
 * @author Bruno Farache
 */
@interface LROAuth : NSObject <LRAuthentication>

@property (nonatomic, strong) NSString *consumerKey;
@property (nonatomic, strong) NSString *consumerSecret;
@property (nonatomic, strong) NSDictionary *params;
@property (nonatomic, strong) NSString *secret;
@property (nonatomic, strong) NSString *token;
@property (nonatomic, strong) NSString *tokenSecret;

- (id)initWithConsumerKey:(NSString *)consumerKey
	consumerSecret:(NSString *)consumerSecret token:(NSString *)token
	tokenSecret:(NSString *)tokenSecret;

- (NSString *)signatureBase:(NSString *)method url:(NSString *)url
	params:(NSDictionary *)params;

@end