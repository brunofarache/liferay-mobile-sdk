function TeamService() {
}

TeamService.prototype.addTeam = function(groupId, name, description) {
	return {
		"/team/add-team": {
			"groupId": groupId,
			"name": name,
			"description": description
		}
	};
};

TeamService.prototype.deleteTeam = function(teamId) {
	return {
		"/team/delete-team": {
			"teamId": teamId
		}
	};
};

TeamService.prototype.getGroupTeams = function(groupId) {
	return {
		"/team/get-group-teams": {
			"groupId": groupId
		}
	};
};

TeamService.prototype.getTeam = function(teamId) {
	return {
		"/team/get-team": {
			"teamId": teamId
		}
	};
};

TeamService.prototype.getTeam = function(groupId, name) {
	return {
		"/team/get-team": {
			"groupId": groupId,
			"name": name
		}
	};
};

TeamService.prototype.getUserTeams = function(userId) {
	return {
		"/team/get-user-teams": {
			"userId": userId
		}
	};
};

TeamService.prototype.getUserTeams = function(userId, groupId) {
	return {
		"/team/get-user-teams": {
			"userId": userId,
			"groupId": groupId
		}
	};
};

TeamService.prototype.hasUserTeam = function(userId, teamId) {
	return {
		"/team/has-user-team": {
			"userId": userId,
			"teamId": teamId
		}
	};
};

TeamService.prototype.updateTeam = function(teamId, name, description) {
	return {
		"/team/update-team": {
			"teamId": teamId,
			"name": name,
			"description": description
		}
	};
};
