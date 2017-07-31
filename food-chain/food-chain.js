const song = require('./lyrics') ;

var FoodChain = function () {}

FoodChain.prototype.verse = function(index){
	return song[index - 1];
};

FoodChain.prototype.verses = function(from, to){
	var output = [] ;
	
	for (var i = from ; i <= to  ; i++ ) {
		output.push(this.verse(i)) ;
	}

	return output.join('\n') + '\n';

	
};


module.exports = FoodChain ;



