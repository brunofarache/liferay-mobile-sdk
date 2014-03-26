function PhoneService() {
}

PhoneService.prototype.addPhone = function(className, classPK, number, extension, typeId, primary) {
	return {
		"/phone/add-phone": {
			"className": className,
			"classPK": classPK,
			"number": number,
			"extension": extension,
			"typeId": typeId,
			"primary": primary
		}
	};
};

PhoneService.prototype.addPhone = function(className, classPK, number, extension, typeId, primary, serviceContext) {
	return {
		"/phone/add-phone": {
			"className": className,
			"classPK": classPK,
			"number": number,
			"extension": extension,
			"typeId": typeId,
			"primary": primary,
			"serviceContext": serviceContext
		}
	};
};

PhoneService.prototype.deletePhone = function(phoneId) {
	return {
		"/phone/delete-phone": {
			"phoneId": phoneId
		}
	};
};

PhoneService.prototype.getPhone = function(phoneId) {
	return {
		"/phone/get-phone": {
			"phoneId": phoneId
		}
	};
};

PhoneService.prototype.getPhones = function(className, classPK) {
	return {
		"/phone/get-phones": {
			"className": className,
			"classPK": classPK
		}
	};
};

PhoneService.prototype.updatePhone = function(phoneId, number, extension, typeId, primary) {
	return {
		"/phone/update-phone": {
			"phoneId": phoneId,
			"number": number,
			"extension": extension,
			"typeId": typeId,
			"primary": primary
		}
	};
};

module.exports = PhoneService;