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

package com.liferay.mobile.sdk.javascript;

import com.liferay.mobile.sdk.BaseBuilder;
import com.liferay.mobile.sdk.http.Discovery;
import com.liferay.mobile.sdk.http.HttpUtil;
import com.liferay.mobile.sdk.util.LanguageUtil;
import com.liferay.mobile.sdk.velocity.VelocityUtil;

import java.io.File;

import org.apache.velocity.VelocityContext;
import org.apache.velocity.tools.generic.EscapeTool;

/**
 * @author Bruno Farache
 */
public class JavascriptBuilder extends BaseBuilder {

	@Override
	public void build(
			Discovery discovery, String packageName, int version, String filter,
			String destination)
		throws Exception {

		VelocityContext context = getVelocityContext(discovery, filter);

		String templatePath = "templates/javascript/service.vm";
		String filePath = getFilePath(filter, version, destination);

		VelocityUtil.generate(context, templatePath, filePath, true);
	}

	protected String getFilePath(
		String filter, int version, String destination) {

		StringBuilder sb = new StringBuilder();

		sb.append(destination);
		sb.append("/");

		if (version != HttpUtil.UNKNOWN_VERSION) {
			sb.append("v");
			sb.append(version);
			sb.append("/");
		}

		File file = new File(sb.toString());
		file.mkdirs();

		sb.append(filter);
		sb.append(".js");

		return sb.toString();
	}

	protected VelocityContext getVelocityContext(
		Discovery discovery, String filter) {

		VelocityContext context = new VelocityContext();

		LanguageUtil languageUtil = new LanguageUtil();

		context.put(CLASS_NAME, languageUtil.getServiceClassName(filter));
		context.put(DISCOVERY, discovery);
		context.put(ESCAPE_TOOL, new EscapeTool());
		context.put(LANGUAGE_UTIL, languageUtil);

		excludeMethods(context);

		return context;
	}

}