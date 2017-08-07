const Cipher = function (key) {

        if (key === undefined) {
            key = 'qwertyuioplkjhgfdsazxcvbnm';
        }
        if (key.toUpperCase() === key || key === '') {
            throw Error('Bad key')
        }
        this.key = key ;

}

Cipher.prototype.subsitute = function (char, toChar, backward = false ) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let position ;    
    if (backward) {
            position = (alphabet.indexOf(char) + 26 - alphabet.indexOf(toChar)) % 26 ;
        } else {
            position = (alphabet.indexOf(char) +  alphabet.indexOf(toChar)) % 26 ;
        }
    return (alphabet[position]) ;

}

    Cipher.prototype.encode = function (plainText) {
        let output = ''
        for (let i = 0; i < plainText.length; i++) {
            output += this.subsitute(plainText[i], this.key[i] ) ; 
        }
        return output;
    }


    Cipher.prototype.decode = function (cipherText) {
        
        let output = ''
        for (let i = 0; i < cipherText.length; i++) {
           output += this.subsitute(cipherText[i], this.key[i], true  ) ; 
        }
        return output;
    }



    module.exports = Cipher;