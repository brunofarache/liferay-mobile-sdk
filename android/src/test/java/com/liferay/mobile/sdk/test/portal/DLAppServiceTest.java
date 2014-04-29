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

package com.liferay.mobile.sdk.test.portal;

import com.liferay.mobile.android.exception.ServerException;
import com.liferay.mobile.android.service.BatchSessionImpl;
import com.liferay.mobile.android.v62.dlapp.DLAppService;
import com.liferay.mobile.sdk.test.BaseTest;

import java.io.IOException;

import org.json.JSONArray;
import org.json.JSONObject;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * @author Bruno Farache
 */
public class DLAppServiceTest extends BaseTest {

	public DLAppServiceTest() throws IOException {
		super();
	}

	@Test
	public void addFolder() throws Exception {
		DLAppService service = new DLAppService(session);

		JSONObject jsonObj = service.addFolder(
			_getRepositoryId(), _PARENT_FOLDER_ID, _FOLDER_NAME, "", null);

		assertEquals(_FOLDER_NAME, jsonObj.get(_NAME));

		int count = service.getFoldersCount(
			_getRepositoryId(), _PARENT_FOLDER_ID, 0, false);

		assertEquals(1, count);

		deleteFolder();
	}

	@Test
	public void addFoldersBatch() throws Exception {
		BatchSessionImpl batch = new BatchSessionImpl(session);

		DLAppService service = new DLAppService(batch);

		service.addFolder(
			_getRepositoryId(), _PARENT_FOLDER_ID, _FOLDER_NAME, "", null);

		service.addFolder(
			_getRepositoryId(), _PARENT_FOLDER_ID, _FOLDER_NAME_2, "", null);

		JSONArray jsonArray = batch.invoke();

		assertEquals(_FOLDER_NAME, jsonArray.getJSONObject(0).get(_NAME));
		assertEquals(_FOLDER_NAME_2, jsonArray.getJSONObject(1).get(_NAME));

		deleteFoldersBatch(batch);
	}

	@Test
	public void getFoldersWithComparator() throws Exception {
		testGetFoldersWithComparator(
			"com.liferay.portlet.documentlibrary.util.comparator.FolderIdComparator");
	}

	@Test
	public void getFoldersWithNullComparator() throws Exception {
		testGetFoldersWithComparator(null);
	}

	protected void deleteFolder() throws Exception {
		DLAppService service = new DLAppService(session);

		service.deleteFolder(
			_getRepositoryId(), _PARENT_FOLDER_ID, _FOLDER_NAME);

		try {
			service.getFolder(
				_getRepositoryId(), _PARENT_FOLDER_ID, _FOLDER_NAME);

			fail();
		}
		catch (ServerException se) {
			String message = se.getMessage();

			assertTrue(message.startsWith("No DLFolder exists with the key"));
		}
	}

	protected void deleteFoldersBatch(BatchSessionImpl batch) throws Exception {
		DLAppService service = new DLAppService(batch);

		service.deleteFolder(
			_getRepositoryId(), _PARENT_FOLDER_ID, _FOLDER_NAME);

		service.deleteFolder(
			_getRepositoryId(), _PARENT_FOLDER_ID, _FOLDER_NAME_2);

		JSONArray jsonArray = batch.invoke();

		assertEquals(2, jsonArray.length());
	}

	protected void testGetFoldersWithComparator(String comparatorClassName)
		throws Exception {

		DLAppService service = new DLAppService(session);

		JSONArray existingFolders = service.getFolders(
			_getRepositoryId(), _PARENT_FOLDER_ID, 0, 5, comparatorClassName);

		assertNotNull(existingFolders);

		service.addFolder(
			_getRepositoryId(), _PARENT_FOLDER_ID, _FOLDER_NAME, "", null);

		service.addFolder(
			_getRepositoryId(), _PARENT_FOLDER_ID, _FOLDER_NAME_2, "", null);

		JSONArray newFolders = service.getFolders(
			_getRepositoryId(), _PARENT_FOLDER_ID, 0, 5, comparatorClassName);

		assertNotNull(newFolders);

		assertEquals(existingFolders.length() + 2, newFolders.length());

		JSONObject folder1 = newFolders.getJSONObject(newFolders.length() - 2);
		JSONObject folder2 = newFolders.getJSONObject(newFolders.length() - 1);

		assertEquals(_FOLDER_NAME, folder1.get("name").toString());
		assertEquals(_FOLDER_NAME_2, folder2.get("name").toString());

		deleteFoldersBatch(new BatchSessionImpl(session));
	}

	private long _getRepositoryId() {
		return Long.valueOf(props.getProperty("repositoryId"));
	}

	private static final String _FOLDER_NAME = "test";

	private static final String _FOLDER_NAME_2 = "test2";

	private static final String _NAME = "name";

	private static final int _PARENT_FOLDER_ID = 0;

}