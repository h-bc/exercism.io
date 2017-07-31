var bigInt = require('./big-integer');


var Grains = function Grains() {};

Grains.prototype.square = function(n){
  return bigInt('2').pow(--n).toString()
};

Grains.prototype.total = function(){
// sum of n squars = (2 pow n+1) - 1
return bigInt('2').pow('64').subtract(1).toString()

};

module.exports = Grains;

