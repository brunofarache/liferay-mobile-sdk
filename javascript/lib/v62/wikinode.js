function WikiNodeService() {
}

WikiNodeService.prototype.addNode = function(name, description, serviceContext) {
	return {
		"/wikinode/add-node": {
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

WikiNodeService.prototype.deleteNode = function(nodeId) {
	return {
		"/wikinode/delete-node": {
			"nodeId": nodeId
		}
	};
};

WikiNodeService.prototype.getNode = function(nodeId) {
	return {
		"/wikinode/get-node": {
			"nodeId": nodeId
		}
	};
};

WikiNodeService.prototype.getNode = function(groupId, name) {
	return {
		"/wikinode/get-node": {
			"groupId": groupId,
			"name": name
		}
	};
};

WikiNodeService.prototype.getNodes = function(groupId) {
	return {
		"/wikinode/get-nodes": {
			"groupId": groupId
		}
	};
};

WikiNodeService.prototype.getNodes = function(groupId, status) {
	return {
		"/wikinode/get-nodes": {
			"groupId": groupId,
			"status": status
		}
	};
};

WikiNodeService.prototype.getNodes = function(groupId, start, end) {
	return {
		"/wikinode/get-nodes": {
			"groupId": groupId,
			"start": start,
			"end": end
		}
	};
};

WikiNodeService.prototype.getNodes = function(groupId, status, start, end) {
	return {
		"/wikinode/get-nodes": {
			"groupId": groupId,
			"status": status,
			"start": start,
			"end": end
		}
	};
};

WikiNodeService.prototype.getNodesCount = function(groupId) {
	return {
		"/wikinode/get-nodes-count": {
			"groupId": groupId
		}
	};
};

WikiNodeService.prototype.getNodesCount = function(groupId, status) {
	return {
		"/wikinode/get-nodes-count": {
			"groupId": groupId,
			"status": status
		}
	};
};

WikiNodeService.prototype.moveNodeToTrash = function(nodeId) {
	return {
		"/wikinode/move-node-to-trash": {
			"nodeId": nodeId
		}
	};
};

WikiNodeService.prototype.restoreNodeFromTrash = function(nodeId) {
	return {
		"/wikinode/restore-node-from-trash": {
			"nodeId": nodeId
		}
	};
};

WikiNodeService.prototype.subscribeNode = function(nodeId) {
	return {
		"/wikinode/subscribe-node": {
			"nodeId": nodeId
		}
	};
};

WikiNodeService.prototype.unsubscribeNode = function(nodeId) {
	return {
		"/wikinode/unsubscribe-node": {
			"nodeId": nodeId
		}
	};
};

WikiNodeService.prototype.updateNode = function(nodeId, name, description, serviceContext) {
	return {
		"/wikinode/update-node": {
			"nodeId": nodeId,
			"name": name,
			"description": description,
			"serviceContext": serviceContext
		}
	};
};

module.exports = WikiNodeService;