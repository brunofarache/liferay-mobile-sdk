function RegionService() {
}

RegionService.prototype.addRegion = function(countryId, regionCode, name, active) {
	return {
		"/region/add-region": {
			"countryId": countryId,
			"regionCode": regionCode,
			"name": name,
			"active": active
		}
	};
};

RegionService.prototype.fetchRegion = function(countryId, regionCode) {
	return {
		"/region/fetch-region": {
			"countryId": countryId,
			"regionCode": regionCode
		}
	};
};

RegionService.prototype.getRegion = function(regionId) {
	return {
		"/region/get-region": {
			"regionId": regionId
		}
	};
};

RegionService.prototype.getRegion = function(countryId, regionCode) {
	return {
		"/region/get-region": {
			"countryId": countryId,
			"regionCode": regionCode
		}
	};
};

RegionService.prototype.getRegions = function() {
	return {
		"/region/get-regions": {
		}
	};
};

RegionService.prototype.getRegions = function(active) {
	return {
		"/region/get-regions": {
			"active": active
		}
	};
};

RegionService.prototype.getRegions = function(countryId) {
	return {
		"/region/get-regions": {
			"countryId": countryId
		}
	};
};

RegionService.prototype.getRegions = function(countryId, active) {
	return {
		"/region/get-regions": {
			"countryId": countryId,
			"active": active
		}
	};
};

module.exports = RegionService;