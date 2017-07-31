var Isogram = function(phrase) {
	this.phrase = phrase ;
}

Isogram.prototype.isIsogram = function () {
	
	const p = this.phrase.toLowerCase();	
	
	return    p.split('')
		       .every(c => {
		       	 if (c === '-' ||  c === ' ') {
		       	 	return true;
		       	 }

		       	 if (p.indexOf(c) === p.lastIndexOf(c)) {
		       	 	return true ;
		       	 } else {
		       	 	return false ;
		       	 }
		       })
}



module.exports = Isogram ;