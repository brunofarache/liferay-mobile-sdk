function AddressService() {
}

AddressService.prototype.addAddress = function(className, classPK, street1, street2, street3, city, zip, regionId, countryId, typeId, mailing, primary) {
	return {
		"/address/add-address": {
			"className": className,
			"classPK": classPK,
			"street1": street1,
			"street2": street2,
			"street3": street3,
			"city": city,
			"zip": zip,
			"regionId": regionId,
			"countryId": countryId,
			"typeId": typeId,
			"mailing": mailing,
			"primary": primary
		}
	};
};

AddressService.prototype.addAddress = function(className, classPK, street1, street2, street3, city, zip, regionId, countryId, typeId, mailing, primary, serviceContext) {
	return {
		"/address/add-address": {
			"className": className,
			"classPK": classPK,
			"street1": street1,
			"street2": street2,
			"street3": street3,
			"city": city,
			"zip": zip,
			"regionId": regionId,
			"countryId": countryId,
			"typeId": typeId,
			"mailing": mailing,
			"primary": primary,
			"serviceContext": serviceContext
		}
	};
};

AddressService.prototype.deleteAddress = function(addressId) {
	return {
		"/address/delete-address": {
			"addressId": addressId
		}
	};
};

AddressService.prototype.getAddress = function(addressId) {
	return {
		"/address/get-address": {
			"addressId": addressId
		}
	};
};

AddressService.prototype.getAddresses = function(className, classPK) {
	return {
		"/address/get-addresses": {
			"className": className,
			"classPK": classPK
		}
	};
};

AddressService.prototype.updateAddress = function(addressId, street1, street2, street3, city, zip, regionId, countryId, typeId, mailing, primary) {
	return {
		"/address/update-address": {
			"addressId": addressId,
			"street1": street1,
			"street2": street2,
			"street3": street3,
			"city": city,
			"zip": zip,
			"regionId": regionId,
			"countryId": countryId,
			"typeId": typeId,
			"mailing": mailing,
			"primary": primary
		}
	};
};

module.exports = AddressService;