var PhoneNumber = function(phone) {
	this.phone = phone ;
	this.phoneCleaned = this.number();
	this.area = this.areaCode();
	this.exchangeCode = this.phoneCleaned.slice(3, 6) ;
	this.subscriberNumber = this.phoneCleaned.slice(6) ;

}

PhoneNumber.prototype.number = function() {
	var phoneCleaned = this.phone.replace(/[^0-9]/g,'') ;
	
	if (phoneCleaned.length === 11 && phoneCleaned[0] === '1') {
		return phoneCleaned.slice(1)
	}

	if (phoneCleaned.length !== 10 ) {
		return '0000000000';
	}



	return phoneCleaned
}



PhoneNumber.prototype.areaCode = function() {
	return this.phoneCleaned.slice(0, 3);
}

PhoneNumber.prototype.toString = function() {
	
	return `(${this.area}) ${this.exchangeCode}-${this.subscriberNumber}`
}

module.exports = PhoneNumber ;