const Binary = function (binaryNumberAsString) {
    const isNotValid = /[^01]/ig.test(binaryNumberAsString) ;  
    this.binaryNumberAsString =  isNotValid ? '0' : binaryNumberAsString;
}
Binary.prototype.toDecimal = function () {
    return this.binaryNumberAsString
        .split('')
        .reverse()
        .reduce((sum, digit, index) => {
            return sum += parseInt(digit) * Math.pow(2, index);
        }, 0)
}
module.exports = Binary;