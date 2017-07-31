var BeerSong = function () {};

BeerSong.prototype.verse = function(verse){
	
	if (verse > 2 ) {
		return `${verse} bottles of beer on the wall, ${verse} bottles of beer.\nTake one down and pass it around, ${verse - 1} bottles of beer on the wall.\n`
	} 
		
	if (verse == 2) {

		return `${verse} bottles of beer on the wall, ${verse} bottles of beer.\nTake one down and pass it around, ${verse - 1} bottle of beer on the wall.\n`
	}
	
	if (verse == 1 ) {
		return `${verse} bottle of beer on the wall, ${verse} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`

	}

	return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'

} ;


BeerSong.prototype.sing = function(position, offset=0) {
	
	var output = [];
	for (var i = position ; i >= offset ; i-- ) {
		output.push(this.verse(i));
		
	}
	
	return output.join('\n');
}



module.exports = BeerSong ;