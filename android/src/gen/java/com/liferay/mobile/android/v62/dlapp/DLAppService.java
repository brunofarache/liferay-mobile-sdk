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

package com.liferay.mobile.android.v62.dlapp;

import com.liferay.mobile.android.service.BaseService;
import com.liferay.mobile.android.service.Session;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * @author Bruno Farache
 */
public class DLAppService extends BaseService {

	public DLAppService(Session session) {
		super(session);
	}

	public JSONObject addFileEntry(long repositoryId, long folderId, String sourceFileName, String mimeType, String title, String description, String changeLog, JSONArray bytes, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("sourceFileName", sourceFileName);
			_params.put("mimeType", mimeType);
			_params.put("title", title);
			_params.put("description", description);
			_params.put("changeLog", changeLog);
			_params.put("bytes", bytes);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/add-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject addFileEntry(long repositoryId, long folderId, String sourceFileName, String mimeType, String title, String description, String changeLog, JSONObject file, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("sourceFileName", sourceFileName);
			_params.put("mimeType", mimeType);
			_params.put("title", title);
			_params.put("description", description);
			_params.put("changeLog", changeLog);
			_params.put("file", file);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/add-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject addFileShortcut(long repositoryId, long folderId, long toFileEntryId, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("toFileEntryId", toFileEntryId);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/add-file-shortcut", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject addFolder(long repositoryId, long parentFolderId, String name, String description, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("name", name);
			_params.put("description", description);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/add-folder", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject addTempFileEntry(long groupId, long folderId, String fileName, String tempFolderName, JSONObject file, String mimeType) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("folderId", folderId);
			_params.put("fileName", fileName);
			_params.put("tempFolderName", tempFolderName);
			_params.put("file", file);
			_params.put("mimeType", mimeType);

			_command.put("/dlapp/add-temp-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public void cancelCheckOut(long fileEntryId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);

			_command.put("/dlapp/cancel-check-out", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void checkInFileEntry(long fileEntryId, String lockUuid) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);
			_params.put("lockUuid", lockUuid);

			_command.put("/dlapp/check-in-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void checkInFileEntry(long fileEntryId, String lockUuid, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);
			_params.put("lockUuid", lockUuid);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/check-in-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void checkInFileEntry(long fileEntryId, boolean majorVersion, String changeLog, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);
			_params.put("majorVersion", majorVersion);
			_params.put("changeLog", changeLog);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/check-in-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void checkOutFileEntry(long fileEntryId, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/check-out-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public JSONObject checkOutFileEntry(long fileEntryId, String owner, long expirationTime, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);
			_params.put("owner", owner);
			_params.put("expirationTime", expirationTime);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/check-out-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject copyFolder(long repositoryId, long sourceFolderId, long parentFolderId, String name, String description, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("sourceFolderId", sourceFolderId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("name", name);
			_params.put("description", description);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/copy-folder", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public void deleteFileEntry(long fileEntryId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);

			_command.put("/dlapp/delete-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void deleteFileEntryByTitle(long repositoryId, long folderId, String title) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("title", title);

			_command.put("/dlapp/delete-file-entry-by-title", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void deleteFileShortcut(long fileShortcutId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileShortcutId", fileShortcutId);

			_command.put("/dlapp/delete-file-shortcut", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void deleteFileVersion(long fileEntryId, String version) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);
			_params.put("version", version);

			_command.put("/dlapp/delete-file-version", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void deleteFolder(long folderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("folderId", folderId);

			_command.put("/dlapp/delete-folder", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void deleteFolder(long repositoryId, long parentFolderId, String name) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("name", name);

			_command.put("/dlapp/delete-folder", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void deleteTempFileEntry(long groupId, long folderId, String fileName, String tempFolderName) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("folderId", folderId);
			_params.put("fileName", fileName);
			_params.put("tempFolderName", tempFolderName);

			_command.put("/dlapp/delete-temp-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public JSONArray getFileEntries(long repositoryId, long folderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);

			_command.put("/dlapp/get-file-entries", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFileEntries(long repositoryId, long folderId, long fileEntryTypeId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("fileEntryTypeId", fileEntryTypeId);

			_command.put("/dlapp/get-file-entries", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFileEntries(long repositoryId, long folderId, JSONArray mimeTypes) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("mimeTypes", mimeTypes);

			_command.put("/dlapp/get-file-entries", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFileEntries(long repositoryId, long folderId, int start, int end) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("start", start);
			_params.put("end", end);

			_command.put("/dlapp/get-file-entries", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFileEntries(long repositoryId, long folderId, long fileEntryTypeId, int start, int end) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("fileEntryTypeId", fileEntryTypeId);
			_params.put("start", start);
			_params.put("end", end);

			_command.put("/dlapp/get-file-entries", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFileEntries(long repositoryId, long folderId, int start, int end, String obcClassName) throws Exception {
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

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("start", start);
			_params.put("end", end);
			_params.put(comparatorKey, comparatorValue);

			_command.put("/dlapp/get-file-entries", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFileEntries(long repositoryId, long folderId, long fileEntryTypeId, int start, int end, String obcClassName) throws Exception {
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

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("fileEntryTypeId", fileEntryTypeId);
			_params.put("start", start);
			_params.put("end", end);
			_params.put(comparatorKey, comparatorValue);

			_command.put("/dlapp/get-file-entries", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFileEntriesAndFileShortcuts(long repositoryId, long folderId, int status, int start, int end) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("status", status);
			_params.put("start", start);
			_params.put("end", end);

			_command.put("/dlapp/get-file-entries-and-file-shortcuts", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public Integer getFileEntriesAndFileShortcutsCount(long repositoryId, long folderId, int status) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("status", status);

			_command.put("/dlapp/get-file-entries-and-file-shortcuts-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public Integer getFileEntriesAndFileShortcutsCount(long repositoryId, long folderId, int status, JSONArray mimeTypes) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("status", status);
			_params.put("mimeTypes", mimeTypes);

			_command.put("/dlapp/get-file-entries-and-file-shortcuts-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public Integer getFileEntriesCount(long repositoryId, long folderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);

			_command.put("/dlapp/get-file-entries-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public Integer getFileEntriesCount(long repositoryId, long folderId, long fileEntryTypeId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("fileEntryTypeId", fileEntryTypeId);

			_command.put("/dlapp/get-file-entries-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public JSONObject getFileEntry(long fileEntryId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);

			_command.put("/dlapp/get-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject getFileEntry(long groupId, long folderId, String title) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("folderId", folderId);
			_params.put("title", title);

			_command.put("/dlapp/get-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject getFileEntryByUuidAndGroupId(String uuid, long groupId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("uuid", uuid);
			_params.put("groupId", groupId);

			_command.put("/dlapp/get-file-entry-by-uuid-and-group-id", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject getFileShortcut(long fileShortcutId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileShortcutId", fileShortcutId);

			_command.put("/dlapp/get-file-shortcut", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject getFolder(long folderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("folderId", folderId);

			_command.put("/dlapp/get-folder", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject getFolder(long repositoryId, long parentFolderId, String name) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("name", name);

			_command.put("/dlapp/get-folder", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONArray getFolders(long repositoryId, long parentFolderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);

			_command.put("/dlapp/get-folders", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFolders(long repositoryId, long parentFolderId, boolean includeMountFolders) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("includeMountFolders", includeMountFolders);

			_command.put("/dlapp/get-folders", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFolders(long repositoryId, long parentFolderId, int start, int end) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("start", start);
			_params.put("end", end);

			_command.put("/dlapp/get-folders", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFolders(long repositoryId, long parentFolderId, boolean includeMountFolders, int start, int end) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("includeMountFolders", includeMountFolders);
			_params.put("start", start);
			_params.put("end", end);

			_command.put("/dlapp/get-folders", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFolders(long repositoryId, long parentFolderId, int start, int end, String obcClassName) throws Exception {
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

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("start", start);
			_params.put("end", end);
			_params.put(comparatorKey, comparatorValue);

			_command.put("/dlapp/get-folders", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFolders(long repositoryId, long parentFolderId, boolean includeMountFolders, int start, int end, String obcClassName) throws Exception {
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

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("includeMountFolders", includeMountFolders);
			_params.put("start", start);
			_params.put("end", end);
			_params.put(comparatorKey, comparatorValue);

			_command.put("/dlapp/get-folders", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFolders(long repositoryId, long parentFolderId, int status, boolean includeMountFolders, int start, int end, String obcClassName) throws Exception {
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

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("status", status);
			_params.put("includeMountFolders", includeMountFolders);
			_params.put("start", start);
			_params.put("end", end);
			_params.put(comparatorKey, comparatorValue);

			_command.put("/dlapp/get-folders", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFoldersAndFileEntriesAndFileShortcuts(long repositoryId, long folderId, int status, boolean includeMountFolders, int start, int end) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("status", status);
			_params.put("includeMountFolders", includeMountFolders);
			_params.put("start", start);
			_params.put("end", end);

			_command.put("/dlapp/get-folders-and-file-entries-and-file-shortcuts", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFoldersAndFileEntriesAndFileShortcuts(long repositoryId, long folderId, int status, boolean includeMountFolders, int start, int end, String obcClassName) throws Exception {
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

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("status", status);
			_params.put("includeMountFolders", includeMountFolders);
			_params.put("start", start);
			_params.put("end", end);
			_params.put(comparatorKey, comparatorValue);

			_command.put("/dlapp/get-folders-and-file-entries-and-file-shortcuts", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getFoldersAndFileEntriesAndFileShortcuts(long repositoryId, long folderId, int status, JSONArray mimeTypes, boolean includeMountFolders, int start, int end, String obcClassName) throws Exception {
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

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("status", status);
			_params.put("mimeTypes", mimeTypes);
			_params.put("includeMountFolders", includeMountFolders);
			_params.put("start", start);
			_params.put("end", end);
			_params.put(comparatorKey, comparatorValue);

			_command.put("/dlapp/get-folders-and-file-entries-and-file-shortcuts", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public Integer getFoldersAndFileEntriesAndFileShortcutsCount(long repositoryId, long folderId, int status, boolean includeMountFolders) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("status", status);
			_params.put("includeMountFolders", includeMountFolders);

			_command.put("/dlapp/get-folders-and-file-entries-and-file-shortcuts-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public Integer getFoldersAndFileEntriesAndFileShortcutsCount(long repositoryId, long folderId, int status, JSONArray mimeTypes, boolean includeMountFolders) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("status", status);
			_params.put("mimeTypes", mimeTypes);
			_params.put("includeMountFolders", includeMountFolders);

			_command.put("/dlapp/get-folders-and-file-entries-and-file-shortcuts-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public Integer getFoldersCount(long repositoryId, long parentFolderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);

			_command.put("/dlapp/get-folders-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public Integer getFoldersCount(long repositoryId, long parentFolderId, boolean includeMountFolders) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("includeMountFolders", includeMountFolders);

			_command.put("/dlapp/get-folders-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public Integer getFoldersCount(long repositoryId, long parentFolderId, int status, boolean includeMountFolders) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("status", status);
			_params.put("includeMountFolders", includeMountFolders);

			_command.put("/dlapp/get-folders-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public Integer getFoldersFileEntriesCount(long repositoryId, JSONArray folderIds, int status) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderIds", folderIds);
			_params.put("status", status);

			_command.put("/dlapp/get-folders-file-entries-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public JSONArray getGroupFileEntries(long groupId, long userId, int start, int end) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("userId", userId);
			_params.put("start", start);
			_params.put("end", end);

			_command.put("/dlapp/get-group-file-entries", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getGroupFileEntries(long groupId, long userId, long rootFolderId, int start, int end) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("userId", userId);
			_params.put("rootFolderId", rootFolderId);
			_params.put("start", start);
			_params.put("end", end);

			_command.put("/dlapp/get-group-file-entries", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getGroupFileEntries(long groupId, long userId, int start, int end, String obcClassName) throws Exception {
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

			_params.put("groupId", groupId);
			_params.put("userId", userId);
			_params.put("start", start);
			_params.put("end", end);
			_params.put(comparatorKey, comparatorValue);

			_command.put("/dlapp/get-group-file-entries", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getGroupFileEntries(long groupId, long userId, long rootFolderId, int start, int end, String obcClassName) throws Exception {
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

			_params.put("groupId", groupId);
			_params.put("userId", userId);
			_params.put("rootFolderId", rootFolderId);
			_params.put("start", start);
			_params.put("end", end);
			_params.put(comparatorKey, comparatorValue);

			_command.put("/dlapp/get-group-file-entries", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getGroupFileEntries(long groupId, long userId, long rootFolderId, JSONArray mimeTypes, int status, int start, int end, String obcClassName) throws Exception {
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

			_params.put("groupId", groupId);
			_params.put("userId", userId);
			_params.put("rootFolderId", rootFolderId);
			_params.put("mimeTypes", mimeTypes);
			_params.put("status", status);
			_params.put("start", start);
			_params.put("end", end);
			_params.put(comparatorKey, comparatorValue);

			_command.put("/dlapp/get-group-file-entries", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public Integer getGroupFileEntriesCount(long groupId, long userId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("userId", userId);

			_command.put("/dlapp/get-group-file-entries-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public Integer getGroupFileEntriesCount(long groupId, long userId, long rootFolderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("userId", userId);
			_params.put("rootFolderId", rootFolderId);

			_command.put("/dlapp/get-group-file-entries-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public Integer getGroupFileEntriesCount(long groupId, long userId, long rootFolderId, JSONArray mimeTypes, int status) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("userId", userId);
			_params.put("rootFolderId", rootFolderId);
			_params.put("mimeTypes", mimeTypes);
			_params.put("status", status);

			_command.put("/dlapp/get-group-file-entries-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public JSONArray getMountFolders(long repositoryId, long parentFolderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);

			_command.put("/dlapp/get-mount-folders", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getMountFolders(long repositoryId, long parentFolderId, int start, int end) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("start", start);
			_params.put("end", end);

			_command.put("/dlapp/get-mount-folders", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getMountFolders(long repositoryId, long parentFolderId, int start, int end, String obcClassName) throws Exception {
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

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("start", start);
			_params.put("end", end);
			_params.put(comparatorKey, comparatorValue);

			_command.put("/dlapp/get-mount-folders", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public Integer getMountFoldersCount(long repositoryId, long parentFolderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);

			_command.put("/dlapp/get-mount-folders-count", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Integer)session.invoke(_command);
	}

	public JSONArray getSubfolderIds(long repositoryId, long folderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);

			_command.put("/dlapp/get-subfolder-ids", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONArray getSubfolderIds(long repositoryId, long folderId, boolean recurse) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("recurse", recurse);

			_command.put("/dlapp/get-subfolder-ids", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public void getSubfolderIds(long repositoryId, JSONArray folderIds, long folderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderIds", folderIds);
			_params.put("folderId", folderId);

			_command.put("/dlapp/get-subfolder-ids", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public JSONArray getTempFileEntryNames(long groupId, long folderId, String tempFolderName) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("folderId", folderId);
			_params.put("tempFolderName", tempFolderName);

			_command.put("/dlapp/get-temp-file-entry-names", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONArray)session.invoke(_command);
	}

	public JSONObject lockFileEntry(long fileEntryId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);

			_command.put("/dlapp/lock-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject lockFileEntry(long fileEntryId, String owner, long expirationTime) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);
			_params.put("owner", owner);
			_params.put("expirationTime", expirationTime);

			_command.put("/dlapp/lock-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject lockFolder(long repositoryId, long folderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);

			_command.put("/dlapp/lock-folder", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject lockFolder(long repositoryId, long folderId, String owner, boolean inheritable, long expirationTime) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("owner", owner);
			_params.put("inheritable", inheritable);
			_params.put("expirationTime", expirationTime);

			_command.put("/dlapp/lock-folder", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject moveFileEntry(long fileEntryId, long newFolderId, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);
			_params.put("newFolderId", newFolderId);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/move-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject moveFileEntryFromTrash(long fileEntryId, long newFolderId, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);
			_params.put("newFolderId", newFolderId);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/move-file-entry-from-trash", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject moveFileEntryToTrash(long fileEntryId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);

			_command.put("/dlapp/move-file-entry-to-trash", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject moveFileShortcutFromTrash(long fileShortcutId, long newFolderId, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileShortcutId", fileShortcutId);
			_params.put("newFolderId", newFolderId);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/move-file-shortcut-from-trash", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject moveFileShortcutToTrash(long fileShortcutId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileShortcutId", fileShortcutId);

			_command.put("/dlapp/move-file-shortcut-to-trash", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject moveFolder(long folderId, long parentFolderId, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("folderId", folderId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/move-folder", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject moveFolderFromTrash(long folderId, long parentFolderId, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("folderId", folderId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/move-folder-from-trash", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject moveFolderToTrash(long folderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("folderId", folderId);

			_command.put("/dlapp/move-folder-to-trash", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject refreshFileEntryLock(String lockUuid, long companyId, long expirationTime) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("lockUuid", lockUuid);
			_params.put("companyId", companyId);
			_params.put("expirationTime", expirationTime);

			_command.put("/dlapp/refresh-file-entry-lock", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject refreshFolderLock(String lockUuid, long companyId, long expirationTime) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("lockUuid", lockUuid);
			_params.put("companyId", companyId);
			_params.put("expirationTime", expirationTime);

			_command.put("/dlapp/refresh-folder-lock", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public void restoreFileEntryFromTrash(long fileEntryId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);

			_command.put("/dlapp/restore-file-entry-from-trash", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void restoreFileShortcutFromTrash(long fileShortcutId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileShortcutId", fileShortcutId);

			_command.put("/dlapp/restore-file-shortcut-from-trash", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void restoreFolderFromTrash(long folderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("folderId", folderId);

			_command.put("/dlapp/restore-folder-from-trash", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void revertFileEntry(long fileEntryId, String version, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);
			_params.put("version", version);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/revert-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public JSONObject search(long repositoryId, JSONObject searchContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("searchContext", searchContext);

			_command.put("/dlapp/search", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject search(long repositoryId, JSONObject searchContext, JSONObject query) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("searchContext", searchContext);
			_params.put("query", query);

			_command.put("/dlapp/search", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject search(long repositoryId, long creatorUserId, int status, int start, int end) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("creatorUserId", creatorUserId);
			_params.put("status", status);
			_params.put("start", start);
			_params.put("end", end);

			_command.put("/dlapp/search", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject search(long repositoryId, long creatorUserId, long folderId, JSONArray mimeTypes, int status, int start, int end) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("creatorUserId", creatorUserId);
			_params.put("folderId", folderId);
			_params.put("mimeTypes", mimeTypes);
			_params.put("status", status);
			_params.put("start", start);
			_params.put("end", end);

			_command.put("/dlapp/search", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public void subscribeFileEntryType(long groupId, long fileEntryTypeId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("fileEntryTypeId", fileEntryTypeId);

			_command.put("/dlapp/subscribe-file-entry-type", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void subscribeFolder(long groupId, long folderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("folderId", folderId);

			_command.put("/dlapp/subscribe-folder", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void unlockFileEntry(long fileEntryId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);

			_command.put("/dlapp/unlock-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void unlockFileEntry(long fileEntryId, String lockUuid) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);
			_params.put("lockUuid", lockUuid);

			_command.put("/dlapp/unlock-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void unlockFolder(long repositoryId, long folderId, String lockUuid) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("lockUuid", lockUuid);

			_command.put("/dlapp/unlock-folder", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void unlockFolder(long repositoryId, long parentFolderId, String name, String lockUuid) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("parentFolderId", parentFolderId);
			_params.put("name", name);
			_params.put("lockUuid", lockUuid);

			_command.put("/dlapp/unlock-folder", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void unsubscribeFileEntryType(long groupId, long fileEntryTypeId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("fileEntryTypeId", fileEntryTypeId);

			_command.put("/dlapp/unsubscribe-file-entry-type", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public void unsubscribeFolder(long groupId, long folderId) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("groupId", groupId);
			_params.put("folderId", folderId);

			_command.put("/dlapp/unsubscribe-folder", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		session.invoke(_command);
	}

	public JSONObject updateFileEntry(long fileEntryId, String sourceFileName, String mimeType, String title, String description, String changeLog, boolean majorVersion, JSONArray bytes, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);
			_params.put("sourceFileName", sourceFileName);
			_params.put("mimeType", mimeType);
			_params.put("title", title);
			_params.put("description", description);
			_params.put("changeLog", changeLog);
			_params.put("majorVersion", majorVersion);
			_params.put("bytes", bytes);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/update-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject updateFileEntry(long fileEntryId, String sourceFileName, String mimeType, String title, String description, String changeLog, boolean majorVersion, JSONObject file, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);
			_params.put("sourceFileName", sourceFileName);
			_params.put("mimeType", mimeType);
			_params.put("title", title);
			_params.put("description", description);
			_params.put("changeLog", changeLog);
			_params.put("majorVersion", majorVersion);
			_params.put("file", file);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/update-file-entry", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject updateFileEntryAndCheckIn(long fileEntryId, String sourceFileName, String mimeType, String title, String description, String changeLog, boolean majorVersion, JSONObject file, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileEntryId", fileEntryId);
			_params.put("sourceFileName", sourceFileName);
			_params.put("mimeType", mimeType);
			_params.put("title", title);
			_params.put("description", description);
			_params.put("changeLog", changeLog);
			_params.put("majorVersion", majorVersion);
			_params.put("file", file);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/update-file-entry-and-check-in", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject updateFileShortcut(long fileShortcutId, long folderId, long toFileEntryId, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("fileShortcutId", fileShortcutId);
			_params.put("folderId", folderId);
			_params.put("toFileEntryId", toFileEntryId);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/update-file-shortcut", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public JSONObject updateFolder(long folderId, String name, String description, JSONObject serviceContext) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("folderId", folderId);
			_params.put("name", name);
			_params.put("description", description);
			_params.put("serviceContext", serviceContext);

			_command.put("/dlapp/update-folder", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (JSONObject)session.invoke(_command);
	}

	public Boolean verifyFileEntryCheckOut(long repositoryId, long fileEntryId, String lockUuid) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("fileEntryId", fileEntryId);
			_params.put("lockUuid", lockUuid);

			_command.put("/dlapp/verify-file-entry-check-out", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Boolean)session.invoke(_command);
	}

	public Boolean verifyFileEntryLock(long repositoryId, long fileEntryId, String lockUuid) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("fileEntryId", fileEntryId);
			_params.put("lockUuid", lockUuid);

			_command.put("/dlapp/verify-file-entry-lock", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Boolean)session.invoke(_command);
	}

	public Boolean verifyInheritableLock(long repositoryId, long folderId, String lockUuid) throws Exception {
		JSONObject _command = new JSONObject();

		try {
			JSONObject _params = new JSONObject();

			_params.put("repositoryId", repositoryId);
			_params.put("folderId", folderId);
			_params.put("lockUuid", lockUuid);

			_command.put("/dlapp/verify-inheritable-lock", _params);
		}
		catch (JSONException _je) {
			throw new Exception(_je);
		}

		return (Boolean)session.invoke(_command);
	}

}