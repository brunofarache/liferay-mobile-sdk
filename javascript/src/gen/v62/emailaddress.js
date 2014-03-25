function EmailAddressService() {
}

EmailAddressService.prototype.addEmailAddress = function(className, classPK, address, typeId, primary) {
	return {
		"/emailaddress/add-email-address": {
			"className": className,
			"classPK": classPK,
			"address": address,
			"typeId": typeId,
			"primary": primary
		}
	};
};

EmailAddressService.prototype.addEmailAddress = function(className, classPK, address, typeId, primary, serviceContext) {
	return {
		"/emailaddress/add-email-address": {
			"className": className,
			"classPK": classPK,
			"address": address,
			"typeId": typeId,
			"primary": primary,
			"serviceContext": serviceContext
		}
	};
};

EmailAddressService.prototype.deleteEmailAddress = function(emailAddressId) {
	return {
		"/emailaddress/delete-email-address": {
			"emailAddressId": emailAddressId
		}
	};
};

EmailAddressService.prototype.getEmailAddress = function(emailAddressId) {
	return {
		"/emailaddress/get-email-address": {
			"emailAddressId": emailAddressId
		}
	};
};

EmailAddressService.prototype.getEmailAddresses = function(className, classPK) {
	return {
		"/emailaddress/get-email-addresses": {
			"className": className,
			"classPK": classPK
		}
	};
};

EmailAddressService.prototype.updateEmailAddress = function(emailAddressId, address, typeId, primary) {
	return {
		"/emailaddress/update-email-address": {
			"emailAddressId": emailAddressId,
			"address": address,
			"typeId": typeId,
			"primary": primary
		}
	};
};
