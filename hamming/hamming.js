var Hamming = function() {
	

};


Hamming.prototype.compute = function(S1, S2) {
		
		if (S1.length !== S2.length) {
			throw new Error('DNA strands must be of equal length.')
		}

	var counter = 0 ;
	for(var i=0 ; i < S1.length ; i++) {
		if(S1[i] !== S2[i]) {
			counter++;
		}

	}
	return counter ;
}


module.exports = Hamming;