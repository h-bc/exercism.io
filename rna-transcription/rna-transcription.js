var DnaTranscriber = function(){
	this.DnaNucleotide = ['G', 'C', 'T', 'A'];
	this.RnaNucleotide = ['C', 'G', 'A', 'U'];
};

DnaTranscriber.prototype.toRna = function(strand) {
	var output = [];
	
	for(var i = 0 ; i < strand.length ; i++) {
		var index = this.DnaNucleotide.indexOf(strand[i]);
			if (index !== -1) {
				output.push(this.RnaNucleotide[index])
			} else {
				throw new Error('Invalid input');
			}
	}

	return output.join('');
}


module.exports = DnaTranscriber ;