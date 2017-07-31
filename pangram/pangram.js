var Pangram = function(sentence){
    this.sentence = sentence ;
};

Pangram.prototype.isPangram = function(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    if (! this.sentence ) {
        return false ;
    }
    return alphabet.split('')
                   .every( c => this.sentence.toLowerCase().indexOf(c) !== -1  )

}


module.exports = Pangram ;