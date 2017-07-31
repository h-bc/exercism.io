
var Year = function(input) {
	this.year = input;
};

Year.prototype.isLeap = function() {
	// if (this.year % 4 === 0) {
	// 	if (this.year % 100 === 0 ) {
	// 		if (this.year % 400 === 0) {
	// 			return true ;
	// 		} else {
	// 			return false ;
	// 		}
	// 	} else {
	// 		return true ;
	// 	}
	// } else {
	// 	return false ;
	// }

	if (this.year % 4 !== 0) return false ; 
	if (this.year % 100 !== 0) return  true ; 
	if (this.year % 400 !== 0) return  false ; 
	return true ;

			
};

Year.prototype.isLeapBestSolution = function() {
	
	if (this.year % 4 !== 0) return false ; 
	if (this.year % 100 !== 0) return  true ; 
	if (this.year % 400 !== 0) return  false ; 
	return true ;



			
};

module.exports = Year;
