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

package com.liferay.mobile.sdk.http;

import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * @author Bruno Farache
 */
public class Action {

	public Action(JSONObject jsonObj) throws JSONException {
		_method = jsonObj.getString("method");
		_path = jsonObj.getString("path");
		_response = jsonObj.getString("response");

		JSONArray parameters = jsonObj.getJSONArray("parameters");

		for (int i = 0; i < parameters.length(); i++) {
			JSONObject parameter = parameters.getJSONObject(i);

			_parameters.add(new Parameter(parameter));
		}
	}

	public int getCollisions() {
		return _collisions;
	}

	public String getMethod() {
		return _method;
	}

	public ArrayList<Parameter> getParameters() {
		return _parameters;
	}

	public String getPath() {
		return _path;
	}

	public String getResponse() {
		return _response;
	}

	public void setCollisions(int collisions) {
		_collisions = collisions;
	}

	public void setMethod(String method) {
		_method = method;
	}

	public void setParameters(ArrayList<Parameter> parameters) {
		_parameters = parameters;
	}

	public void setPath(String path) {
		_path = path;
	}

	public void setResponse(String response) {
		_response = response;
	}

	private int _collisions;
	private String _method;
	private ArrayList<Parameter> _parameters = new ArrayList<Parameter>();
	private String _path;
	private String _response;

}