var Anagram = function (subject) {
	this.subject = subject ;
};


Anagram.prototype.matches = function (...words) {
	const subject = this.subject.toLowerCase() ;
	var wordsList = (Array.isArray(words) ? 
						words : Array.apply(null, arguments));

	//var wordsList = [].concat(words);

	return wordsList.filter(word => {
		if (word.length !== subject.length) {
			return false ;
		}
		
		
		if (word.toLowerCase() === subject) {
			return false ;
		}

		const wordChars = word.toLowerCase().split('').sort().join('') ;
		const subjectChars = subject.split('').sort().join('');

		return wordChars === subjectChars ;
	})
	
};


module.exports = Anagram ;
