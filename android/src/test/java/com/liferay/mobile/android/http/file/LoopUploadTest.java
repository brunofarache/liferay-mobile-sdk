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

package com.liferay.mobile.android.http.file;

import com.liferay.mobile.android.BaseTest;
import com.liferay.mobile.android.DLAppServiceTest;
import com.liferay.mobile.android.auth.basic.BasicAuthentication;
import com.liferay.mobile.android.callback.file.FileProgressCallback;
import com.liferay.mobile.android.service.Session;
import com.liferay.mobile.android.service.SessionImpl;
import com.liferay.mobile.android.v62.dlapp.DLAppService;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;

import static org.junit.Assert.assertEquals;

/**
 * @author Bruno Farache
 */
public class LoopUploadTest {

	public static final String FILE_NAME = "barto.jpg";

	public static final String MIME_TYPE = "image/jpg";

	public LoopUploadTest() throws IOException {
		super();
	}

	@Test
	public void uploadPhoto() throws Exception {
		InputStream is = getClass().getResourceAsStream("/" + FILE_NAME);

		FileProgressCallback callback = new FileProgressCallback() {

			@Override
			public void onProgress(int totalBytes) {
			}

		};

		UploadData data = new UploadData(is, MIME_TYPE, FILE_NAME, callback);
		JSONArray result = upload(data);

		System.out.println(result);
		assertEquals(372434, callback.getTotal());
	}

	public JSONArray upload(UploadData file) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("file", file);

			_command.put("/loop-portlet.feed/upload", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		Session session = new SessionImpl(
			"http://localhost:8080",
			new BasicAuthentication("test@liferay.com", "test"));

		return session.upload(_command);
	}

}