


var isPangram = function(sentence){
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	
	if (! sentence ) {
		return false ;
	}
	return alphabet.split('')
				   .every( c => sentence.toLowerCase().indexOf(c) !== -1  )

}

console.log(isPangram('the 1 quick brown fox jumps over the 2 lazy dogs'));