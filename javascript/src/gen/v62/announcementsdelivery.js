function AnnouncementsDeliveryService() {
}

AnnouncementsDeliveryService.prototype.updateDelivery = function(userId, type, email, sms, website) {
	return {
		"/announcementsdelivery/update-delivery": {
			"userId": userId,
			"type": type,
			"email": email,
			"sms": sms,
			"website": website
		}
	};
};
