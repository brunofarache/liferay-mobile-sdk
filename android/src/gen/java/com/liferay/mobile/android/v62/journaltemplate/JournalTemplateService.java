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

package com.liferay.mobile.android.v62.journaltemplate;

import com.liferay.mobile.android.service.BaseService;
import com.liferay.mobile.android.service.Session;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * @author Bruno Farache
 */
public class JournalTemplateService extends BaseService {

	public JournalTemplateService(Session session) {
		super(session);
	}

	public JSONObject addTemplate(long groupId, String templateId, boolean autoTemplateId, String structureId, JSONObject nameMap, JSONObject descriptionMap, String xsl, boolean formatXsl, String langType, boolean cacheable, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("templateId", templateId);
			_params.put("autoTemplateId", autoTemplateId);
			_params.put("structureId", structureId);
			_params.put("nameMap", nameMap);
			_params.put("descriptionMap", descriptionMap);
			_params.put("xsl", xsl);
			_params.put("formatXsl", formatXsl);
			_params.put("langType", langType);
			_params.put("cacheable", cacheable);
			_params.put("serviceContext", serviceContext);

			_command.put("/journaltemplate/add-template", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject addTemplate(long groupId, String templateId, boolean autoTemplateId, String structureId, JSONObject nameMap, JSONObject descriptionMap, String xsl, boolean formatXsl, String langType, boolean cacheable, boolean smallImage, String smallImageURL, JSONObject smallFile, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("templateId", templateId);
			_params.put("autoTemplateId", autoTemplateId);
			_params.put("structureId", structureId);
			_params.put("nameMap", nameMap);
			_params.put("descriptionMap", descriptionMap);
			_params.put("xsl", xsl);
			_params.put("formatXsl", formatXsl);
			_params.put("langType", langType);
			_params.put("cacheable", cacheable);
			_params.put("smallImage", smallImage);
			_params.put("smallImageURL", smallImageURL);
			_params.put("smallFile", smallFile);
			_params.put("serviceContext", serviceContext);

			_command.put("/journaltemplate/add-template", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject copyTemplate(long groupId, String oldTemplateId, String newTemplateId, boolean autoTemplateId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("oldTemplateId", oldTemplateId);
			_params.put("newTemplateId", newTemplateId);
			_params.put("autoTemplateId", autoTemplateId);

			_command.put("/journaltemplate/copy-template", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public void deleteTemplate(long groupId, String templateId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("templateId", templateId);

			_command.put("/journaltemplate/delete-template", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public JSONArray getStructureTemplates(long groupId, String structureId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("structureId", structureId);

			_command.put("/journaltemplate/get-structure-templates", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONObject getTemplate(long groupId, String templateId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("templateId", templateId);

			_command.put("/journaltemplate/get-template", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject getTemplate(long groupId, String templateId, boolean includeGlobalTemplates) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("templateId", templateId);
			_params.put("includeGlobalTemplates", includeGlobalTemplates);

			_command.put("/journaltemplate/get-template", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONArray search(long companyId, JSONArray groupIds, String templateId, String structureId, String structureIdComparator, String name, String description, boolean andOperator, int start, int end, String obcClassName) throws Exception {
		String comparatorPrefix = "-";
		String comparatorValue = "";

		if (obcClassName != null && obcClassName.startsWith("com.liferay")) {
			comparatorPrefix = "%2B";
			comparatorValue = obcClassName;
		}

		String comparatorKey = comparatorPrefix + "obc";

		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("companyId", companyId);
			_params.put("groupIds", groupIds);
			_params.put("templateId", templateId);
			_params.put("structureId", structureId);
			_params.put("structureIdComparator", structureIdComparator);
			_params.put("name", name);
			_params.put("description", description);
			_params.put("andOperator", andOperator);
			_params.put("start", start);
			_params.put("end", end);
			_params.put(comparatorKey, comparatorValue);

			_command.put("/journaltemplate/search", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray search(long companyId, JSONArray groupIds, String keywords, String structureId, String structureIdComparator, int start, int end, String obcClassName) throws Exception {
		String comparatorPrefix = "-";
		String comparatorValue = "";

		if (obcClassName != null && obcClassName.startsWith("com.liferay")) {
			comparatorPrefix = "%2B";
			comparatorValue = obcClassName;
		}

		String comparatorKey = comparatorPrefix + "obc";

		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("companyId", companyId);
			_params.put("groupIds", groupIds);
			_params.put("keywords", keywords);
			_params.put("structureId", structureId);
			_params.put("structureIdComparator", structureIdComparator);
			_params.put("start", start);
			_params.put("end", end);
			_params.put(comparatorKey, comparatorValue);

			_command.put("/journaltemplate/search", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public Integer searchCount(long companyId, JSONArray groupIds, String keywords, String structureId, String structureIdComparator) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("companyId", companyId);
			_params.put("groupIds", groupIds);
			_params.put("keywords", keywords);
			_params.put("structureId", structureId);
			_params.put("structureIdComparator", structureIdComparator);

			_command.put("/journaltemplate/search-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public Integer searchCount(long companyId, JSONArray groupIds, String templateId, String structureId, String structureIdComparator, String name, String description, boolean andOperator) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("companyId", companyId);
			_params.put("groupIds", groupIds);
			_params.put("templateId", templateId);
			_params.put("structureId", structureId);
			_params.put("structureIdComparator", structureIdComparator);
			_params.put("name", name);
			_params.put("description", description);
			_params.put("andOperator", andOperator);

			_command.put("/journaltemplate/search-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public JSONObject updateTemplate(long groupId, String templateId, String structureId, JSONObject nameMap, JSONObject descriptionMap, String xsl, boolean formatXsl, String langType, boolean cacheable, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("templateId", templateId);
			_params.put("structureId", structureId);
			_params.put("nameMap", nameMap);
			_params.put("descriptionMap", descriptionMap);
			_params.put("xsl", xsl);
			_params.put("formatXsl", formatXsl);
			_params.put("langType", langType);
			_params.put("cacheable", cacheable);
			_params.put("serviceContext", serviceContext);

			_command.put("/journaltemplate/update-template", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject updateTemplate(long groupId, String templateId, String structureId, JSONObject nameMap, JSONObject descriptionMap, String xsl, boolean formatXsl, String langType, boolean cacheable, boolean smallImage, String smallImageURL, JSONObject smallFile, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("templateId", templateId);
			_params.put("structureId", structureId);
			_params.put("nameMap", nameMap);
			_params.put("descriptionMap", descriptionMap);
			_params.put("xsl", xsl);
			_params.put("formatXsl", formatXsl);
			_params.put("langType", langType);
			_params.put("cacheable", cacheable);
			_params.put("smallImage", smallImage);
			_params.put("smallImageURL", smallImageURL);
			_params.put("smallFile", smallFile);
			_params.put("serviceContext", serviceContext);

			_command.put("/journaltemplate/update-template", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

}