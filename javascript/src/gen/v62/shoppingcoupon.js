function ShoppingCouponService() {
}

ShoppingCouponService.prototype.addCoupon = function(code, autoCode, name, description, startDateMonth, startDateDay, startDateYear, startDateHour, startDateMinute, endDateMonth, endDateDay, endDateYear, endDateHour, endDateMinute, neverExpire, active, limitCategories, limitSkus, minOrder, discount, discountType, serviceContext) {
	return {
		"/shoppingcoupon/add-coupon": {
			"code": code,
			"autoCode": autoCode,
			"name": name,
			"description": description,
			"startDateMonth": startDateMonth,
			"startDateDay": startDateDay,
			"startDateYear": startDateYear,
			"startDateHour": startDateHour,
			"startDateMinute": startDateMinute,
			"endDateMonth": endDateMonth,
			"endDateDay": endDateDay,
			"endDateYear": endDateYear,
			"endDateHour": endDateHour,
			"endDateMinute": endDateMinute,
			"neverExpire": neverExpire,
			"active": active,
			"limitCategories": limitCategories,
			"limitSkus": limitSkus,
			"minOrder": minOrder,
			"discount": discount,
			"discountType": discountType,
			"serviceContext": serviceContext
		}
	};
};

ShoppingCouponService.prototype.deleteCoupon = function(groupId, couponId) {
	return {
		"/shoppingcoupon/delete-coupon": {
			"groupId": groupId,
			"couponId": couponId
		}
	};
};

ShoppingCouponService.prototype.getCoupon = function(groupId, couponId) {
	return {
		"/shoppingcoupon/get-coupon": {
			"groupId": groupId,
			"couponId": couponId
		}
	};
};

ShoppingCouponService.prototype.search = function(groupId, companyId, code, active, discountType, andOperator, start, end) {
	return {
		"/shoppingcoupon/search": {
			"groupId": groupId,
			"companyId": companyId,
			"code": code,
			"active": active,
			"discountType": discountType,
			"andOperator": andOperator,
			"start": start,
			"end": end
		}
	};
};

ShoppingCouponService.prototype.updateCoupon = function(couponId, name, description, startDateMonth, startDateDay, startDateYear, startDateHour, startDateMinute, endDateMonth, endDateDay, endDateYear, endDateHour, endDateMinute, neverExpire, active, limitCategories, limitSkus, minOrder, discount, discountType, serviceContext) {
	return {
		"/shoppingcoupon/update-coupon": {
			"couponId": couponId,
			"name": name,
			"description": description,
			"startDateMonth": startDateMonth,
			"startDateDay": startDateDay,
			"startDateYear": startDateYear,
			"startDateHour": startDateHour,
			"startDateMinute": startDateMinute,
			"endDateMonth": endDateMonth,
			"endDateDay": endDateDay,
			"endDateYear": endDateYear,
			"endDateHour": endDateHour,
			"endDateMinute": endDateMinute,
			"neverExpire": neverExpire,
			"active": active,
			"limitCategories": limitCategories,
			"limitSkus": limitSkus,
			"minOrder": minOrder,
			"discount": discount,
			"discountType": discountType,
			"serviceContext": serviceContext
		}
	};
};
