function CountryService() {
}

CountryService.prototype.addCountry = function(name, a2, a3, number, idd, active) {
	return {
		"/country/add-country": {
			"name": name,
			"a2": a2,
			"a3": a3,
			"number": number,
			"idd": idd,
			"active": active
		}
	};
};

CountryService.prototype.fetchCountry = function(countryId) {
	return {
		"/country/fetch-country": {
			"countryId": countryId
		}
	};
};

CountryService.prototype.fetchCountryByA2 = function(a2) {
	return {
		"/country/fetch-country-by-a2": {
			"a2": a2
		}
	};
};

CountryService.prototype.fetchCountryByA3 = function(a3) {
	return {
		"/country/fetch-country-by-a3": {
			"a3": a3
		}
	};
};

CountryService.prototype.getCountries = function() {
	return {
		"/country/get-countries": {
		}
	};
};

CountryService.prototype.getCountries = function(active) {
	return {
		"/country/get-countries": {
			"active": active
		}
	};
};

CountryService.prototype.getCountry = function(countryId) {
	return {
		"/country/get-country": {
			"countryId": countryId
		}
	};
};

CountryService.prototype.getCountryByA2 = function(a2) {
	return {
		"/country/get-country-by-a2": {
			"a2": a2
		}
	};
};

CountryService.prototype.getCountryByA3 = function(a3) {
	return {
		"/country/get-country-by-a3": {
			"a3": a3
		}
	};
};

CountryService.prototype.getCountryByName = function(name) {
	return {
		"/country/get-country-by-name": {
			"name": name
		}
	};
};

module.exports = CountryService;