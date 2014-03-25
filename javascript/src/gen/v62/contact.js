function ContactService() {
}

ContactService.prototype.getContact = function(contactId) {
	return {
		"/contact/get-contact": {
			"contactId": contactId
		}
	};
};

ContactService.prototype.getContacts = function(classNameId, classPK, start, end, orderByComparator) {
	return {
		"/contact/get-contacts": {
			"classNameId": classNameId,
			"classPK": classPK,
			"start": start,
			"end": end,
			"orderByComparator": orderByComparator
		}
	};
};

ContactService.prototype.getContactsCount = function(classNameId, classPK) {
	return {
		"/contact/get-contacts-count": {
			"classNameId": classNameId,
			"classPK": classPK
		}
	};
};
