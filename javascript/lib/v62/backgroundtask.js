function BackgroundTaskService() {
}

BackgroundTaskService.prototype.getBackgroundTaskStatusJson = function(backgroundTaskId) {
	return {
		"/backgroundtask/get-background-task-status-json": {
			"backgroundTaskId": backgroundTaskId
		}
	};
};

BackgroundTaskService.prototype.getBackgroundTasksCount = function(groupId, taskExecutorClassName, completed) {
	return {
		"/backgroundtask/get-background-tasks-count": {
			"groupId": groupId,
			"taskExecutorClassName": taskExecutorClassName,
			"completed": completed
		}
	};
};

module.exports = BackgroundTaskService;