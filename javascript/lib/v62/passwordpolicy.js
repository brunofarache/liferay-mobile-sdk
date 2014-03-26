function PasswordPolicyService() {
}

PasswordPolicyService.prototype.addPasswordPolicy = function(name, description, changeable, changeRequired, minAge, checkSyntax, allowDictionaryWords, minAlphanumeric, minLength, minLowerCase, minNumbers, minSymbols, minUpperCase, history, historyCount, expireable, maxAge, warningTime, graceLimit, lockout, maxFailure, lockoutDuration, resetFailureCount, resetTicketMaxAge) {
	return {
		"/passwordpolicy/add-password-policy": {
			"name": name,
			"description": description,
			"changeable": changeable,
			"changeRequired": changeRequired,
			"minAge": minAge,
			"checkSyntax": checkSyntax,
			"allowDictionaryWords": allowDictionaryWords,
			"minAlphanumeric": minAlphanumeric,
			"minLength": minLength,
			"minLowerCase": minLowerCase,
			"minNumbers": minNumbers,
			"minSymbols": minSymbols,
			"minUpperCase": minUpperCase,
			"history": history,
			"historyCount": historyCount,
			"expireable": expireable,
			"maxAge": maxAge,
			"warningTime": warningTime,
			"graceLimit": graceLimit,
			"lockout": lockout,
			"maxFailure": maxFailure,
			"lockoutDuration": lockoutDuration,
			"resetFailureCount": resetFailureCount,
			"resetTicketMaxAge": resetTicketMaxAge
		}
	};
};

PasswordPolicyService.prototype.addPasswordPolicy = function(name, description, changeable, changeRequired, minAge, checkSyntax, allowDictionaryWords, minAlphanumeric, minLength, minLowerCase, minNumbers, minSymbols, minUpperCase, regex, history, historyCount, expireable, maxAge, warningTime, graceLimit, lockout, maxFailure, lockoutDuration, resetFailureCount, resetTicketMaxAge, serviceContext) {
	return {
		"/passwordpolicy/add-password-policy": {
			"name": name,
			"description": description,
			"changeable": changeable,
			"changeRequired": changeRequired,
			"minAge": minAge,
			"checkSyntax": checkSyntax,
			"allowDictionaryWords": allowDictionaryWords,
			"minAlphanumeric": minAlphanumeric,
			"minLength": minLength,
			"minLowerCase": minLowerCase,
			"minNumbers": minNumbers,
			"minSymbols": minSymbols,
			"minUpperCase": minUpperCase,
			"regex": regex,
			"history": history,
			"historyCount": historyCount,
			"expireable": expireable,
			"maxAge": maxAge,
			"warningTime": warningTime,
			"graceLimit": graceLimit,
			"lockout": lockout,
			"maxFailure": maxFailure,
			"lockoutDuration": lockoutDuration,
			"resetFailureCount": resetFailureCount,
			"resetTicketMaxAge": resetTicketMaxAge,
			"serviceContext": serviceContext
		}
	};
};

PasswordPolicyService.prototype.deletePasswordPolicy = function(passwordPolicyId) {
	return {
		"/passwordpolicy/delete-password-policy": {
			"passwordPolicyId": passwordPolicyId
		}
	};
};

PasswordPolicyService.prototype.updatePasswordPolicy = function(passwordPolicyId, name, description, changeable, changeRequired, minAge, checkSyntax, allowDictionaryWords, minAlphanumeric, minLength, minLowerCase, minNumbers, minSymbols, minUpperCase, history, historyCount, expireable, maxAge, warningTime, graceLimit, lockout, maxFailure, lockoutDuration, resetFailureCount, resetTicketMaxAge) {
	return {
		"/passwordpolicy/update-password-policy": {
			"passwordPolicyId": passwordPolicyId,
			"name": name,
			"description": description,
			"changeable": changeable,
			"changeRequired": changeRequired,
			"minAge": minAge,
			"checkSyntax": checkSyntax,
			"allowDictionaryWords": allowDictionaryWords,
			"minAlphanumeric": minAlphanumeric,
			"minLength": minLength,
			"minLowerCase": minLowerCase,
			"minNumbers": minNumbers,
			"minSymbols": minSymbols,
			"minUpperCase": minUpperCase,
			"history": history,
			"historyCount": historyCount,
			"expireable": expireable,
			"maxAge": maxAge,
			"warningTime": warningTime,
			"graceLimit": graceLimit,
			"lockout": lockout,
			"maxFailure": maxFailure,
			"lockoutDuration": lockoutDuration,
			"resetFailureCount": resetFailureCount,
			"resetTicketMaxAge": resetTicketMaxAge
		}
	};
};

PasswordPolicyService.prototype.updatePasswordPolicy = function(passwordPolicyId, name, description, changeable, changeRequired, minAge, checkSyntax, allowDictionaryWords, minAlphanumeric, minLength, minLowerCase, minNumbers, minSymbols, minUpperCase, regex, history, historyCount, expireable, maxAge, warningTime, graceLimit, lockout, maxFailure, lockoutDuration, resetFailureCount, resetTicketMaxAge, serviceContext) {
	return {
		"/passwordpolicy/update-password-policy": {
			"passwordPolicyId": passwordPolicyId,
			"name": name,
			"description": description,
			"changeable": changeable,
			"changeRequired": changeRequired,
			"minAge": minAge,
			"checkSyntax": checkSyntax,
			"allowDictionaryWords": allowDictionaryWords,
			"minAlphanumeric": minAlphanumeric,
			"minLength": minLength,
			"minLowerCase": minLowerCase,
			"minNumbers": minNumbers,
			"minSymbols": minSymbols,
			"minUpperCase": minUpperCase,
			"regex": regex,
			"history": history,
			"historyCount": historyCount,
			"expireable": expireable,
			"maxAge": maxAge,
			"warningTime": warningTime,
			"graceLimit": graceLimit,
			"lockout": lockout,
			"maxFailure": maxFailure,
			"lockoutDuration": lockoutDuration,
			"resetFailureCount": resetFailureCount,
			"resetTicketMaxAge": resetTicketMaxAge,
			"serviceContext": serviceContext
		}
	};
};

module.exports = PasswordPolicyService;